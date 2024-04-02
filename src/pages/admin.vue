<template>
  <Navbar/>

  <v-card>
      <v-layout>
        <v-navigation-drawer
          expand-on-hover
          rail
        >
          <v-list>
            <v-list-item
              prepend-icon="mdi-shield-crown"
              size="48px"
              subtitle="admin01@teamup.tn"
              title="Admin 01"
            ></v-list-item>
          </v-list>
  
          <v-divider></v-divider>
  
          <v-list density="compact" nav>
            <v-list-item prepend-icon="mdi-message" title="Inbox" value="inbox" @click="loadComponent('')"></v-list-item>
            <v-list-item prepend-icon="mdi-account-multiple" title="Users" value="users" @click="loadComponent('Users')"></v-list-item>
            <v-list-item prepend-icon="mdi-list-box" title="Personality Tests" value="tests" @click="loadComponent('Tests')"></v-list-item>
            <v-list-item prepend-icon="mdi-book-open-variant" title="Courses" value="courses" @click="loadComponent('Courses')"></v-list-item>
            <v-list-item prepend-icon="mdi-finance" title="Earnings" value="earnings" @click="loadComponent('Earnings')"></v-list-item>
          </v-list>
        </v-navigation-drawer>
  
        <v-main style="height: auto; min-height: 400px">
            <component :is="actualComponent" />
        </v-main>
      </v-layout>
    </v-card>

  

  <Footer></Footer>
  
</template>
  
  <script>
    
  export default{
      
        data(){
          return {
            actualComponent : Users,
          };
        },
        components:  {
          Users,
          Courses,
          Earnings,
          Tests,
        },
        methods:{
          loadComponent(comp){
            this.actualComponent = comp;
          }
        }
    }

    
  </script>
  <script setup>
  import Users from '@/components/Users.vue';
    import Courses from '@/components/Courses.vue';
    import Earnings from '@/components/Earnings.vue';
    import Tests from '@/components/Tests.vue';
   
  import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
</script>
  