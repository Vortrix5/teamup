<template>
  <Navbar/>
  <v-parallax src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg" height="50vh">
    <v-card-text justify="center container" align-center>
      <h1 class="title">
        Testimonials
      </h1>
    </v-card-text>
  </v-parallax>

  <v-carousel width="300"
              show-arrows="hover"
              cycle
              hide-delimiter-background>
    <v-carousel-item v-for="(testimonial, index) in testimonials" :key="index" width="100%">
      <v-row align="center" justify="center">
        <v-col cols="auto">
          <v-card class="card" prepend-icon="mid-star" elevation="0">
            <template v-slot:prepend>
              <v-avatar size="120">
                <v-img :src="testimonial.image"></v-img>
              </v-avatar>
            </template>

            <v-card-title>
              {{ testimonial.title }}
            </v-card-title>

            <v-card-subtitle>
              <v-icon v-for="i in 5" :key="i" icon="mdi-star"
                      :color="i <= testimonial.rating ? 'blue' : 'grey'"></v-icon>
            </v-card-subtitle>

            <v-card-text>
              {{ testimonial.text }}
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-carousel-item>
  </v-carousel>


  <Footer/>
  <v-container></v-container>
</template>
<script>
import {defineComponent} from "vue";
import Navbar from "@/components/Navbar.vue";

export default defineComponent({
  components: {Navbar},
  data() {
    return {
      testimonials: [
        {
          image: "https://cdn.vuetifyjs.com/images/john.png",
          title: "Great",
          rating: 4,
          text: "Using this platform completely transformed how I manage my team. The personalized team combinations based on personality tests have been incredibly accurate and have helped us achieve our goals faster than ever before."
        },
        {
          image: "https://cdn.vuetifyjs.com/images/profiles/marcus.jpg",
          title: "Amazing",
          rating: 5,
          text: "I have been using TeamUp for a few months now and I can't imagine going back to the old way of managing my team. The platform is easy to use and the insights provided have been invaluable."
        },
        {
          image: "data:image/jpeg;base64,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",
          title: "Incredible",
          rating: 5,
          text: "I have been using TeamUp for a few months now and I can't imagine going back to the old way of managing my team. The platform is easy to use and the insights provided have been invaluable."
        }
      ]
    }
  }
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

.box {
  max-width: 700px;
  max-height: auto;
  margin: auto;
  padding: 40px;
}

.card {
  border-radius: 100px;
  padding: 20px;
}
</style>
