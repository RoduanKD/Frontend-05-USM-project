<template>
  <div class="all">
    <v-img
      @click="$router.push({ name: 'Search' })"
      src="@/top.png">
    </v-img>
    <v-img class="left"
      src="@/background-01.png">
    </v-img>
    <v-img class="right"
      src="@/background-02.png">
    </v-img>
    <v-img class="avatar"
      src="@/Avatar.png">
    </v-img>
    <div id="online"></div>
    <v-img class="color"
      src="@/back-chat.png">
    </v-img>
    <v-btn class="on" outlined color="white" @click="$router.push({ name: 'Chat' })">
        Chat
    </v-btn>
    <v-img class="pic"
      src="@/chat.png">
    </v-img>
    <v-text-field
    color="#939393"
    class="read-1"
    :value="user.name"
    label="Name:"
    outlined
    readonly
    ></v-text-field>
    <v-text-field
    color="#939393"
    class="read-2"
    :value="user.age | moment('from', 'now', true)"
    label="Age:"
    outlined
    readonly
    ></v-text-field>
    <v-text-field
    color="#939393"
    class="read-3"
    :value="user.email"
    label="Email:"
    outlined
    readonly
    ></v-text-field>
  </div>
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
.all {
    height: 700px;
}
.left {
  width: 875px;
  height: 680px;
  position: relative;
}
.right {
  width: 1300px;
  height: 682px;
  position: absolute;
  right: -30%;
  top: 55px;
}
.avatar {
  width: 180px;
  height: 180px;
  position: relative;
  top: -650px;
  left: 200px;
}
#online {
    width: 35px;
    height: 35px;
    background: rgb(103, 224, 103);
    position: relative;
    top: -688px;
    left: 325px;
    border-radius: 50%;
}
.color {
    width: 400px;
    height: 180px;
    position: relative;
    left: 660px;
    top: -767px;
}
.pic {
    width: 522px;
    height: 355px;
    position: relative;
    left: 600px;
    top: -730px;
}
.on {
    width: 300px;
    height: 56px;
    position: relative;
    left: 707px;
    top: -875px;
    background-color: #836FA9;
}
.read-1 {
    color: #939393;
    width: 265px;
    height: 46px;
    position: relative;
    top: -1200px;
    left: 180px;
}
.read-2 {
    color: #939393;
    width: 265px;
    height: 46px;
    position: relative;
    top: -1180px;
    left: 180px;
}
.read-3 {
    color: #939393;
    width: 265px;
    height: 46px;
    position: relative;
    top: -1160px;
    left: 180px;
}
</style>
