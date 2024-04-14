<template>
  <v-sheet width="400" class="mx-auto">
    <h1 class="d-flex mb-10 justify-center">Register</h1>
    <v-form fast-fail @submit.prevent="register">
      <v-text-field variant="outlined" v-model="firstName" label="First Name"></v-text-field>
      <v-text-field variant="outlined" v-model="lastName" label="Last Name"></v-text-field>
      <v-text-field variant="outlined" v-model="email" label="Email Address"></v-text-field>
      <v-text-field variant="outlined" type="password" v-model="password" label="Password"></v-text-field>
      <v-text-field variant="outlined" type="password" v-model="confirmPassword" label="Confirm Password"></v-text-field>
      <v-btn type="submit" color="primary" block class="mt-3 mb-3">Sign up</v-btn>
    </v-form>
    <div class="mt-4">
      <p class="text-body-2">Already have an account? <span @click="goToLogin" class="link">Sign In</span></p>
    </div>
    <v-snackbar v-model="snackbar" :timeout="3000" :color="snackbarColor">
      {{ snackbarText }}
    </v-snackbar>
  </v-sheet>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { addUser, findUserByEmail } from '@/repositories/UserRepo.js';
import User from '../../models/user.js';

const firstName = ref('');
const lastName = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const snackbar = ref(false);
const snackbarText = ref('');
const snackbarColor = ref('');
const router = useRouter();

const register = async () => {
  // Input validation
  if (!firstName.value || !lastName.value || !email.value || !password.value || !confirmPassword.value) {
    snackbarText.value = 'All fields are required';
    snackbarColor.value = 'error';
    snackbar.value = true;
    return false;
  }

  if (!email.value.includes('@')) {
    snackbarText.value = 'Invalid email format';
    snackbarColor.value = 'error';
    snackbar.value = true;
    return false;
  }

  if (password.value !== confirmPassword.value) {
    snackbarText.value = 'Passwords do not match';
    snackbarColor.value = 'error';
    snackbar.value = true;
    return false;
  }

  if (password.value.length < 6) {
    snackbarText.value = 'Password must be at least 6 characters';
    snackbarColor.value = 'error';
    snackbar.value = true;
    return false;
  }

  // Check if user already exists
  const existingUser = await findUserByEmail(email.value);
  if (existingUser) {
    snackbarText.value = 'User already exists';
    snackbarColor.value = 'error';
    snackbar.value = true;
    return false;
  }

  const newUser = new User(null, firstName.value, lastName.value, email.value, password.value, 'manager');
  await addUser(newUser);
  snackbarText.value = 'Sign up successful, please login to continue';
  snackbarColor.value = 'success';
  snackbar.value = true;
  setTimeout(() => {
    router.push({ path: '/login' });
  }, 2000);
  return true;
}

const goToLogin = () => {
  router.push({ path: '/login' });
}
</script>

<style scoped>
.link {
  color: blue;
  text-decoration: underline;
  cursor: pointer;
}
</style>