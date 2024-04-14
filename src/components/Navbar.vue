<template>
  <v-app-bar app color="primary">
    <v-toolbar-title>TeamUp</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="d-flex align-center">
      <v-btn v-for="item in centerItems" :key="item.text" :to="item.href" class="v-btn text gc-5" >
        <v-icon left class="mr-2">{{ item.icon }}</v-icon>

        {{ item.text }}
      </v-btn>
    </v-toolbar-items>
    <v-toolbar-items class="d-flex align-center">
      <v-btn v-if="isLoggedIn" class="v-btn text gc-5" :to="`/${getCurrentUser().role}`">
        <v-icon left class="mr-2">mdi-view-dashboard</v-icon>
        Dashboard
      </v-btn>
    </v-toolbar-items>
    <v-toolbar-items class="justify-end">
      <v-btn text class="gc-5" v-if="isLoggedIn" @click="logoutUser">
        <v-icon left class="mr-2">mdi-account</v-icon>
        Logout
      </v-btn>
      <v-btn text class="gc-5" v-else :to="{ path: '/login' }">
        <v-icon left class="mr-2">mdi-account</v-icon>
        Login
      </v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script setup>
import { ref, computed } from 'vue';
import { getCurrentUser, logout } from '@/repositories/UserRepo';
import router from "@/router";

const centerItems = ref([
  { text: 'Home', icon: 'mdi-home',href :'/'},
  { text: 'About', icon: 'mdi-information', href :"/about" },
  { text: 'Contact', icon: 'mdi-email',href :"/contact" },
  { text: 'Testimonials', icon: 'mdi-star',href :"/testimonials" },
]);

const isLoggedIn = computed(() => getCurrentUser() !== null);

const logoutUser = () => {
  logout();
  router.push({ path: '/login' });
};
</script>

<style scoped>
</style>
