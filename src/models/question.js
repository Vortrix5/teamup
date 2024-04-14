import { v4 as uuid_v4 } from "uuid";

export default class Question {
  constructor(text, type) {
    this.id = uuid_v4();
    this.text = text;
    this.type = type; // 'extraversion', 'agreeableness', 'openness', 'conscientiousness', or 'neuroticism'
  }
}
