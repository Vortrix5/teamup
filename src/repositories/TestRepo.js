/*
 * MIT License
 *
 * Copyright (c) 2024 Mohamed Amine Zouaoui
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

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

  static async updateUserTest(userId, test, personalityType,scores) {
    const q = query(collection(db, "users"), where("id", "==", userId));
    const querySnapshot = await getDocs(q);
    let docId = null;
    querySnapshot.forEach((doc) => {
      docId = doc.id;
    });

    if (docId) {
      const docRef = doc(db, "users", docId);
      await setDoc(docRef, { personalityTest: JSON.parse(JSON.stringify(test)), personalityType, scores, testSubmitted: true }, { merge: true });
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
  static async getQuestionById(id) {
    if(this.questions.length === 0)  this.questions = await this.getPersonalityTest();
    return this.questions.find((question) => question.id === id);
  }

  static async resetUserTest(userId) {
    const q = query(collection(db, "users"), where("id", "==", userId));
    const querySnapshot = await getDocs(q);
    let docId = null;
    querySnapshot.forEach((doc) => {
      docId = doc.id;
    });

    if (docId) {
      const docRef = doc(db, "users", docId);
      await setDoc(docRef, { testSubmitted: false }, { merge: true });
      console.log("User test reset in Firestore");
    } else {
      console.log("No user found with the given userId");
    }
  }
}
