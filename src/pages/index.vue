<template>
  <Navbar />
    <v-divider/>
  <v-parallax lazy-src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg" fill-height>
            <v-card-text justify="center container">
              <h1>

      <span class="typed-text">{{ typeValue }}</span>
      <span class="blinking-cursor">|</span>
      <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
    </h1>

              <h2>
                onsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </h2>


            </v-card-text>

</v-parallax>
  <v-container>
    <v-responsive>



          <v-divider></v-divider>

            <v-row >

        <v-col cols="12" md="6" class="isolated-text">

          <v-card>

            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
            est laborum.
          </v-card>

        </v-col>

          <v-col md="6" >
      <v-list align-items>
      <v-list-item>
        <v-row align-content >
          <v-col md="3">
            <v-icon size="110px">mdi-hammer-wrench</v-icon>
          </v-col>
          <v-col>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </v-col>
        </v-row>
        </v-list-item>
      <v-list-item>
         <v-row align-content >
          <v-col md="3">
            <v-icon color="#00008B" size="110px" >mdi-hammer-wrench</v-icon>
          </v-col>
          <v-col>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </v-col>
        </v-row>
      </v-list-item>
      <v-list-item>
         <v-row align-content >
          <v-col md="3">
            <v-icon size="110px">mdi-hammer-wrench</v-icon>
          </v-col>
          <v-col>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </v-col>
        </v-row>
      </v-list-item>
    </v-list>
    </v-col>
  </v-row>


    </v-responsive>

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
  height: 150vh;
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
  color: White;
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
    color: #2c3e50;
  }
}
@-moz-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #2c3e50;
  }
}
@-webkit-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #2c3e50;
  }
}
@-ms-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #2c3e50;
  }
}
@-o-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #2c3e50;
  }
}

h2 {
  font-weight: lighter;


}.isolated-text{
  margin-top:40vh;
}

</style>
