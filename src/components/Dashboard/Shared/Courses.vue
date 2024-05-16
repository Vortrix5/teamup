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
  <v-container>
    <AddCourseModal v-if="getCurrentUser().role === 'admin' "/>
    <v-row style="padding: 10px; margin: 10px;">
      <v-col md="4" v-for="(course, index) in filteredCourses" :key="index">
        <v-card style="max-height: 600px">
          <v-card-actions class="justify-end" v-if="getCurrentUser().role === 'admin' ">
            <v-menu>
              <template v-slot:activator="{ on, attrs }">
                <v-btn v-bind="attrs" v-on="on" icon>
                  <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item @click.stop="editCourse(index)">
                  <v-list-item-title>Edit</v-list-item-title>
                </v-list-item>
                <v-list-item @click.stop="deleteCourse(index)">
                  <v-list-item-title>Delete</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-card-actions>
          <img :src="course.imageLink" height="300px" width="100%"/>
          <v-card-title>
            {{ course.name }}
          </v-card-title>
          <v-card-text>
            Tags: {{ course.tags.join(', ') }}
          </v-card-text>
          <v-card-actions>
            <v-btn text @click.stop="() => openCourseLink(course.link)">Open Course</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import {onMounted, ref} from 'vue';
import {CourseRepo} from "@/repositories/CourseRepo";
import AddCourseModal from "@/components/Dashboard/Shared/AddCourseModal.vue";
import {getCurrentUser} from "@/repositories/UserRepo";

const courses = ref([]);
const filteredCourses = ref([]);
const testTaken = ref(false);

onMounted(async () => {
  courses.value = await CourseRepo.getCourses();
  const user = getCurrentUser();
  if (user.role === 'employee') {
    const testResults = await getCurrentUser().personalityType;
    if (testResults) {
      testTaken.value = true;
      const personalityType = testResults;
      console.log(courses.value)
      console.log(personalityType)
      filteredCourses.value = courses.value.filter(course => course.tags.includes(personalityType));
      console.log(filteredCourses.value)
    }
  } else {
    testTaken.value = true;
    filteredCourses.value = courses.value;
  }
});

const editCourse = () => {
  // Edit course logic
};

const deleteCourse = async (index) => {
  const course = courses.value[index];
  await CourseRepo.removeCourse(course.id);
  courses.value.splice(index, 1);
};

const openCourseLink = (link) => {
  if (!(link.startsWith('http') || link.startsWith('https'))) {
    link = 'https://' + link;
  }
  console.log('Opening course link:', link);
  window.open(link, '_blank');
};
</script>
