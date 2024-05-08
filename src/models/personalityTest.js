import {TestRepo} from "@/repositories/TestRepo";

export default class PersonalityTest {
  constructor() {
    this.results = []; // Array of { questionId: String, answer: Number }
  }

  addResult(questionId, answer) {
    this.results.push({questionId, answer});
  }

  getResults() {
    return this.results;
  }

  async calculateScores() {
    const scores = {
      Extraversion: 20,
      Agreeableness: 20,
      Conscientiousness: 20,
      Neuroticism: 20,
      Openness: 20,
    };

    console.log(this.results);
    const questionIds = this.results.map(result => result.questionId);
    console.log(questionIds);
    const answers = this.results.map(result => result.answer);

    for (let i = 0; i < questionIds.length; i++) {
      const question = await TestRepo.getQuestionById(questionIds[i]);
      question.add ? scores[question.type] += parseInt(answers[i]) : scores[question.type] -= parseInt(answers[i]);
    }

    let personalityType = '';
    //Get personality type with highest score
    let maxPersonalityTrait = '';
    let maxScore = 0;
    for (const trait in scores) {
      if (scores[trait] > maxScore) {
        maxScore = scores[trait];
        maxPersonalityTrait = trait;
      }
    }

    if (maxPersonalityTrait === 'Extraversion') {
      personalityType = 'The Diplomat';
    }else if(maxPersonalityTrait === 'Agreeableness'){
      personalityType = 'The Guardian';
    }else if(maxPersonalityTrait === 'Conscientiousness'){
      personalityType = 'The Maverick';
    }else if (maxPersonalityTrait === 'Neuroticism'){
      personalityType = 'The Analyst';
    }else if (maxPersonalityTrait === 'Openness'){
      personalityType = 'The Trailblazer';
    }

    return { scores, personalityType };
  }
}
