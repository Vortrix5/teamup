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
          Your personality type is: <span style="color: green; font-size: 20px">{{ personalityTypeName }}</span>
        </v-card-title>
        <v-divider
          style="margin-bottom: 10px"
        ></v-divider>
        <v-card-text>{{ personalityTypeDescription}}
        </v-card-text>
      </v-card>

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
import {getCurrentUser} from '@/repositories/UserRepo';
import * as chartConfig from './chartConfig.js'

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
      personalityTypeName: '',
      personalityTypeDescription: ''

    }
  },
  async beforeMount() {
    await this.fetchData();
  },

  methods: {
    async fetchData() {
      const personliatyTypeDescriptions = {
        "The Trailblazer": "Trailblazers are curious minds who crave new experiences and knowledge. They're always up for a challenge and meticulously plan their adventures, whether it's mastering a new skill, traveling to uncharted territories, or diving deep into a complex subject. They thrive on learning and sharing their discoveries with the world, inspiring others to push boundaries.",
        "The Diplomat": "Diplomats are natural connectors who build bridges between people. They possess a genuine warmth and a knack for understanding different perspectives. They excel at resolving conflicts peacefully and fostering collaboration.  Imagine a Diplomat hosting a dinner party where everyone feels comfortable and interesting conversations flow effortlessly.",
        "The Maverick": "Mavericks are fiercely independent free spirits who march to the beat of their own drum. They're brimming with creative ideas and an aversion to following the rules. While not fans of rigid structure, they're highly motivated by their own passions and can achieve remarkable things with their bursts of focused energy. Think of a Maverick as the artist who breaks away from traditional styles to forge their own unique path.",
        "The Guardian": "Guardians are dependable and selfless individuals who put the needs of others first. They're organized, reliable, and create a sense of stability for those around them.  Whether it's volunteering for a cause they care about or meticulously planning a family reunion, Guardians bring a sense of order and care to every situation.",
        "The Analyst": "Analysts are logical thinkers who approach life with a calm and rational mind. They value facts, data, and critical thinking. They excel at problem-solving and strategizing, meticulously analyzing situations before taking action. Imagine an Analyst as the chess player who carefully considers every move before making their next strategic decision."
      }
      const currentUser = getCurrentUser();
      this.data.datasets[0].data = Object.values(currentUser.scores);
      this.extraversionScore = currentUser.scores.Extraversion;
      this.agreeablenessScore = currentUser.scores.Agreeableness;
      this.conscientiousnessScore = currentUser.scores.Conscientiousness;
      this.neuroticismScore = currentUser.scores.Neuroticism;
      this.opennessScore = currentUser.scores.Openness;
      this.personalityTypeName = currentUser.personalityType;
      this.personalityTypeDescription = personliatyTypeDescriptions[currentUser.personalityType];
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
