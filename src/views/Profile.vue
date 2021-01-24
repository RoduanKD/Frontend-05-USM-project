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
    <div class="app primary lighten-4">
      <v-container class="push">
        <v-img
          class="avatar"
          :src="user.img"
          width="150"
          height="150"
        ></v-img>
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
    </div>
    <div class="right">
      <v-img class="pic" src="@/assets/chat.png" width="522" height="355">
      </v-img>
      <br />
      <v-btn
        class="on"
        outlined
        color="white"
        @click="$router.push({ name: 'ChatRoom' })"
      >
        Chat
      </v-btn>
    </div>
  </v-container>
</template>

<script>
export default {
  computed: {
    user () {
      return this.$store.getters.authenticated
    },
  }
};
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
  background-color: #43425d;
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
  /* top: 90px; */
}
</style>