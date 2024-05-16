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
    <h1 class="d-flex mb-10 justify-center">Reset Password</h1>
    <v-form fast-fail @submit.prevent="resetPassword">
      <v-text-field variant="outlined" type="email" v-model="email" label="Email"></v-text-field>
      <v-btn type="submit" color="primary" block class="mt-3 mb-3">Reset Password</v-btn>
    </v-form>
    <v-btn type="submit" color="grey" block class="mt-3 mb-3" @click="router.push('/login')">Back To Login</v-btn>
    <v-snackbar v-model="snackbar" :timeout="3000" :color="snackbarColor">
      {{ snackbarText }}
    </v-snackbar>
  </v-sheet>
</template>

<script setup>
import { ref } from 'vue';
import { getAuth, sendPasswordResetEmail} from "firebase/auth";
import router from "@/router";

const email = ref('');
const snackbar = ref(false);
const snackbarText = ref('');
const snackbarColor = ref('');
const auth = getAuth();

const resetPassword = async () => {
  if (!email.value) {
    snackbarText.value = 'Email is required';
    snackbarColor.value = 'error';
    snackbar.value = true;
    return false;
  }

  try {
    await sendPasswordResetEmail(auth, email.value);
    snackbarText.value = 'Password reset email sent';
    snackbarColor.value = 'success';
    snackbar.value = true;
  } catch (error) {
    snackbarText.value = error.message;
    snackbarColor.value = 'error';
    snackbar.value = true;
  }

}
</script>
