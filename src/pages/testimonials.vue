<template>
  <Navbar/>
  <v-parallax lazy-src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg" height="50vh">
    <v-card-text justify="center container" align-center>
      <h1 class="title">
        Testimonials
      </h1>
    </v-card-text>
  </v-parallax>

  <v-carousel hide-delimiters class="box" show-arrows="hover" elemvation="0">
    <v-carousel-item margin="auto" >

      <v-card class="card" prepend-icon="mid-star" elevation="0">

        <template v-slot:prepend>
          <v-avatar size="120">
            <v-img
              alt="John"
             lazy-src="https://cdn.vuetifyjs.com/images/john.png"
            ></v-img>
          </v-avatar>
        </template>

        <v-card-title>
          Great
        </v-card-title>

        <v-card-subtitle>
          <v-icon icon="mdi-star" color="blue"></v-icon>
          <v-icon icon="mdi-star" color="blue"></v-icon>
          <v-icon icon="mdi-star" color="blue"></v-icon>
          <v-icon icon="mdi-star" color="blue"></v-icon>
          <v-icon icon="mdi-star-outline" color="blue"></v-icon>
        </v-card-subtitle>

        <v-card-text>
          Using this platform completely transformed how I manage my team. The personalized team combinations based on personality tests have been incredibly accurate and have helped us achieve our goals faster than ever before."
        </v-card-text>
      </v-card>
    </v-carousel-item>

    <v-carousel-item>
      <v-card class="card" prepend-icon="mid-star" elevation="0">

        <template v-slot:prepend>
          <v-avatar size="120">
            <v-img
              alt="John"
              lazy-src="data:image/jpeg;base64,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"
            ></v-img>
          </v-avatar>
        </template>

        <v-card-title>
          Great
        </v-card-title>

        <v-card-subtitle>
          <v-icon icon="mdi-star" color="blue"></v-icon>
          <v-icon icon="mdi-star" color="blue"></v-icon>
          <v-icon icon="mdi-star" color="blue"></v-icon>
          <v-icon icon="mdi-star" color="blue"></v-icon>
          <v-icon icon="mdi-star" color="blue"></v-icon>
        </v-card-subtitle>

        <v-card-text>
          I was skeptical at first, but after using this platform, I'm a believer. It's amazing how accurately it can predict team dynamics based on personality traits. It's made my job as a manager so much easier.
        </v-card-text>
      </v-card>
    </v-carousel-item>

    <v-carousel-item>
      <v-card class="card" prepend-icon="mid-star" elevation="0">

        <template v-slot:prepend>
          <v-avatar size="120">
            <v-img
              alt="John"
              lazy-src="data:image/jpeg;base64,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"
            ></v-img>
          </v-avatar>
        </template>

        <v-card-title>
          Great
        </v-card-title>

        <v-card-subtitle>
          <v-icon icon="mdi-star" color="blue"></v-icon>
          <v-icon icon="mdi-star" color="blue"></v-icon>
          <v-icon icon="mdi-star" color="blue"></v-icon>
          <v-icon icon="mdi-star" color="blue"></v-icon>
          <v-icon icon="mdi-star-outline" color="blue"></v-icon>
        </v-card-subtitle>

        <v-card-text>
          I've tried other team management tools before, but none have come close to the effectiveness of this platform. The combination of personality tests and team recommendations has revolutionized how I build and manage my teams.
        </v-card-text>
      </v-card>
    </v-carousel-item>

    <v-carousel-item>
      <v-card class="card" prepend-icon="mid-star" elevation="0">

        <template v-slot:prepend>
          <v-avatar size="120">
            <v-img
              alt="John"
              lazy-src="data:image/jpeg;base64,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"
            ></v-img>
          </v-avatar>
        </template>

        <v-card-title>
          Great
        </v-card-title>

        <v-card-subtitle>
          <v-icon icon="mdi-star" color="blue"></v-icon>
          <v-icon icon="mdi-star" color="blue"></v-icon>
          <v-icon icon="mdi-star" color="blue"></v-icon>
          <v-icon icon="mdi-star" color="blue"></v-icon>
          <v-icon icon="mdi-star-outline" color="blue"></v-icon>
        </v-card-subtitle>

        <v-card-text>
          As someone who values teamwork and efficiency, this platform has been a game-changer for me. It's streamlined the process of team building and has led to more cohesive and productive teams within our organization.
        </v-card-text>
      </v-card>
    </v-carousel-item>

    <v-carousel-item>
      <v-card class="card" prepend-icon="mid-star" elevation="0">

        <template v-slot:prepend>
          <v-avatar size="120">
            <v-img
              alt="John"
              lazy-src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThdO599kdiN74_JFmUNDm0-Pf5nQ3lkzoKRhJK988skQ&s"
            ></v-img>
          </v-avatar>
        </template>

        <v-card-title>
          Great
        </v-card-title>

        <v-card-subtitle>
          <v-icon icon="mdi-star" color="blue"></v-icon>
          <v-icon icon="mdi-star" color="blue"></v-icon>
          <v-icon icon="mdi-star" color="blue"></v-icon>
          <v-icon icon="mdi-star" color="blue"></v-icon>
          <v-icon icon="mdi-star" color="blue"></v-icon>
        </v-card-subtitle>

        <v-card-text>
          I can't imagine managing a team without this platform now. The insights it provides into team dynamics have been invaluable in optimizing team performance and fostering better communication among team members.
        </v-card-text>
      </v-card>
    </v-carousel-item>

  </v-carousel>


  <Footer/>
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

.box{
  max-width: 700px;
  max-height: auto;
  margin: auto;
  padding: 40px;
}

.card{
  border-radius: 100px;
  padding: 20px;
}
</style>
