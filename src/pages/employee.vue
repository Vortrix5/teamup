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
