export default class PersonalityTest {
  constructor(questions = []) {
    this.questions = questions;
    this.answers = {};
  }

  answerQuestion(questionId, answer) {
    this.answers[questionId] = answer;
  }

  calculateScores() {
    let scores = {
      extraversion: 0,
      agreeableness: 0,
      conscientiousness: 0,
      neuroticism: 0,
      openness: 0
    };

    for (let questionId in this.answers) {
      let question = this.questions.find(q => q.id === questionId);

      if (question) {
        scores[question.trait] += this.answers[questionId];
      }
    }

    return scores;
  }

  determinePersonalityType() {
    // Implement your logic to determine the personality type based on the scores
    // Return the determined personality type
  }
}
