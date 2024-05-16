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
