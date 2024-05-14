<template>
  <v-container>
    <v-card class="mx-auto" max-width="800">
      <v-card-title v-if="!testSubmitted" >
        <h2 class="text-h4">Big Five Personality Test</h2>
        <br>
      </v-card-title>
      <v-card-text>
        <v-form v-if="!testSubmitted" @submit.prevent="submitTest">
          <div v-for="question in currentQuestions" :key="question.id">
            <p class="text-h6">{{ question.text }}</p>
            <v-radio-group v-model="answers[question.id]" row>
              <v-radio label="Disagree" value="1"></v-radio>
              <v-radio label="Slightly Disagree" value="2"></v-radio>
              <v-radio label="Neutral" value="3"></v-radio>
              <v-radio label="Slightly Agree" value="4"></v-radio>
              <v-radio label="Agree" value="5"></v-radio>
            </v-radio-group>
          </div>
          <v-btn class="mr-3" color="primary" @click="currentStep--" v-if="currentStep > 0">Previous</v-btn>
          <v-btn class="mr-3" color="primary" @click="currentStep++" v-if="currentStep < Math.ceil(questions.length / QUESTIONS_PER_STEP) - 1">Next</v-btn>
          <v-btn color="primary" type="submit" v-if="currentStep === Math.ceil(questions.length / QUESTIONS_PER_STEP) - 1">Submit</v-btn>
        </v-form>
        <div v-else class="text-center">
          <h2 class="my-5 text-h4">The form was successfully filled. Please check the results tab to see your results.</h2>
          <v-btn color="primary" class="mx-auto" @click="$emit('goToResults')">Go to Results</v-btn>
          <v-btn color="grey" class="mx-auto ml-3" @click="resetForm">Re-take test</v-btn> <!-- New Reset Form button -->
        </div>
      </v-card-text>
    </v-card>
    <v-snackbar v-model="snackbar" :color="snackbarColor" :timeout="3000">
      {{ snackbarText }}
    </v-snackbar>
  </v-container>
</template>

<script setup>
import { ref, onMounted, computed} from 'vue';import { TestRepo } from "@/repositories/TestRepo";
import {getCurrentUser, session, updateUser} from "@/repositories/UserRepo";
import User from "@/models/user";

const QUESTIONS_PER_STEP = 3;
const questions = ref([]);
const answers = ref({});
const currentStep = ref(0);
const snackbar = ref(false);
const snackbarText = ref('');
const snackbarColor = ref('');
let testSubmitted = ref(getCurrentUser().testSubmitted);


//console.log(getCurrentUser());
onMounted(async () => {
  questions.value = await TestRepo.getPersonalityTest();
});

const currentQuestions = computed(() => {
  const start = currentStep.value * QUESTIONS_PER_STEP;
  const end = start + QUESTIONS_PER_STEP;
  return questions.value.slice(start, end);
});

const submitTest = async () => {
  if (Object.keys(answers.value).length < questions.value.length) {
    snackbarText.value = "Please answer all questions before submitting.";
    snackbarColor.value = "error";
    snackbar.value = true;
    return;
  }

  const userObject = getCurrentUser();
  const currentUser = new User(userObject.firstName, userObject.lastName, userObject.email, userObject.password, userObject.role, userObject.managerID);
  currentUser.id = userObject.id; // Copy the id

  for (const question of questions.value) {
    currentUser.addTestResult(question.id, answers.value[question.id]);
  }

  const { scores, personalityType } = await currentUser.getTestScores();
  currentUser.personalityType = personalityType;
  currentUser.scores = scores;
  await TestRepo.updateUserTest(currentUser.id, currentUser.personalityTest, personalityType, scores);

  currentUser.testSubmitted = true;
  testSubmitted.value = true;
  snackbarText.value = "Test submitted successfully.";
  snackbarColor.value = "success";
  snackbar.value = true;

  session.saveUser(currentUser);
  updateUser(currentUser);
};

const resetForm = async () => {
  const userObject = getCurrentUser();
  const currentUser = new User(userObject.firstName, userObject.lastName, userObject.email, userObject.password, userObject.role, userObject.managerID);
  currentUser.id = userObject.id; // Copy the id

  currentUser.testSubmitted = false;
  testSubmitted.value = false;

  // Reset test in Firestore
  await TestRepo.resetUserTest(currentUser.id);

  // Update session
  session.saveUser(currentUser);
  updateUser(currentUser);
};

</script>

<style scoped>
.text-center {
  text-align: center;
}
</style>
