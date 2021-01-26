<template>
  <v-app>
    <v-app-bar
      color="primary"
      dark
      app
      v-if="mini"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title>USM - University Social Media</v-app-bar-title>
    </v-app-bar>
    <side-bar :drawer="drawer"></side-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import SideBar from "@/components/SideBar";

export default {
  name: "App",

  components: {
    SideBar,
  },

  data () {
    return {
      drawer: !this.mini
    }
  },

  computed: {
    mini () {
      return this.$vuetify.breakpoint.mdAndDown;
    }
  }
};
</script>
