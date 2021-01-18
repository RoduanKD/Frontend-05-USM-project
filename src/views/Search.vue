<template>
  <v-card flat>
    <v-toolbar
      flat
    >
    </v-toolbar>

    <v-card
      class="mx-auto"
      max-width="700"
      style="margin-top: -64px;"
    >
      <v-toolbar flat color="primary">
        <v-text-field placeholder="search" color="white"></v-text-field>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon color="white">mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon color="white">mdi-microphone</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon color="white">mdi-dots-vertical</v-icon>
        </v-btn>
      </v-toolbar>

      <v-divider></v-divider>

      <v-card-text style="height: 200px;"></v-card-text>
    </v-card>
    <v-card
    class="mx-auto move"
    height="220"
    width="200"
  >
    <v-navigation-drawer
      color="primary"
      dark
      permanent
    >
      <v-list>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
  </v-card>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          { title: 'All'},
          { title: 'Person'},
          { title: 'University'},
          { title: 'Posts'},
        ],
      }
    },
  }
</script>

<style>
 .mx-auto {
     position: relative;
     left: 20%;
     transform: translate(-40%, 60%);
 }
 .accent {
     position: relative;
     left: 40%;
 }
 .move {
     top: -238px;
     left: 480px;
 }
 .caps {
     color: white;
     border-color: 2px solid white;
 }
</style>
