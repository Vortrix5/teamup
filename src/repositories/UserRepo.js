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

import { reactive } from "vue";
import Session from "@/models/session";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {getFirestore, doc, setDoc, query, where, getDocs, collection} from "firebase/firestore";
import {app} from "@/firebase";


export const session = new Session();
const users = reactive([]); // Reactive store for users

const auth = getAuth(app);
const db = getFirestore(app);

export async function addUser(user) {
  return createUserWithEmailAndPassword(auth, user.email, user.password)
    .then((userCredential) => {
      return setDoc(doc(db, "users", userCredential.user.uid), {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        role: user.role,
        managerID: user.managerID || null,
      })
        .then(async () => {
          console.log("User added to Firestore");
          users.push(user);
        })
        .catch((error) => {
          console.error("Error adding user to Firestore: ", error);
        });
    })
    .catch((error) => {
      console.error("Error creating user: ", error);
    });
}

export async function findUserByEmailAndPassword(email, password) {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    const q = query(collection(db, "users"), where("email", "==", email));
    const querySnapshot = await getDocs(q);
    let user = null;
    querySnapshot.forEach((doc) => {
      user = doc.data();
    });
    session.login(user);
    return user;
  } catch (error) {
    console.error("Error signing in: ", error);
  }
}

export async function findUserByEmail(email) {
  try {
    const q = query(collection(db, "users"), where("email", "==", email));
    const querySnapshot = await getDocs(q);
    let user = null;
    querySnapshot.forEach((doc) => {
      user = doc.data();
    });
    return user;
  } catch (error) {
    console.error("Error finding user by email: ", error);
  }
}
export function getCurrentUser() {
  return session.getCurrentUser();
}

export function updateUser(user) {
  const index = users.findIndex(u => u.id === user.id);
  if (index !== -1) {
    users[index] = user;
  }
}

export function logout() {
  session.logout();
}

export async function getAllUsers() {
  const querySnapshot = await getDocs(collection(db, "users"));
  const users = querySnapshot.docs.map(doc => doc.data());
  console.log(users)
  return users;
}

export async function getUserById(id) {
  const q = query(collection(db, "users"), where("id", "==", id));
  const userDoc = await getDocs(q);
  let user = null;
  userDoc.forEach((doc) => {
    user = doc.data();
  });
  return user;
}
