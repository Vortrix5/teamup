<template>
  <v-container>
    <AddCourseModal v-if="getCurrentUser().role === 'admin' "/>
    <v-row style="padding: 10px; margin: 10px;">
      <v-col md="4" v-for="(course, index) in courses" :key="index">
        <v-card style="max-height: 600px">
          <v-card-actions class="justify-end">
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
          <v-img cover :lazy-src="course.imageLink" height="300px"></v-img>
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
import AddCourseModal from "@/components/Dashboard/AddCourseModal.vue";
import {getCurrentUser} from "@/repositories/UserRepo";

const courses = ref([]);

onMounted(async () => {
  courses.value = await CourseRepo.getCourses();
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
