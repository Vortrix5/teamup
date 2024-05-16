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
  <v-app-bar app color="primary">
    <v-toolbar-title>TeamUp</v-toolbar-title>
    <v-spacer></v-spacer>

    <v-toolbar-items class="d-flex align-center">
      <v-btn v-for="item in filteredItems" :key="item.text" :to="item.href"
             class="v-btn text gc-5">
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
import { useRoute } from 'vue-router';
import { getCurrentUser, logout } from '@/repositories/UserRepo';
import router from "@/router";

const centerItems = ref([
  { text: 'Home', icon: 'mdi-home',href :'/'},
  { text: 'About', icon: 'mdi-information', href :"/about"},
  { text: 'Contact', icon: 'mdi-email',href :"/contact"},
  { text: 'Testimonials', icon: 'mdi-star',href :"/testimonials"},
]);

const route = useRoute();

const filteredItems = computed(() => {
  if (['/admin', '/employee', '/manager'].includes(route.path)) {
    return centerItems.value.filter(item => item.text === 'Home');
  }
  return centerItems.value;
});

const isLoggedIn = computed(() => getCurrentUser() !== null);

const logoutUser = () => {
  logout();
  router.push({ path: '/login' });
};
</script>

<style scoped>
</style>
