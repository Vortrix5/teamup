<template>
  <Navbar/>

  <v-layout full-height>
    <v-navigation-drawer
      expand-on-hover
      rail
    >
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
        <v-list-item prepend-icon="mdi-account-multiple" title="Users" value="users"
                     @click="loadComponent('Users')"></v-list-item>
        <v-list-item prepend-icon="mdi-list-box" title="Personality Tests" value="tests"
                     @click="loadComponent('EditTest')"></v-list-item>
        <v-list-item prepend-icon="mdi-book-open-variant" title="Courses" value="courses"
                     @click="loadComponent('Courses')"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main style="height: auto; min-height: 400px">
      <component :is="actualComponent"/>
    </v-main>
  </v-layout>


</template>

<script>
import Users from "@/components/Dashboard/Shared/Users.vue";
import {getCurrentUser} from "@/repositories/UserRepo";
import Courses from "@/components/Dashboard/Shared/Courses.vue";
import EditTest from "@/components/Dashboard/Admin/EditTest.vue";
import Results from "@/components/Dashboard/Employee/Results/Results.vue";

export default {

  data() {
    return {
      actualComponent: EditTest
      ,
    };
  },
  computed: {
    currentUser() {
      if (!getCurrentUser()) {
        return {firstName: "Admin", lastName: "Admin", email: "admin"}
      } else {
        return getCurrentUser();
      }

    }
  },
  components: {
    Users,
    Courses,
    Results,
    EditTest,
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
