<template>
  <v-container>
    <div>
      <v-btn
        @click="$router.push({ name: 'Search' })"
        class="ma-2"
        color="primary"
      >
        Click To Go Search
        <v-icon dark right> mdi-magnify </v-icon>
      </v-btn>
    </div>
    <v-app style="background-color: #7dabe7; color: white" class="app">
      <v-container class="push">
        <v-img
          class="avatar"
          src="@/Avatar.png"
          width="150"
          height="150"
        ></v-img
        >
        <div id="online"></div>
        <br />
        <v-form class="with">
          <v-text-field
            class="bor"
            solo
            readonly
            label="User Name"
            :value="user.name"
          ></v-text-field>
        </v-form>
        <v-form class="with">
          <v-text-field
            class="bor"
            solo
            readonly
            label="Age"
            :value="user.age | moment('from', 'now', true)"
          ></v-text-field>
        </v-form>
        <v-form class="with">
          <v-text-field
            class="bor"
            solo
            readonly
            label="Email"
            :value="user.email"
          ></v-text-field>
        </v-form>
      </v-container>
      <div class="right">
        <v-img class="pic" src="@/chat.png" width="522" height="355"> </v-img> <br>
        <v-btn
          class="on"
          outlined
          color="white"
          @click="$router.push({ name: 'ChatRoom' })"
        >
          Chat
        </v-btn>
      </div>
    </v-app>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      user: {}
    }),
    beforeCreate () {
      const self = this
  
      self.axios.get('http://syberctf.hadara-group.com:8083/users/search/a').then((res) => {
        self.user = res.data[0]
      })
    }
  }
  </script>

<style scoped>
.app {
  border-radius: 8% 8% 8% 8% / 10% 10% 10% 10%;
}
.with {
  width: 400px;
}
 #online {
      width: 27px;
      height: 27px;
      background: rgb(103, 224, 103);
      border-radius: 50%;
      position: relative;
      left: 137px;
      top: -25px;
 }
.on {
  width: 300px;
  height: 55px;
  background-color: #43425D;
  border: none;
  border-radius: 5% 5% 5% 5% / 50% 50% 50% 50%;
}
.right {
  position: relative;
  left: 500px;
  top: -350px;
}
.avatar {
  left: 120px;
}
.push {
  position: relative;
  left: 20px;
  top: 90px;
}
</style>