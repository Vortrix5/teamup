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

import { getFirestore, doc, setDoc, collection, getDocs, addDoc, deleteDoc } from "firebase/firestore";
import {app} from "@/firebase";
import Course from "@/models/course.js";

const db = getFirestore(app);

export class CourseRepo {
  static courses = reactive([]);
  static async addCourse(name, link, tags, imageLink) {
    const newCourse = new Course(name, link, tags, imageLink);
    try {
      const docRef = await addDoc(collection(db, "courses"), JSON.parse(JSON.stringify(newCourse)));
      console.log("Course added to Firestore with ID: ", docRef.id);
      this.courses.push(newCourse);
    } catch (error) {
      console.error("Error adding course to Firestore: ", error);
    }
  }

  static async removeCourse(docId) {
    try {
      await deleteDoc(doc(db, "courses", docId));
      console.log("Course removed from Firestore with ID: ", docId);
    } catch (error) {
      console.error("Error removing course from Firestore: ", error);
    }
  }

  static async updateCourse(docId, name, link, tags, imageLink) {
    const newCourse = new Course(name, link, tags, imageLink);
    try {
      await setDoc(doc(db, "courses", docId), newCourse);
      console.log("Course updated in Firestore with ID: ", docId);
    } catch (error) {
      console.error("Error updating course in Firestore: ", error);
    }
  }

  static async getCourses() {
    this.courses = [];
    const querySnapshot = await getDocs(collection(db, "courses"));
    querySnapshot.forEach((doc) => {
      this.courses.push(doc.data());
    });
    return this.courses;
  }
}
