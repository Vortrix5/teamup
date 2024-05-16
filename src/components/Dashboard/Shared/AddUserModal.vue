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
  <div class="pa-4 text-center">
    <v-dialog max-width="800">
      <template v-slot:activator="{ props: activatorProps }">

        <v-btn
          v-if="getCurrentUser().role === 'admin'"
          v-bind="activatorProps"
          text="Add User"
          color="primary"
        ></v-btn>

        <v-btn
          v-if="getCurrentUser().role === 'manager'"
          v-bind="activatorProps"
          text="Add Employee"
          color="primary"
        ></v-btn>

      </template>

      <template v-slot:default="{ isActive }">
        <v-card title="Add A New Employee">
          <template v-slot:text>
            <v-form @submit.prevent="submitForm">
              <v-container>
                <v-text-field variant="outlined" v-model="firstName" label="First Name"></v-text-field>
                <v-text-field variant="outlined" v-model="lastName" label="Last Name"></v-text-field>
                <v-text-field variant="outlined" v-model="email" label="Email Address"></v-text-field>
                <v-layout justify-center>
                  <v-btn type="submit" color="primary">Submit</v-btn>
                </v-layout>
              </v-container>
            </v-form>
          </template>
        </v-card>
      </template>
    </v-dialog>
  </div>
  <v-snackbar v-model="snackbar" :timeout="3000" :color="snackbarColor">
    {{ snackbarText }}
  </v-snackbar>
</template>


<script setup>
import {ref} from 'vue'
import {addUser, findUserByEmail, getCurrentUser} from "@/repositories/UserRepo";
import User from "@/models/user";
import * as emailjs from "emailjs-com";

const firstName = ref('')
const lastName = ref('')
const email = ref('')
const snackbar = ref(false);
const snackbarText = ref('');
const snackbarColor = ref('');
const resetForm = () => {
  firstName.value = ''
  lastName.value = ''
  email.value = ''
}

function generatePassword(length = 8) {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let password = '';
  for (let i = 0; i < length; i++) {
    password += chars[Math.floor(Math.random() * chars.length)];
  }
  return password;
}

const sendWelcomeEmail = async (manager, employee) => {
  try {
    await emailjs.send('service_1wqrnbm', 'template_qd6bv6l', {
      manager_name: `${manager.firstName} ${manager.lastName}`,
      user_name: `${employee.firstName} ${employee.lastName}`,
      user_email: employee.email,
      manager_email: manager.email,
      user_password: employee.password
    }, '5yPOsL7JWKfGg_cm_');
  } catch(error) {
    console.log({error})
  }
}
const submitForm = async () => {
  if(!firstName.value || !lastName.value || !email.value) {
    snackbarText.value = 'Please fill all fields';
    snackbarColor.value = 'error';
    snackbar.value = true;
    return;
  }else if(!email.value.includes('@')) {
    snackbarText.value = 'Invalid email address';
    snackbarColor.value = 'error';
    snackbar.value = true;
    return;
  }

  const existingUser = await findUserByEmail(email.value);
  if(existingUser) {
    snackbarText.value = 'User with this email already exists';
    snackbarColor.value = 'error';
    snackbar.value = true;
    return;
  }

  const managerID = getCurrentUser().id;
  const password = generatePassword();
  const newUser = new User(firstName.value, lastName.value, email.value, password,'employee', managerID);
  try {
    await addUser(newUser);
    await sendWelcomeEmail(getCurrentUser(), newUser);
  }catch (e) {
    snackbarText.value = e.message;
    snackbarColor.value = 'error';
    snackbar.value = true;
    return;
  }
  snackbarText.value = 'User added successfully';
  snackbarColor.value = 'success';
  snackbar.value = true;
  resetForm();

}
</script>
