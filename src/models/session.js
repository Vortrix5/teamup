import {getAuth, signOut } from "firebase/auth";
import {app} from "@/firebase";


const auth = getAuth(app);

export default class Session {


  constructor() {
    this.currentUser = this.loadUser();
  }

  login(user) {
    this.currentUser = user;
    this.saveUser(user);
  }

  logout() {
    signOut(auth).then(() => {
      this.currentUser = null;
      this.clearUser();
    }).catch((error) => {
      console.error("Error signing out: ", error);
    });
  }

  isLoggedIn() {
    return this.currentUser !== null;
  }

  getCurrentUser() {
    return this.currentUser;
  }

  saveUser(user) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  loadUser() {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }

  clearUser() {
    localStorage.removeItem('user');
  }
}
