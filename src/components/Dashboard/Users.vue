<template>
    <v-data-table-virtual
    :headers="headers"
    :items="virtualBoats"
    height="400"
    item-value="name"
    ></v-data-table-virtual>
</template>

<script>
    export default {
      data() {
        return {
          headers: [
            { title: 'Name', align: 'start', key: 'name' },
            { title: 'E-mail', align: 'end', key: 'email' },
            { title: 'Id', align: 'end', key: 'id' },
            { title: 'Role', align: 'center', key: 'role' },
            { title: 'Manager', align: 'center', key: 'manager' },
            { title: 'Company', align: 'center', key: 'company' },
          ],
          boats: [
            {
              name: 'Abd El smad',
              email: 'abdelsmad@gmail.com',
              id: '0001',
              role: 'Manager',
              manager: '-',
            },
            {
              name: 'Lamjed',
              email: 'lamjed@gmail.com',
              id: '0002',
              role: 'Employee',
              manager: '0001',
            },
            {
              name: 'Laazi',
              email: 'laazi@gmail.com',
              id: '0003',
              role: 'Employee',
              manager: '0001',
            },
            {
              name: 'Mounir',
              email: 'mounir@gmail.com',
              id: '0004',
              role: 'Employee',
              manager: '0001',
            },
            {
              name: 'Satar',
              email: 'satar@gmail.com',
              id: '0005',
              role: 'Manager',
              manager: '-',
            },
            {
              name: 'Mourad',
              email: 'mourad@gmail.com',
              id: '0006',
              role: 'Employee',
              manager: '0005',
            },
          ],
        }
      },

      computed: {
        virtualBoats() {
          const nbr = this.boats.length
          return [...Array(nbr).keys()].map(i => {
            const boat = { ...this.boats[i] }
            boat.name = `${boat.name}`
            return boat
          })
        },
      },
    }
</script>
