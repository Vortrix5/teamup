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
  <v-sheet width="400" class="mx-auto">
    <h1 class="d-flex mb-10 justify-center">Login</h1>
    <v-form fast-fail @submit.prevent="login">
      <v-text-field variant="outlined" v-model="email" label="Email Address"></v-text-field>
      <v-text-field variant="outlined" type="password" v-model="password" label="Password"></v-text-field>
      <span @click="router.push('/reset')" class="text-body-2 font-weight-regular link">Forgot Password?</span>
      <v-btn type="submit" color="primary" block class="mt-3 mb-3">Sign in</v-btn>
    </v-form>
    <div class="mt-2">
      <p class="text-body-2">Don't have an account? <span @click="goToRegister" class="link">Sign Up</span></p>
    </div>
    <v-snackbar v-model="snackbar" :timeout="3000" :color="snackbarColor">
      {{ snackbarText }}
    </v-snackbar>
  </v-sheet>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { findUserByEmailAndPassword } from "@/repositories/UserRepo";

const email = ref('');
const password = ref('');
const snackbar = ref(false);
const snackbarText = ref('');
const snackbarColor = ref('');
const router = useRouter();

const login = async () => {
  try {
    const user = await findUserByEmailAndPassword(email.value, password.value);
    if (user) {
      snackbarText.value = 'Login successful';
      snackbarColor.value = 'success';
      snackbar.value = true;
      setTimeout(() => {
        router.push({path: `/${user.role}`});
      }, 2000);
    } else {
      snackbarText.value = 'Invalid email or password';
      snackbarColor.value = 'error';
      snackbar.value = true;
    }
  } catch (error) {
    snackbarText.value = 'An error occurred during login';
    snackbarColor.value = 'error';
    snackbar.value = true;
  }
}

const goToRegister = () => {
  router.push({ path: '/register' });
}
</script>

<style scoped>
.link {
  color: blue;
  text-decoration: underline;
  cursor: pointer;
}
</style>
