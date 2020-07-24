<template>
  <v-container class="home">
    <v-row>
      <v-col cols="12" lg="6" md="12">
        <v-img src="../assets/about_me_img.webp"
               aspect-ratio="1"
               max-height="80%"
               contain
        ></v-img>
      </v-col>
      <v-col cols="12" lg="6" md="12" class="mb-5">
        <div
          class="v-overlay--absolute typography"
        >
          <h4>Hi, my name</h4>
          <h1
                  class="display-4 font-weight-bold h-name"
          >Julardo <br> <span class="ml-12">Satriawan</span></h1>
        </div>
        <div class="pa-5">
          <p class="font-weight-light blue-grey--text"> ~ Introduction</p>
          <h2 class="display-1 font-weight-light">
            I am a <span class="yellow">Developer,</span> <br>
            <span class="yellow">Interest</span> to learn something new
          </h2>
          <v-btn text class="mt-5 format_underline" color="cyan darken-2"  @click="dialog = true"><v-icon size="10pt" class="mr-2">fas fa-arrow-right</v-icon>My Story</v-btn>
        </div>
      </v-col>
      <BottomNav></BottomNav>
    </v-row>
    <v-dialog
            v-model="dialog"
            max-width="290"
    >
      <v-card>
        <v-card-title class="headline">My Story</v-card-title>

        <v-card-text>
          {{ desc }}
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
                  color="green darken-1"
                  text
                  @click="dialog = false"
          >
            close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
// @ is an alias to /src
import BottomNav from "../components/BottomNav"
export default {
  name: "Home",
  data() {
    return {
      dialog: false,
      desc: "Hello, I am Jul. I am a hard worker, I want to learn a lot as I can. I am so addicted to coding and IT. Summary of me, I am a student at PENS and a freelance web developer. I have a lot of experiences using laravel and vuejs, one of them is my participation in developing the SNMPN & SBMPN website which is a website for a help highschool student to apply to the vocational university. I also study about SEO and Cloud computing. Now, I interest in data science, so I joined the data science club on my campus.",
    }
  },
  components: {
    BottomNav
  }
};
</script>

<style scoped>
  h1 {
    font-size: 3em;
  }
  h4 {
    font-weight: 300;
  }
  .typography {
    left: -11.8em;
    position: relative;
    z-index: 20;
    text-shadow: -5px 5px 35px #ffffff;
  }

  @media only screen and (max-width: 1080px) {
    .v-application .h-name {
      position: absolute;
      top: -2.2em;
      left: 2em;
      font-size: 8rem !important;
      line-height: 8rem;
    }
  }

  @media only screen and (max-width: 768px) {
    /* For mobile phones: */
    .v-application .h-name {
      position: absolute;
      top: -2em;
      left: 3em;
      font-size: 4.5rem !important;
      line-height: 4.5rem;
    }
  }

  @media only screen and (max-width: 480px) {
    /* For mobile phones: */
    .v-application .h-name {
      position: absolute;
      top: -2em;
      left: 3.5em;
      font-size: 3.5rem !important;
      line-height: 3.5rem;
    }
  }
</style>
