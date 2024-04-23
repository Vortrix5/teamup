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

  calculateScores() {
    const scores = {
      extraversion: 35,
      agreeableness: 34,
      conscientiousness: 14,
      neuroticism: 58,
      openness: 48,
    };

    const questionMapping = {
      1: {trait: 'extraversion', add: true},
      2: {trait: 'agreeableness', add: false},
      3: {trait: 'conscientiousness', add: true},
      4: {trait: 'neuroticism', add: false},
      5: {trait: 'openness', add: true},
      6: {trait: 'extraversion', add: false},
      7: {trait: 'agreeableness', add: true},
      8: {trait: 'conscientiousness', add: false},
      9: {trait: 'neuroticism', add: true},
      10: {trait: 'openness', add: false},
      11: {trait: 'extraversion', add: true},
      12: {trait: 'agreeableness', add: false},
      13: {trait: 'conscientiousness', add: true},
      14: {trait: 'neuroticism', add: false},
      15: {trait: 'openness', add: true},
      16: {trait: 'extraversion', add: false},
      17: {trait: 'agreeableness', add: true},
      18: {trait: 'conscientiousness', add: false},
      19: {trait: 'neuroticism', add: true},
      20: {trait: 'openness', add: false},
      21: {trait: 'extraversion', add: true},
      22: {trait: 'agreeableness', add: false},
      23: {trait: 'conscientiousness', add: true},
      24: {trait: 'neuroticism', add: false},
      25: {trait: 'openness', add: true},
      26: {trait: 'extraversion', add: false},
      27: {trait: 'agreeableness', add: true},
      28: {trait: 'conscientiousness', add: false},
      29: {trait: 'neuroticism', add: false},
      30: {trait: 'openness', add: false},
      31: {trait: 'extraversion', add: true},
      32: {trait: 'agreeableness', add: false},
      33: {trait: 'conscientiousness', add: true},
      34: {trait: 'neuroticism', add: false},
      35: {trait: 'openness', add: true},
      36: {trait: 'extraversion', add: false},
      37: {trait: 'agreeableness', add: true},
      38: {trait: 'conscientiousness', add: false},
      39: {trait: 'neuroticism', add: false},
      40: {trait: 'openness', add: true},
      41: {trait: 'extraversion', add: true},
      42: {trait: 'agreeableness', add: true},
      43: {trait: 'conscientiousness', add: true},
      44: {trait: 'neuroticism', add: false},
      45: {trait: 'openness', add: true},
      46: {trait: 'extraversion', add: false},
      47: {trait: 'agreeableness', add: true},
      48: {trait: 'conscientiousness', add: true},
      49: {trait: 'neuroticism', add: false},
      50: {trait: 'openness', add: true},
    };
    const answers = this.results.results.map(result => result.answer);
    for (let i = 1; i <= answers.length; i++) {
      const {trait, add} = questionMapping[i];
      scores[trait] = add ? scores[trait] + parseInt(answers[i-1]) : scores[trait] - parseInt(answers[i-1]);
    }

    return scores;
  }
}
