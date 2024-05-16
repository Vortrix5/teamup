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
  <Navbar/>
  <v-layout full-height>
    <v-navigation-drawer
      expand-on-hover
      rail>
      <v-list>
        <v-list-item
          prepend-icon="mdi-shield-crown"
          size="48px"
          :subtitle="currentUser.email"
          :title="`${currentUser.firstName} ${currentUser.lastName}`"
        ></v-list-item>
      </v-list>
      <v-divider></v-divider>

      <v-list density="compact" nav>
        <v-list-item prepend-icon="mdi-list-box-outline" title="Form" value="form"
                     @click="loadComponent('TestForm')"></v-list-item>
        <v-list-item prepend-icon="mdi-book-open-variant" title="Courses" value="courses"
                     @click="loadComponent('Courses')"></v-list-item>
        <v-list-item prepend-icon="mdi-finance" title="Results" value="Stats"
                     @click="loadComponent('Results')"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main style="height: auto; min-height: 400px">
      <component :is="actualComponent" @goToResults="loadComponent('Results')"/>
    </v-main>
  </v-layout>

</template>

<script>
import Courses from "@/components/Dashboard/Shared/Courses.vue";
import {getCurrentUser} from "@/repositories/UserRepo";
import TestForm from "@/components/Dashboard/Employee/TestForm.vue";
import Results from "@/components/Dashboard/Employee/Results/Results.vue";

export default {

  data() {
    return {
      actualComponent: TestForm,
    };
  },
  computed: {
    currentUser() {
      return getCurrentUser();
    }
  },
  components: {
    TestForm,
    Courses,
    Results
  },
  methods: {
    loadComponent(comp) {
      console.log(this.actualComponent);
      this.actualComponent = comp;
    }
  }
}

</script>

<script setup>
import Navbar from "@/components/Navbar.vue";
</script>
