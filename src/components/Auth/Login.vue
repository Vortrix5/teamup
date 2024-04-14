<template>
  <v-sheet width="400" class="mx-auto">
    <h1 class="d-flex mb-10 justify-center">Login</h1>
    <v-form fast-fail @submit.prevent="login">
      <v-text-field variant="outlined" v-model="email" label="Email Address"></v-text-field>
      <v-text-field variant="outlined" type="password" v-model="password" label="Password"></v-text-field>
      <a href="#" class="text-body-2 font-weight-regular">Forgot Password?</a>
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
