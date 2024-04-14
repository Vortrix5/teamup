<template>
  <Navbar/>

  <v-card>
    <v-layout>
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
        </v-list>
      </v-navigation-drawer>

      <v-main style="height: auto; min-height: 400px">
        <component :is="actualComponent" />
      </v-main>
    </v-layout>
  </v-card>

</template>

<script>

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
  },
  methods: {
    loadComponent(comp) {
      this.actualComponent = comp;
    }
  }
}


</script>
<script setup>
import Users from '@/components/Dashboard/Users.vue';
import Courses from '@/components/Dashboard/Courses.vue';

import Navbar from "@/components/Navbar.vue";
import {getCurrentUser} from "../repositories/UserRepo";
</script>
