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
