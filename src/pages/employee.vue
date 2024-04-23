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
        <v-list-item prepend-icon="mdi-finance" title="Stats" value="Stats"
                     @click="loadComponent('Results')"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main style="height: auto; min-height: 400px">
      <component :is="actualComponent" @goToResults="loadComponent('Results')"/>
    </v-main>
  </v-layout>

</template>

<script>
import Courses from "@/components/Dashboard/Courses.vue";
import {getCurrentUser} from "@/repositories/UserRepo";
import TestForm from "@/components/Dashboard/TestForm.vue";
import Results from "@/components/Dashboard/Results/Results.vue";

export default {

  data() {
    return {
      actualComponent: Results,
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
