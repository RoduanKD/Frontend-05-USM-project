<template>
  <v-app>
    <side-bar></side-bar>
    <v-main>
      <!-- <v-container align-content-start fill-height fluid> -->
        <router-view></router-view>
      <!-- </v-container> -->
    </v-main>
  </v-app>
</template>

<script>
import SideBar from '@/components/SideBar';

export default {
  name: 'App',

  components: {
    SideBar,
  },

  data: () => ({
    
  }),
};
</script>
