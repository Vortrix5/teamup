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
          <v-list-item prepend-icon="mdi-account-multiple" title="Employees" value="employees" @click="loadComponent('Users')"></v-list-item>
          <v-list-item prepend-icon="mdi-book-open-variant" title="Courses" value="courses" @click="loadComponent('Courses')"></v-list-item>
          <v-list-item prepend-icon="mdi-finance" title="Stats" value="Stats"
                       @click="loadComponent('Results')"></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main style="height: auto; min-height: 400px">
        <component :is="actualComponent" />
      </v-main>
    </v-layout>

</template>

<script>

import Users from "@/components/Dashboard/Users.vue";
import Courses from "@/components/Dashboard/Courses.vue";
import {getCurrentUser} from "@/repositories/UserRepo";
import Results from "@/components/Dashboard/Results/Results.vue";

export default{

  data() {
    return {
      actualComponent: Users,
    };
  },
  computed: {
    currentUser() {
      return getCurrentUser();
    }
  },
  components: {
    Users,
    Courses,
    Results
  },
  methods: {
    loadComponent(comp) {
      this.actualComponent = comp;
    }
  }
}


</script>

<script setup>
import Navbar from "@/components/Navbar.vue";
</script>
