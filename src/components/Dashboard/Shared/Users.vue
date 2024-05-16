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
  <v-container style="max-width: 95%">
    <v-data-table
      :headers="headers"
      :items="users"
      item-key="id"
      class="elevation-1"
    >
    </v-data-table>
    <AddUserModal/>
  </v-container>
</template>

<script setup>
import { ref, onMounted, reactive } from 'vue';
import { getAllUsers, getCurrentUser} from "@/repositories/UserRepo";
import AddUserModal from "@/components/Dashboard/Shared/AddUserModal.vue";

const users = ref([]);
const headers = reactive([
  { title: 'ID', value: 'id'},
  { title: 'First Name', value: 'firstName'},
  { title: 'Last Name', value: 'lastName'},
  { title: 'E-mail', value: 'email'},
  { title: 'Role', value: 'role'},
  {title: 'Personality Type', value: 'personalityType'},
]);

onMounted(async () => {
  const allUsers = await getAllUsers();
  const currentUser = getCurrentUser();

  if (currentUser.role === 'admin') {
    users.value = allUsers;
  } else if (currentUser.role === 'manager') {
    users.value = allUsers.filter(user => user.managerID === currentUser.id);
  }
});

</script>
