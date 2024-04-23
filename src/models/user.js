import { v4 as uuid_v4 } from "uuid";
import PersonalityTest from "@/models/personalityTest";

export default class User {
  constructor(firstName, lastName, email, password, role, managerID) {
    this.id = uuid_v4();
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.role = role;
    this.managerID = managerID;
    this.personalityTest = new PersonalityTest();
    this.testSubmitted = false;
  }

  addTestResult(questionId, answer) {
    this.personalityTest.addResult(questionId, answer);
  }
  getTestResults() {
    return this.personalityTest.getResults();
  }

  getTestScores() {
    return this.personalityTest.calculateScores();
  }
}
