<template>
  <v-app>
<!--    <NavBar />-->
    <SideBar/>
    <v-content>
            <router-view></router-view>
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
