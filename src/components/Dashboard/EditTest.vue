<template>
  <v-form @submit.prevent="updateTest">
    <v-container>
      <h1>Edit Test</h1>
      <br>
      <v-text-field v-model="test.name" label="Test Name" readonly />

      <v-container v-for="(question, index) in test.questions" :key="index">
        <v-text-field :label="'Question Text'" v-model="question.text" />
        <v-select
          label="Question Type"
          v-model="question.type"
          :items="questionTypes"
        />
        <v-btn @click="removeQuestion(index)">Remove Question</v-btn>
      </v-container>

      <v-container>
        <v-layout justify-center>
          <v-btn @click="addQuestion">Add Question</v-btn>
          <v-btn type="submit" color="primary">Submit</v-btn>
        </v-layout>
      </v-container>
    </v-container>
    <v-snackbar v-model="snackbar" :timeout="3000" :color="snackbarColor">
      {{ snackbarText }}
    </v-snackbar>
  </v-form>
</template>

<script setup>
import {onMounted, ref} from 'vue'
import {TestRepo} from "@/repositories/TestRepo";

const test = ref({
  name: 'Big Five Personality Test',
  questions: [],
})

const questionTypes = ref([
  'Extraversion',
  'Agreeableness',
  'Openness',
  'Conscientiousness',
  'Neuroticism',
])

const snackbar = ref(false);
const snackbarText = ref('');
const snackbarColor = ref('');

onMounted(async () => {
  test.value.questions = await TestRepo.getPersonalityTest()
})

const updateTest = async () => {
  await TestRepo.updatePersonalityTest(test.value.questions)
  snackbarText.value = 'Test updated successfully';
  snackbarColor.value = 'success';
  snackbar.value = true;
}

const removeQuestion = async index => {
  await TestRepo.removeQuestion(index);
  test.value.questions = await TestRepo.getPersonalityTest();
  snackbarText.value = 'Question removed successfully';
  snackbarColor.value = 'success';
  snackbar.value = true;
}

const addQuestion = async () => {
  const newQuestion = { text: '', type: '' };
  await TestRepo.addQuestion(newQuestion.text, newQuestion.type);
  test.value.questions = await TestRepo.getPersonalityTest();
}
</script>
