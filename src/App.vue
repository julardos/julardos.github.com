<template>
  <v-app>
    <SideBar/>
    <v-content>
        <transition name="slide-fade">
            <router-view></router-view>
        </transition>
    </v-content>
  </v-app>
</template>

<script>
// import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";

export default {
  name: "App",

  components: {
    // NavBar,
    SideBar
  },

  data: () => ({
    expand: false
  })
};
</script>

<style>
    .slide-fade-enter {
        transform: translateX(-10px);
        opacity: 0;
    }

    .slide-fade-enter-active,
    .slide-fade-leave-active {
        transition: all 0.2s ease;
    }

    .slide-fade-leave-to {
        transform: translateX(10px);
        opacity: 0;
    }
</style>
