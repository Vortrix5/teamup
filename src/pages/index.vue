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
  <v-parallax src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg" height="450px">
    <v-card-text justify="center container">
      <h1 style="color: white;">

        <span class="typed-text">{{ typeValue }}</span>
        <span class="blinking-cursor">|</span>
        <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
      </h1>

      <h2 style="color: white;">
        Let us handle the HR hurdles, while you concentrate on delivering exceptional service and expanding your business.
      </h2>
    </v-card-text>

  </v-parallax>
  <v-container fluid>
    <v-row>
      <v-col cols="6">

        <div class="text-h6">TeamUp</div>
        <p>
          Team Up is revolutionizing the way companies approach team
          optimization and employee development. Our holistic HR solution
          seamlessly integrates cutting-edge AI algorithms for personality
          analysis with intuitive dashboards, empowering managers with real-time
          insights into team dynamics. With a focus on continuous improvement,
          we provide personalized course recommendations linked to employees'
          test results, fostering professional growth and streamlining the
          training process. Join us in elevating team collaboration,
          productivity, and individual development
        </p>
        <br>
        <v-img
          aligned="center"
          side="end"
          :width="600"
          cover
          src="https://th.bing.com/th/id/OIF.Po3XOHdIJHkbWaqh7gcMUg?w=325&h=111&c=7&r=0&o=5&dpr=1.3&pid=1.7"
        ></v-img>
      </v-col>

      <v-col cols="6">
        <v-timeline aligned="start" side="end">
          <v-timeline-item dot-color="primary">
            <div>
              <div class="text-h6">Performance Management</div>
              <p>
                Streamline performance evaluations and goal-setting processes.
                Track progress and provide constructive feedback for growth.
              </p>
            </div>
          </v-timeline-item>
          <v-timeline-item dot-color="primary">
            <div>
              <div class="text-h6">Workforce Planning</div>

              <p>
                Anticipate and meet future staffing needs with strategic
                workforce planning. Analyze data to make informed decisions
                about hiring, training, and resource allocation
              </p>
            </div>
          </v-timeline-item>
          <v-timeline-item dot-color="primary">
            <div>
              <div class="text-h6">Learning & Development</div>
              <p>
                Invest in continuous learning for employee growth and retention.
                Access to a library of resources and training materials.
              </p>
            </div>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>

  </v-container>

  <v-divider/>
  <Footer></Footer>
</template>

<script >
export default {
  name: "typeWiriter",
  data: () => {
    return {
      typeValue: "",
      typeStatus: false,
      displayTextArray: [" Build Your Team  ,","Know Your Strengths and Weaknesses ,","Your Partner For Growth ,"],
      typingSpeed: 100,
      erasingSpeed: 100,
      newTextDelay: 1000,
      displayTextArrayIndex: 0,
      charIndex: 0,
      color: "white",
    };
  },
  props: {},
  created() {
    setTimeout(this.typeText, this.newTextDelay + 200);
  },
  methods: {
    typeText() {
      if (this.charIndex < this.displayTextArray[this.displayTextArrayIndex].length) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue += this.displayTextArray[this.displayTextArrayIndex].charAt(
          this.charIndex
        );
        this.charIndex += 1;
        setTimeout(this.typeText, this.typingSpeed);
      } else {
        this.typeStatus = false;
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },
    eraseText() {
      if (this.charIndex > 0) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue = this.displayTextArray[this.displayTextArrayIndex].substring(
          0,
          this.charIndex - 1
        );
        this.charIndex -= 1;
        setTimeout(this.eraseText, this.erasingSpeed);
      } else {
        this.typeStatus = false;
        this.displayTextArrayIndex += 1;
        if (this.displayTextArrayIndex >= this.displayTextArray.length)
          this.displayTextArrayIndex = 0;
        setTimeout(this.typeText, this.typingSpeed + 1000);
      }
    },
  },
};


</script>
<script setup>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
</script>

<style>.container {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
h1 {
  margin-top: 30vh;
  font-size: 4rem;
  font-weight: lighter;
  span.typed-text {
    color: white;
    font-family: 'Times New Roman', Times, serif;
  }
}


.blinking-cursor {
  font-size: 3rem;
  color: white;
  -webkit-animation: 1s blink step-end infinite;
  -moz-animation: 1s blink step-end infinite;
  -ms-animation: 1s blink step-end infinite;
  -o-animation: 1s blink step-end infinite;
  animation: 1s blink step-end infinite;
}
@keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: white;
  }
}
@-moz-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: white;
  }
}
@-webkit-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: white;
  }
}
@-ms-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: white;
  }
}
@-o-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: white;
  }
}

h2 {
  font-weight: lighter;


}.isolated-text{
   margin-top:40vh;
 }

</style>
