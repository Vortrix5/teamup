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
  <Navbar/>
  <v-parallax src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg" height="50vh">

    <v-card-text justify="center container" align-center>
      <h1 class="title">
        Contact Us
      </h1>
    </v-card-text>

  </v-parallax>

  <v-card class="fill height" style="padding:10px; margin-top:50px;">

    >
    <v-row  style="padding:10px; margin:30px; margin-top:20px">
      <v-col>
        <v-card>
          <v-card-text  class="text-center" style="font-size:300px;color:#1867c0;margin-top:10px">
            <span style="font-size: 100px;"> How Can We Help You? </span>
          </v-card-text>
          <v-card-text style="margin-top:20px; color:grey;">
            Your feedback and inquiries are invaluable to us! Whether you have questions about our services, suggestions for improvement, or encounter any issues, we're here to assist you every step of the way. Feel free to reach out to our dedicated support team via email, phone, or the contact form below. We prioritize your satisfaction and are committed to providing prompt and personalized assistance to ensure your experience with us is nothing short of exceptional.
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>


    <v-row style="padding:10px; margin:10px">
      <v-col>
        <v-card>
          <v-card-title class="d-flex justify-center align-center">
            <v-icon  color="primary" size="x-large"   >mdi-phone</v-icon>
          </v-card-title>

          <v-card-title class="text-center" justify="center" style=" margin-top:20px;color:#1867c0 " >
            Phone Number
          </v-card-title>
          <v-card-text class="text-center" style=" margin-top:20px;">


            +216 22 334 455

          </v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-card>
          <v-card-title class="d-flex justify-center align-center">
            <v-icon  color="primary" size="x-large" >mdi-office-building</v-icon>
          </v-card-title>
          <v-card-title class="text-center" style="margin-top:20px;color:#1867c0 ;">
            Address
          </v-card-title>
          <v-card-text class="text-center" style="margin-top:20px ; ">


            App 4, Rue Mounir Ben Salah, Tunis, Tunisia (à côté de la pâtisserie Salmen)

          </v-card-text>
        </v-card>

      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row style="padding:10px; margin:10px">
      <v-col>
        <v-card>
          <v-card-title class="d-flex justify-center align-center">
            <v-icon color="primary" size="x-large" >mdi-fax</v-icon>
          </v-card-title>

          <v-card-title class="d-flex justify-center align-center" style=" margin-top:20px ; color:#1867c0 " >
            Fax
          </v-card-title>
          <v-card-text class="d-flex justify-center align-center" style="margin-top:20px ; ">


            1-234-567-8900

          </v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-card>
          <v-card-title class="d-flex justify-center align-center">
            <v-icon color="primary" size="x-large" >mdi-email</v-icon>
          </v-card-title>
          <v-card-title class="d-flex justify-center align-center" style="margin-top:20px;color:#1867c0 ;">
            E-mail
          </v-card-title>
          <v-card-text class="d-flex justify-center align-center" style="margin-top:20px ; ">


            support@teamup.com

          </v-card-text>
        </v-card>

      </v-col>
    </v-row>
  </v-card>
  <v-card flat class="text-center">
    <v-card-text style="margin:10px;">
      <v-btn class="mx-4" rounded-circle icon color="primary">
        <v-icon size="24px"> mdi-facebook</v-icon>
      </v-btn>
      <v-btn class="mx-4" rounded-circle icon color="primary">
        <v-icon size="24px"> mdi-twitter</v-icon>
      </v-btn>
      <v-btn class="mx-4" rounded-circle icon color="primary">
        <v-icon size="24px"> mdi-linkedin</v-icon>
      </v-btn>
      <v-btn class="mx-4" rounded-circle icon color="primary">
        <v-icon size="24px"> mdi-instagram</v-icon>
      </v-btn>
      <!--<v-btn v-for="icon in icons" :key="icon" class="mx-4" icon>
        <v-icon size="24px">{{ icon }}</v-icon>
      </v-btn>-->
    </v-card-text>
  </v-card>






  <v-container></v-container>
</template>
<script>
import {defineComponent} from "vue";
import Navbar from "@/components/Navbar.vue";

export default defineComponent({
  components: {Navbar}
})
</script>
<style>
.title{
  font-size: 4rem;
  font-weight: lighter;
  color: white;
  font-family: 'Times New Roman', Times, serif;
  margin-top :30vh;
}

</style>
