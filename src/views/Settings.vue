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
      <div>
        <br /><br />
        <b class="ma-15 font"> Settings </b>
        <div>
          <v-img class="avatar" :src="user.img" width="150" height="150">
          </v-img>
          <div style="background-color: #f0f0f0" class="move">
            <v-icon> mdi-camera-plus </v-icon>
          </div>
        </div>
        <v-container>
          <v-form class="under">
            <v-row>
              <v-col cols="12" sm="4">
                <v-text-field
                  class="bor"
                  solo
                  label="First Name"
                  v-model="fname"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="4">
                <v-text-field
                  class="bor"
                  solo
                  label="Last Name"
                  v-model="lname"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="4">
                <v-text-field
                  class="bor"
                  solo
                  label="Specilaization"
                  v-model="user.spec"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="4">
                <v-text-field
                  class="bor"
                  solo
                  label="Password"
                  v-model="user.password"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="4">
                <v-text-field
                  class="bor"
                  solo
                  label="Email"
                  v-model="user.email"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="4">
                <v-text-field
                  class="bor"
                  solo
                  label="Birthday"
                  v-model="user.age"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="4">
                <v-text-field
                  class="bor"
                  solo
                  label="Registeration"
                  v-model="user.start_year"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="4">
                <v-text-field
                  class="bor"
                  solo
                  label="Current Year"
                  v-model="user.study_year"
                ></v-text-field>
                <v-btn @click="updateUserInfo" outlined color="white" class="butn"> Update </v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-container>
      </div>
    </v-app>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    user: {
      name: "",
    },
    last: "",
    first: "",
  }),
  mounted() {
    const self = this;

    self.getUserInfo();
  },
  methods: {
    updateUserInfo() {
      const self = this;

      const info = {
        id: self.user.id,
        name: `${self.first || self.fname} ${self.last || self.lname}`,
        email: self.user.email,
        password: self.user.password,
        spec: self.user.spec,
        university: self.user.university,
        img: self.user.img,
        community_name: self.user.community_name,
        study_year: self.user.study_year,
        start_year: self.user.start_year,
        age: self.user.age,
      };

      self.axios
        .post("/users/update", info)
        .then((res) => {
          alert("done");
          console.log(res);
        });
    },
    getUserInfo() {
      const self = this;

      self.user = this.$store.getters.authenticated
      // self.axios
      //   .get("/users/search/a")
      //   .then((res) => {
      //     self.user = res.data[0];
      //   });
    },
  },
  computed: {
    fname: {
      get() {
        return this.user.name.split(" ")[0];
      },
      set(v) {
        this.first = v;
      },
    },
    lname: {
      get() {
        return this.user.name.split(" ")[1];
      },
      set(v) {
        this.last = v;
      },
    },
  },
};
</script>
  
<style scoped>
.app {
  border-radius: 6% 6% 6% 6% / 10% 10% 10% 10%;
}
.font {
  font-size: 1.8em;
}
.bor {
  border-radius: 7% 7% 7% 7% / 50% 50% 50% 50%;
}
.avatar {
  left: 500px;
}
.move {
  padding: 12px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: relative;
  left: 500px;
  top: -40px;
}
.butn {
  background: #43425D;
  width: 200px;
  border: none;
}
</style>