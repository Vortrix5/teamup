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
        About Us
      </h1>
    </v-card-text>
  </v-parallax>

  <v-card>
    <v-row style="padding:10px; margin:30px">
      <v-col>
        <v-card>
          <v-card-text style="font-size:300px;color:#1867c0;margin-top:10px">
            <span style="font-size: 100px;"> About Our Business</span>
          </v-card-text>
          <v-card-text class="d-flex justify-center align-center" style="margin-top: 50px;">

            Welcome to our HR solution designed to revolutionize team formation for managers. Leveraging advanced algorithms, we intelligently analyze the
            results to create well-balanced and efficient team structures. Not only does our system allocate team
            members into groups strategically, but it also provides valuable insights into team dynamics based on
            personality traits. With our solution, managers gain a deeper understanding of their teams, fostering
            stronger collaboration and maximizing productivity.In addition to facilitating team formation with
            precision, our HR solution offers tailored courses to further enhance team cohesion and individual growth.
            These courses are meticulously curated based on the unique blend of personality traits within each team,
            ensuring relevance and effectiveness. By providing personalized learning opportunities, we empower teams to
            develop skills, deepen understanding, and foster a culture of continuous improvement. With our platform,
            managers can nurture their teams to reach their full potential, driving success and innovation in the
            workplace.
          </v-card-text>

        </v-card>
      </v-col>
    </v-row>
    <v-row style="padding:10px; margin:10px ;margin-top:30px">
      <v-col>
        <v-card style="background-color:#1867c0">
          <v-card-title class="d-flex justify-center align-center">
            <v-icon color="white" size="x-large" style="margin-top:20px">mdi-chart-box</v-icon>
          </v-card-title>

          <v-card-title class="text-center" justify="center" style=" margin-top:20px;color:white">
            Advanced Assessments
          </v-card-title>
          <v-card-text class="text-center" style=" margin-top:20px; color:white;">


            Gain deep insights into team dynamics with our accurate personality assessments.

          </v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-card>
          <v-card-title class="d-flex justify-center align-center">
            <v-icon color="primary" size="x-large" style=" margin-top:20px;">mdi-human-capacity-increase</v-icon>
          </v-card-title>

          <v-card-title class="text-center" justify="center" style=" margin-top:20px;color:#1867c0 ">
            Optimized Teams
          </v-card-title>
          <v-card-text class="text-center" style=" margin-top:20px;">


            Craft high-performing teams with diverse personalities for enhanced collaboration.

          </v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-card style="background-color:#1867c0; color:white">
          <v-card-title class="d-flex justify-center align-center">
            <v-icon size="x-large" style=" margin-top:20px;color:white">mdi-wrench-cog</v-icon>
          </v-card-title>
          <v-card-title class="text-center" style="margin-top:20px;">
            Tailored Training
          </v-card-title>
          <v-card-text class="text-center" style="margin-top:20px ; ">


            Address challenges head-on with customized training courses based on assessment results.

          </v-card-text>
        </v-card>

      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row style="padding:10px; margin:10px">
      <v-col>
        <v-card>
          <v-card-title class="d-flex justify-center align-center">
            <v-icon color="primary" size="x-large" style=" margin-top:20px;">mdi-party-popper</v-icon>
          </v-card-title>

          <v-card-title class="d-flex justify-center align-center" style=" margin-top:20px ; color:#1867c0 ">
            Proven Success
          </v-card-title>
          <v-card-text class="d-flex justify-center align-center" style="margin-top:20px ; ">


            Explore our success stories to see how we've transformed organizations.

          </v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-card style="background-color:#1867c0; color:white">
          <v-card-title class="d-flex justify-center align-center">
            <v-icon size="x-large" style=" margin-top:20px;color:white">mdi-chart-line</v-icon>
          </v-card-title>

          <v-card-title class="text-center" justify="center" style=" margin-top:20px;">
            Impactful Results
          </v-card-title>
          <v-card-text class="text-center" style=" margin-top:20px;">


            Our ultimate goal is to make a positive impact on individuals, teams, and organizations

          </v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-card>
          <v-card-title class="d-flex justify-center align-center">
            <v-icon color="primary" size="x-large" style=" margin-top:20px;">mdi-crowd</v-icon>
          </v-card-title>
          <v-card-title class="d-flex justify-center align-center" style="margin-top:20px;color:#1867c0 ;">
            Dedicated Team
          </v-card-title>
          <v-card-text class="d-flex justify-center align-center" style="margin-top:20px ; ">

            Our team consists of experts from diverse backgrounds. Together, we bring a wealth of knowledge and
            experience to the table.

          </v-card-text>
        </v-card>

      </v-col>
    </v-row>
  </v-card>
  <Footer></Footer>
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
.title {
  font-size: 4rem;
  font-weight: lighter;
  color: white;
  font-family: 'Times New Roman', Times, serif;
  margin-top: 30vh;
}
</style>
