<template>
  <v-form>
    <v-container>
      <v-text-field v-model="newQuestion.label" label="Question Label" />
      <v-select
        v-model="newQuestion.type"
        label="Question Type"
        :items="questionTypes"
      >
        <template #item="{ item }"> {{ item.value }} </template>
      </v-select>

      <v-container
        v-if="newQuestion.type === 'select' || newQuestion.type === 'numerical'"
      >
        <v-text-field v-model="newOption" label="Add Option" />
        <v-btn @click="addOption">Add</v-btn>
      </v-container>

      <v-btn @click="addQuestion">Add Question</v-btn>
    </v-container>

    <v-container v-for="(question, index) in questions" :key="index">
      <v-text-field :label="question.label" v-model="questions[index].label" />
      <template v-if="question.type === 'select'">
        <v-select
          v-model="questions[index].selectedOption"
          :items="question.options"
        >
          <template #item="{ item }"> {{ item }} </template>
        </v-select>
      </template>
      <v-btn @click="removeQuestion(index)">Remove Question</v-btn>
    </v-container>

    <v-btn type="submit" color="primary">Submit</v-btn>
  </v-form>
</template>

<script setup>
  import { ref } from 'vue'

  const questions = ref([])
  const newQuestion = ref({
    label: '',
    type: 'text',
    options: [],
  })
  const questionTypes = ref([
    'text',
    'select',
    'numerical' /* ... add more types */,
  ])

  const addOption = () => {
    newQuestion.value.options.push(newOption.value)
    newOption.value = ''
  }

  const addQuestion = () => {
    questions.value.push({ ...newQuestion.value })
    resetNewQuestion()
  }

  const removeQuestion = index => {
    questions.value.splice(index, 1)
  }

  const resetNewQuestion = () => {
    newQuestion.value = {
      label: '',
      type: 'text',
      options: [],
    }
  }
</script>
