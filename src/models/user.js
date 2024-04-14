import { v4 as uuid_v4 } from "uuid";

export default class User {
  constructor(id, firstName, lastName, email, password, role) {
    this.id = uuid_v4();
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.role = role;
    this.personalityType = null;
  }
}
