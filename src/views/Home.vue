<template>
  <v-container class="home">
    <v-row>
      <v-col cols="12" lg="6" md="12">
          <v-img src="../assets/about_me_img.jpg"
                 aspect-ratio="1"
                 max-height="80%"
                 contain
          ></v-img>
      </v-col>
      <v-col cols="12" lg="6" md="12" class="mb-5">
        <div
          class="v-overlay--absolute typography"
        >
          <h4>Hy, my name</h4>
          <h1
                  class="display-4 font-weight-bold"
          >Julardo <br> <span class="ml-12">Satriawan</span></h1>
        </div>
        <div class="pa-5">
          <p class="font-weight-light blue-grey--text"> ~ Introduction</p>
          <h2 class="display-1 font-weight-light">
            I am<span class="yellow"> a programmer</span>, <br>
            Now, I in a <span class="yellow">web developer</span> field, <br>
            <span class="yellow">But,</span> it's not prevent me to study on other field
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
      desc: "Hello, I am Jul. I am a hard workers, I want to learn a lot as lot as I can. I am so addict with codeing and IT. summary of me, I am a web developer. I have a lot of experiences using laravel and vuejs. I also study about SEO and Cloud computing. and then now I enthusiastic in data science. so I has study python and I join data science club.",
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
</style>
