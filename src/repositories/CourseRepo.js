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
