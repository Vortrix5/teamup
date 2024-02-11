<template>
    <v-sheet width="400" class="mx-auto">
      <h1 class="d-flex mb-10 justify-center">Login</h1>
      <v-form fast-fail @submit.prevent="login">

        <v-text-field variant="outlined" v-model="username" label="Username"></v-text-field>
        <v-text-field variant="outlined" v-model="password" label="Password"></v-text-field>
        <p v-if="errorMessage" class="text-body-2 font-weight-regular" style="color:red">{{ errorMessage }}</p>

        <a href="#" class="text-body-2 font-weight-regular">Forgot Password?</a>

        <v-btn type="submit" color="primary" block class="mt-3 mb-3">Sign in</v-btn>

      </v-form>
      <div class="mt-2">
        <p class="text-body-2">Don't have an account? <a href="/register">Sign Up</a></p>
      </div>
    </v-sheet>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      errorMessage: ''
    };
  },
  methods: {
    login() {
      // Your login logic here
    },
  },
}
</script>
