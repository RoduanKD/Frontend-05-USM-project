<template>
  <v-navigation-drawer  
       color="primary" :value="drawer" dark app>
      <template v-slot:prepend>
        <v-list-item two-line>
          <v-list-item-avatar>
            <img src="@/assets/logo.png">
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>USM University</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item-group
        >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.link"
          link
          exact
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-if="!$store.getters.authenticated" :to="{ name:'Login' }">
          <v-list-item-icon>
            <v-icon>mdi-earth</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Login / Sign up</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-else @click="$store.commit('logout')">
          <v-list-item-icon>
            <v-icon>mdi-logout</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-if="!$vuetify.theme.dark" @click="$vuetify.theme.dark = !$vuetify.theme.dark">
          <v-list-item-icon>
            <v-icon>mdi-moon-waxing-crescent</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Turn Off The Light</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-else @click="$vuetify.theme.dark = !$vuetify.theme.dark">
          <v-list-item-icon>
            <v-icon color="yellow">mdi-white-balance-sunny</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Turn On The Light</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  
</template>

<script>
export default {
  props: {
    drawer: Boolean
  },
  data: () => ({
    items: [
      { title: 'Community', icon: 'mdi-home', link: { name: 'Community' } },
      { title: 'Boards', icon: 'mdi-chart-bar', link: { name: 'Boards' } },
      { title: 'Chat Room', icon: 'mdi-chat' , link:{name:'ChatRoom'} },
      { title: 'Profile', icon: 'mdi-account' , link: {name:'Profile'} },
      { title: 'Search', icon: 'mdi-magnify' ,link: {name:'Search'} },
      { title: 'Settings', icon: 'mdi-cog' ,link: {name:'Settings'} },
    ],
  }),
}
</script>