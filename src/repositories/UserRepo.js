import { reactive } from "vue";
import Session from "@/models/session";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc, query, where, getDocs, collection } from "firebase/firestore";
import {app} from "@/firebase";

const session = new Session();
const users = reactive([]); // Reactive store for users

const auth = getAuth(app);
const db = getFirestore(app);

export function addUser(user) {
  return createUserWithEmailAndPassword(auth, user.email, user.password)
    .then((userCredential) => {
      // Add a new document in collection "users"
      return setDoc(doc(db, "users", userCredential.user.uid), {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        role: user.role,
      })
        .then(() => {
          console.log("User added to Firestore");
          session.login(user);
          users.push(user); // Add user to local store
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
    // Signed in
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

export function logout() {
  session.logout();
}

export function getUsers() {
  return users; // Return local store of users
}
