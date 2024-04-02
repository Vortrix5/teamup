<template>
    
    <v-container>
        
        <v-row aligned="center" justify="center">
    <v-col v-for="(variant, i) in variants" :key="i" cols="auto">
      <v-card :color="color" :variant="variant" class="mx-auto" max-width="">
        
        <v-row>
            <h1>'  TeamUp</h1>
            
        </v-row>
        <v-spacer></v-spacer>
        <v-card-item> 
        <v-form>
        <v-container>
  <v-row>
    <v-col cols="12">
      <p>In a group setting you prefer to take charge and make decisions</p>
    </v-col>
    <v-col cols="12">
      <v-slider
        v-model="sliderValue2"
        thumb-label
        label=""
        class="mt-0"
      >
        <div slot="label">{{ sliderValue1 }}</div>
        <div slot="prepend">Disagree</div>
        <div slot="append">Agree</div>
      </v-slider>
    </v-col>
  </v-row>
</v-container>
<v-container>
  <v-row>
    <v-col cols="12">
      <p>you prefer working independently rather than in a team</p>
    </v-col>
    <v-col cols="12">
      <v-slider
        v-model="sliderValue3"
        thumb-label
        label=""
        class="mt-0"
      >
        <div slot="label">{{ sliderValue1 }}</div>
        <div slot="prepend">Disagree</div>
        <div slot="append">Agree</div>
      </v-slider>
    </v-col>
  </v-row>
</v-container>
<v-container>
  <v-row>
    <v-col cols="12">
      <p>You are open to feedback and constructive criticism at work from</p>
    </v-col>
    <v-col cols="12">
        
      <v-slider
        v-model="sliderValue1"
        thumb-label
        label=""
        class="mt-0"
      >
        <div slot="label">{{ sliderValue1 }}</div>
        <div slot="prepend">Disagree</div>
        <div slot="append">Agree</div>
      </v-slider>
    </v-col>
  </v-row>
</v-container>
<v-container>
  <v-row>
    <v-col cols="12">
      <p>You handle tight deadlines and high-pressure situations at work</p>
    </v-col>
    <v-col cols="12">
      <v-slider
        v-model="sliderValue4"
        thumb-label
        label=""
        class="mt-0"
      >
        <div slot="label">{{ sliderValue4 }}</div>
        <div slot="prepend">Disagree</div>
        <div slot="append">Agree</div>
      </v-slider>
    </v-col>
  </v-row>
</v-container>
<v-container>
  <v-row>
    <v-col cols="12">
      <p>You balance well your work and life</p>
    </v-col>
    <v-col cols="12">
      <v-slider
        v-model="sliderValue5"
        thumb-label
        label=""
        class="mt-0"
      >
        <div slot="label">{{ sliderValue5 }}</div>
        <div slot="prepend">Disagree</div>
        <div slot="append">Agree</div>
      </v-slider>
    </v-col>
  </v-row>
</v-container>
  
        <v-checkbox
          v-model="accept"
          :rules="[v => v || 'You must accept the terms and conditions']"
          label="Accept terms and conditions"
          required
        ></v-checkbox>
  
        <v-btn :disabled="!valid" color="blue" class="mr-4" @click="submit">
          Submit
        </v-btn>
  
        <v-btn color="white" class="mr-4" @click="reset"> Reset </v-btn>
      </v-form>
    </v-card-item>
      </v-card>
    </v-col>
  </v-row>
</v-container>
  </template>
  <script setup>
  import { ref } from 'vue'

  const variants = ['outlined']
  const color = ref('indigo')
</script>
  <script>
    export default {
      data: () => ({
        valid: true,
        sliderValue1: 0,
        sliderValue2: 0,
        sliderValue3: 0,
        sliderValue4: 0,
        sliderValue5: 0,
        name: '',
        nameRules: [
          v => !!v || 'Name is required',
          v => (v && v.length <= 10) || 'Name must be less than 10 characters',
        ],
        accept: false,
        
      }),
  
      methods: {
        submit() {
          if (this.$refs.form.validate()) {
            // submit form data
            console.log(
              this.name,
              this.accept
            )
          }
        },
        reset() {
          this.$refs.form.reset()
        },
      },
    }
  </script>
  