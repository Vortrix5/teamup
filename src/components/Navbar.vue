<template>
  <v-app-bar app color="primary">
    <v-toolbar-title>TeamUp</v-toolbar-title>
    <v-spacer></v-spacer>
      <v-toolbar-items class="d-flex align-center">
        <v-btn v-for="item in centerItems" :key="item.text" text class="gc-5" >
          <v-icon left class="mr-2">{{ item.icon }}</v-icon>
          {{ item.text }}
        </v-btn>
      </v-toolbar-items>
    <v-toolbar-items class="justify-end">
      <v-btn text class="gc-5">
        <v-icon left class="mr-2">mdi-account</v-icon>
        Login
      </v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script setup>
import { ref } from 'vue';

const centerItems = ref([
  { text: 'Home', icon: 'mdi-home' },
  { text: 'About', icon: 'mdi-information' },
  { text: 'Contact', icon: 'mdi-email' },
  { text: 'Testimonials', icon: 'mdi-star' },
]);
</script>

<style scoped>
</style>
