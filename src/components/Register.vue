<template>
  <v-sheet width="400" class="mx-auto">
    <h1 class="d-flex mb-10 justify-center">Register</h1>
    <v-form fast-fail @submit.prevent="register">

      <v-text-field variant="outlined" v-model="name" label="Name"></v-text-field>
      <v-text-field variant="outlined" v-model="email" label="Email Address"></v-text-field>
      <v-text-field variant="outlined" v-model="username" label="Username"></v-text-field>
      <v-text-field variant="outlined" v-model="password" label="Password"></v-text-field>
      <v-text-field variant="outlined" v-model="confirmPassword" label="Confirm Password"></v-text-field>

      <p v-if="errorMessage" class="text-body-2 font-weight-regular" style="color:red">{{ errorMessage }}</p>

      <v-btn type="submit" color="primary" block class="mt-3 mb-3">Sign up</v-btn>

    </v-form>
    <div class="mt-4">
      <p class="text-body-2">Already have an account? <a href="/login">Sign In</a></p>
    </div>
  </v-sheet>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      username: '',
      password: '',
      confirmPassword:'',
      errorMessage: ''
    };
  },
  methods: {
    register() {
      if (this.password !== this.confirmPassword) {
        this.errorMessage = 'Passwords do not match';
        return false;
      }
      this.errorMessage = '';
      return true;
    },
  },
}
</script>
