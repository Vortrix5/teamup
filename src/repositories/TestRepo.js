import {
  getFirestore,
  doc,
  setDoc,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  getDoc,
  query,
  where
} from "firebase/firestore";
import {app} from "@/firebase";
import Question from "@/models/question.js";
import {getUserById} from "@/repositories/UserRepo";
import { session } from "@/repositories/UserRepo";

const db = getFirestore(app);

export class TestRepo {
  static questions = reactive([]); // This will be the reactive store for your questions

  static async getPersonalityTest() {
    const docRef = doc(db, "tests", "personalityTest");
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      this.questions = docSnap.data().questions;
    } else {
      console.log("No such document!");
    }
    return this.questions;
  }

  static async updatePersonalityTest(test) {
    const docRef = doc(db, "tests", "personalityTest");
    await setDoc(docRef, { questions: JSON.parse(JSON.stringify(test)) });
    console.log("Test updated in Firestore");
  }


  static async addQuestion(text, type) {
    const newQuestion = new Question(text, type);
    this.questions.push(newQuestion);
    this.updatePersonalityTest(this.questions);
  }

  static async removeQuestion(index) {
    this.questions.splice(index, 1);
    this.updatePersonalityTest(this.questions);
  }

  static async updateUserTest(userId, test) {
    const q = query(collection(db, "users"), where("id", "==", userId));
    const querySnapshot = await getDocs(q);
    let docId = null;
    querySnapshot.forEach((doc) => {
      docId = doc.id;
    });

    if (docId) {
      const docRef = doc(db, "users", docId);
      await setDoc(docRef, { personalityTest: JSON.parse(JSON.stringify(test)), testSubmitted: true }, { merge: true }); // Add testSubmitted: true
      const updatedUser = await getUserById(userId);
      session.login(updatedUser);
      console.log("User test updated in Firestore");
    } else {
      console.log("No user found with the given userId");
    }
  }
  static async getTestResults() {
    const q = collection(db, "users");
    const querySnapshot = await getDocs(q);
    let results = [];
    querySnapshot.forEach((doc) => {
      results.push(doc.data().personalityTest);
    });
    return results;
  }
  static getQuestionById(id) {
    return this.questions.find((question) => question.id === id);
  }
}
