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
  <div class="pa-4 text-center">
    <v-dialog max-width="800">
      <template v-slot:activator="{ props: activatorProps }">
        <v-btn
          v-bind="activatorProps"
          text="Add Course"
          color="primary"
        ></v-btn>
      </template>

      <template v-slot:default="{ isActive }">
        <v-card title="Add A New Course">
          <template v-slot:text>
              <v-form @submit.prevent="submitForm">
                <v-container>
                  <v-text-field v-model="courseTitle" label="Course Title"/>
                  <v-text-field v-model="courseLink" label="Course Link"/>
                  <v-text-field v-model="imageLink" label="Image Link"/>
                  <v-select
                    v-model="tags"
                    label="Tags"
                    :items="tagOptions"
                    multiple
                  />
                  <v-layout justify-center>
                    <v-btn type="submit" @click="isActive.value=false" color="primary">Submit</v-btn>
                  </v-layout>
                </v-container>
              </v-form>
          </template>
        </v-card>
      </template>
    </v-dialog>
  </div>
  <v-snackbar v-model="snackbar" :timeout="3000" :color="snackbarColor">
    {{ snackbarText }}
  </v-snackbar>
</template>


<script setup>
import {ref} from 'vue'
import {CourseRepo} from "@/repositories/CourseRepo";

const courseTitle = ref('')
const courseLink = ref('')
const imageLink = ref('')
const tags = ref([])
const tagOptions = ref([
  'The Trailblazer',
  'The Diplomat',
  'The Maverick',
  'The Guardian',
  'The Analyst',
])

const snackbar = ref(false);
const snackbarText = ref('');
const snackbarColor = ref('');


const resetForm = () => {
  courseTitle.value = ''
  courseLink.value = ''
  imageLink.value = ''
  tags.value = []
}

const submitForm = async () => {
  await CourseRepo.addCourse(courseTitle.value, courseLink.value, tags.value, imageLink.value);
  snackbarText.value = 'Course added successfully';
  snackbarColor.value = 'success';
  snackbar.value = true;
  resetForm();
}
</script>
