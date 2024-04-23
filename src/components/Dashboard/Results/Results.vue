<template>
  <v-row>
    <v-col md="4">

      <v-card style="margin: 20px; padding: 10px;">
        <v-card-title>
          Extraversion
        </v-card-title>
        <v-divider
          style="margin-bottom: 10px"
        ></v-divider>
        <v-card-subtitle style="color: green; font-size: 20px">
          <strong>Score: {{ extraversionScore }}</strong>
        </v-card-subtitle>
        <v-card-text>Extroversion (E) is the personality trait of seeking fulfillment from sources outside the self or
          in community. High scorers tend to be very social while low scorers prefer to work on their projects alone.
        </v-card-text>
      </v-card>

      <v-card style="margin: 20px; padding: 10px;">
        <v-card-title>
          Agreeableness
        </v-card-title>
        <v-divider
          style="margin-bottom: 10px"
        ></v-divider>
        <v-card-subtitle style="color: green; font-size: 20px">
          <strong>Score: {{ agreeablenessScore }}</strong>
        </v-card-subtitle>
        <v-card-text>Agreeableness (A) reflects how much individuals adjust their behavior to suit others. High scorers
          are typically polite and like people. Low scorers tend to 'tell it like it is'.
        </v-card-text>
      </v-card>

      <v-card style="margin: 20px; padding: 10px;">
        <v-card-title>
          Conscientiousness
        </v-card-title>
        <v-divider
          style="margin-bottom: 10px"
        ></v-divider>
        <v-card-subtitle style="color: green; font-size: 20px">
          <strong>Score: {{ conscientiousnessScore }}</strong>
        </v-card-subtitle>
        <v-card-text>Conscientiousness (C) is the personality trait of being honest and hardworking. High scorers tend
          to follow rules and prefer clean homes. Low scorers may be messy and cheat others.
        </v-card-text>
      </v-card>


    </v-col>
    <v-col>

      <v-card style="margin: 20px; padding: 10px; max-height: 500px;">
        <v-card-title style="text-align: center">
          Personality Traits
        </v-card-title>
        <v-divider
          style="margin-bottom: 10px"
        ></v-divider>
        <div class="d-flex justify-center" style="height: 460px">
          <Radar :data="data" :options="options"/>
        </div>
      </v-card>

      <v-row>

        <v-col md="6">
          <v-card style="margin: 20px; padding: 10px;">
            <v-card-title>
              Neuroticism
            </v-card-title>
            <v-divider
              style="margin-bottom: 10px"
            ></v-divider>
            <v-card-subtitle style="color: green; font-size: 20px">
              <strong>Score: {{ neuroticismScore }}</strong>
            </v-card-subtitle>
            <v-card-text>Neuroticism (N) is the personality trait of being emotional. High scorers tend to have high
              emotional reactions to stress. They may perceive situations as threatening and be more likely to feel
              moody, depressed, angry, anxious, and experience mood swing. Low scorers tend to be more emotionally
              stable and less reactive to stress.
            </v-card-text>
          </v-card>
        </v-col>

        <v-col md="6">
          <v-card style="margin-top: 20px; margin-right: 20px; padding: 10px;">
            <v-card-title>
              Openness to Experience
            </v-card-title>
            <v-divider
              style="margin-bottom: 10px"
            ></v-divider>
            <v-card-subtitle style="color: green; font-size: 20px">
              <strong>Score: {{ opennessScore }}</strong>
            </v-card-subtitle>
            <v-card-text>Openness to Experience (O) is the personality trait of seeking new experiences and intellectual
              pursuits. High scores may day dream a lot (enjoy thinking about new and different things). Low scorers
              tend to be very down to earth (more of a ‘hear and now’ thinker). Consequently, it is thought that people
              with higher scores might be more creative, flexible, curious, and adventurous, whereas people with lower
              score might tend to enjoy routines, predictability, and structure.
            </v-card-text>
          </v-card>
        </v-col>

      </v-row>

    </v-col>
  </v-row>
</template>

<script lang="js">
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
} from 'chart.js'
import {Radar} from 'vue-chartjs'
import {data, options} from "./chartConfig.js";
import {getCurrentUser, getUserById} from '@/repositories/UserRepo';
import * as chartConfig from './chartConfig.js'
import PersonalityTest from "@/models/personalityTest";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
)

export default {
  name: 'App',
  computed: {
    options() {
      return options
    },
    data() {
      return data
    }
  },
  components: {
    Radar
  },
  data() {
    return {
      ...chartConfig,
      extraversionScore: 0,
      agreeablenessScore: 0,
      conscientiousnessScore: 0,
      neuroticismScore: 0,
      opennessScore: 0,
    }
  },
  async beforeMount() {
    await this.fetchData();
  },

  methods: {
    async fetchData() {
      const currentUser = getCurrentUser();
      const user = await getUserById(currentUser.id);
      const personalityTest = new PersonalityTest();
      personalityTest.results = user.personalityTest;
      const scores = personalityTest.calculateScores();
      this.data.datasets[0].data = Object.values(scores);
      console.log(this.data.datasets[0].data)
      // Update trait scores
      this.extraversionScore = scores.extraversion;
      this.agreeablenessScore = scores.agreeableness;
      this.conscientiousnessScore = scores.conscientiousness;
      this.neuroticismScore = scores.neuroticism;
      this.opennessScore = scores.openness;
    }
  }
}
</script>

<style scoped>
.d-flex {
  display: flex;
}

.justify-center {
  justify-content: center;
}

.align-center {
  align-items: center;
}
</style>
