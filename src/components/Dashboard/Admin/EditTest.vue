<!--
  - MIT License
  -
  - Copyright (c) 2024 Mohamed Amine Zouaoui
  -
  - Permission is hereby granted, free of charge, to any person obtaining a copy
  - of this software and associated documentation files (the "Software"), to deal
  - in the Software without restriction, including without limitation the rights
  - to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  - copies of the Software, and to permit persons to whom the Software is
  - furnished to do so, subject to the following conditions:
  -
  - The above copyright notice and this permission notice shall be included in all
  - copies or substantial portions of the Software.
  -
  - THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  - IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  - FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  - AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  - LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  - OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  - SOFTWARE.
  -->

<template>
  <v-form @submit.prevent="updateTest">
    <v-container>
      <h1>Edit Test</h1>
      <br>
      <v-text-field v-model="test.name" label="Test Name" readonly/>

      <v-container v-for="(question, index) in test.questions" :key="index">
        <v-text-field :label="'Question Text'" v-model="question.text"/>
        <v-select
          label="Question Type"
          v-model="question.type"
          :items="questionTypes"
        />
        <v-select
          label="Trait Adder"
          v-model="question.add"
          :items="addBool"
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
  'Conscientiousness',
  'Neuroticism',
  'Openness',
])

const addBool = ref([
  'True',
  'False',
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
  const newQuestion = {text: '', type: '', add: ''};
  await TestRepo.addQuestion(newQuestion.text, newQuestion.type, newQuestion.add);
  test.value.questions = await TestRepo.getPersonalityTest();
}
</script>
