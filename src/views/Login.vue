<template>
  <div class="back fill-height">
    <v-container justify-center fluid fill-height>
      <v-row justify="center">
        <v-col cols="4">
          <v-card>
            <v-tabs
              color="deep-purple accent-4"
              background-color="primary"
              left
            >
              <v-tab class="white--text">SIGN IN</v-tab>
              <v-tab class="white--text">SIGN UP</v-tab>
              <v-tab-item>
                <v-card class="mx-auto elevation-12 midcard Blured">
                  <v-card-text class="blured">
                    <v-form
                      v-model="valid"
                      lazy-validation
                      ref="form"
                      class="py-16 px-7"
                    >
                      <v-text-field
                        name="nameemail"
                        label="Email / Username"
                        type="text"
                        v-model="nameemail"
                        :rules="nameemailRules"
                        required
                      ></v-text-field>
                      <v-text-field
                        name="password"
                        label="Password"
                        id="password"
                        type="password"
                        required
                        v-model="user.password"
                        :rules="passwordRules"
                      ></v-text-field>
                    </v-form>
                  </v-card-text>
                  <v-card-actions class="flex-column">
                    <v-spacer></v-spacer>
                    <v-btn color="primary" @click="validate">Login</v-btn>
                  </v-card-actions>
                </v-card>
              </v-tab-item>
              <v-tab-item>
                <v-card class="mx-auto elevation-12 midcard Blured">
                  <v-card-text class="pa-12">
                    <v-form ref="form" class="py-2 pb-6">
                      <v-text-field
                        name="name"
                        label="Username"
                        type="text"
                        v-model="user.name"
                        :counter="20"
                        :rules="nameRules"
                        required
                      ></v-text-field>
                      <v-text-field
                        name="email"
                        label="Email"
                        type="email"
                        required
                        v-model="user.email"
                        :rules="emailRules"
                      ></v-text-field>
                      <v-text-field
                        class="pb-4"
                        name="password"
                        label="Password"
                        id="password"
                        type="password"
                        required
                        v-model="user.password"
                        :rules="passwordRules"
                      ></v-text-field>
                      <v-select
                        :items="specialization"
                        name="specialization"
                        label="Specialization"
                        dense
                        required
                        v-model="user.spec"
                        :rules="[(v) => !!v || 'Specialization is required']"
                      ></v-select>
                      <v-menu
                        ref="menu"
                        v-model="menu"
                        :close-on-content-click="false"
                        :return-value.sync="date"
                        transition="scale-transition"
                        offset-y
                        min-width="auto"
                      >
                        <template v-slot:activator="{ on, attrs }">
                          <v-text-field
                            v-model="date"
                            label="Choose your birthdate"
                            prepend-icon="mdi-calendar"
                            readonly
                            v-bind="attrs"
                            v-on="on"
                          ></v-text-field>
                        </template>
                        <v-date-picker v-model="date" no-title scrollable>
                          <v-spacer></v-spacer>
                          <v-btn text color="primary" @click="menu = false">
                            Cancel
                          </v-btn>
                          <v-btn
                            text
                            color="primary"
                            @click="$refs.menu.save(date)"
                          >
                            OK
                          </v-btn>
                        </v-date-picker>
                      </v-menu>
                      <v-spacer></v-spacer>
                      <v-menu
                        ref="menu2"
                        v-model="menu2"
                        :close-on-content-click="false"
                        :return-value.sync="date2"
                        transition="scale-transition"
                        offset-y
                        min-width="auto"
                      >
                        <template v-slot:activator="{ on, attrs }">
                          <v-text-field
                            v-model="date2"
                            label="Choose your registreation year"
                            prepend-icon="mdi-calendar"
                            readonly
                            v-bind="attrs"
                            v-on="on"
                          ></v-text-field>
                        </template>
                        <v-date-picker v-model="date2" no-title scrollable>
                          <v-spacer></v-spacer>
                          <v-btn text color="primary" @click="menu2 = false">
                            Cancel
                          </v-btn>
                          <v-btn
                            text
                            color="primary"
                            @click="$refs.menu2.save(date2)"
                          >
                            OK
                          </v-btn>
                        </v-date-picker>
                      </v-menu>
                      <v-checkbox
                        v-model="checkbox"
                        style="margin: 0px; max-height: 50px"
                        :rules="[(v) => !!v || 'You must agree to continue!']"
                        label="Do you agree?"
                        required
                      >
                        <template v-slot:label>
                          <div>I agree to terms and condition</div>
                        </template>
                      </v-checkbox>
                    </v-form>
                    <v-btn
                      :disabled="!valid"
                      color="success"
                      class="mr-4"
                      @click="validate,registerUserInfo"
                    >
                      Sign Up
                    </v-btn>

                    <v-btn color="error" class="mr-4" @click="reset">
                      Reset Form
                    </v-btn>
                  </v-card-text>
                  <v-card-actions class="flex-column pt-0">
                    <v-spacer></v-spacer>
                  </v-card-actions>
                </v-card>
              </v-tab-item>
            </v-tabs>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "Home",
  components: {},
  data: () => ({
    user: {
        name: ''
      },
    valid: false,
    nameemail: "",
    nameemailRules: [
      (v) => !!v || "Username/Email is required",
      (v) => (v && v.length <= 20) || "Name must be less than 10 characters",
    ],
    name: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 20) || "Name must be less than 10 characters",
    ],
    password: "",
    passwordRules: [
      (v) => !!v || "Password is required",
      (v) => !(v && v.length <= 8) || "Password Must be 8 Charechters or More",
    ],
    specialization: ["ITE", "DU"],

    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    checkbox: false,
    date: new Date().toISOString().substr(0, 10),
    date2: new Date().toISOString().substr(0, 10),
    menu: false,
    menu2: false,
  }),
  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    registerUserInfo() {
      const self = this;
      const info = {
        name: self.user.name,
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
        .post("http://syberctf.hadara-group.com:8083/users/register", info)
        .then();
    },
  },
};
</script>

<style>
.Blured {
  backdrop-filter: blur(3px);
  background: rgba(255, 255, 255, 0.7);
}
.colortab {
  color: #43425d !important ;
}
.midcard {
  min-height: 400px;
}
.back {
  background-image: url("~@/assets/LoginBackground.jpeg");
  background-size: cover;
  width: 100%;
}

.blured {
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.7);
}
</style>