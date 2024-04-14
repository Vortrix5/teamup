import { getFirestore, doc, setDoc, collection, getDocs, addDoc, deleteDoc, getDoc } from "firebase/firestore";
import {app} from "@/firebase";
import Question from "@/models/question.js";

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
}
