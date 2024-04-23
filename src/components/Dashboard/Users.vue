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
import AddUserModal from "@/components/Dashboard/AddUserModal.vue";

const users = ref([]);
const headers = reactive([
  { title: 'ID', value: 'id' },
  { title: 'First Name', value: 'firstName' },
  { title: 'Last Name', value: 'lastName' },
  { title: 'E-mail', value: 'email' },
  { title: 'Role', value: 'role' },
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
