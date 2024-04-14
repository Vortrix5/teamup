<template>
  <v-form @submit.prevent="submitForm">
    <v-container>
      <v-text-field v-model="courseTitle" label="Course Title" />
      <v-text-field v-model="courseLink" label="Course Link" />
      <v-text-field v-model="imageLink" label="Image Link" />
      <v-select
        v-model="tags"
        label="Tags"
        :items="tagOptions"
        multiple
      />
      <v-layout justify-center>
        <v-btn type="submit" color="primary">Submit</v-btn>
      </v-layout>
    </v-container>
  </v-form>
</template>

<script setup>
import {ref} from 'vue'
import {CourseRepo} from "@/repositories/CourseRepo";

const courseTitle = ref('')
const courseLink = ref('')
const imageLink = ref('')
const tags = ref([])
const tagOptions = ref([
  'Extraversion',
  'Agreeableness',
  'Openness',
  'Conscientiousness',
  'Neuroticism',
])

const resetForm = () => {
  courseTitle.value = ''
  courseLink.value = ''
  imageLink.value = ''
  tags.value = []
}

const submitForm = () => {
  CourseRepo.addCourse(courseTitle.value, courseLink.value, tags.value, imageLink.value);
  resetForm();

}
</script>
