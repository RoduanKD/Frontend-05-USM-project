<template>
  <div>
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
    <div class="adress">
     <b> Settings </b> 
    </div>
    <v-col class="edit-1"
        sm="4"
      >
        <v-text-field
          label="First Name"
          placeholder="first"
          v-model="fname"
          outlined
        ></v-text-field>
      </v-col>
      <v-col class="edit-2"
        sm="4"
      >
        <v-text-field
          label="Password"
          placeholder="********"
          outlined
          v-model="user.password"
        ></v-text-field>
      </v-col>
      <v-col class="edit-3"
        sm="4"
      >
        <v-text-field
          label="Specilaization"
          placeholder="specilaization"
          outlined
          v-model="user.spec"
        ></v-text-field>
      </v-col>
      <v-col class="edit-4"
        sm="4"
      >
        <v-text-field
          label="Registeration"
          placeholder="yyyy"
          outlined
          v-model="user.start_year"
        ></v-text-field>
        <v-btn @click="updateUserInfo">Update</v-btn>
      </v-col>
      <v-col class="edit-5"
        sm="4"
      >
        <v-text-field
          label="Last Name"
          placeholder="last"
          v-model="lname"
          outlined
        ></v-text-field>
      </v-col>
      <v-col class="edit-6"
        sm="4"
      >
        <v-text-field
          label="Email"
          placeholder="email@gmail.com"
          outlined
          v-model="user.email"
        ></v-text-field>
      </v-col>
      <v-col class="edit-7"
        sm="4"
      >
        <v-text-field
          label="Birthday"
          placeholder="DD/MM/YY"
          outlined
          v-model="user.age"
        ></v-text-field>
      </v-col>
      <v-col class="edit-8"
        sm="4"
      >
        <v-text-field
          label="Current Year"
          placeholder="yyyy"
          outlined
          v-model="user.study_year"
        ></v-text-field>
      </v-col>
      <v-img class="avatar"
      src="@/Avatar.png">
    </v-img>
    <div id="camera">
       <v-icon large class="camera-icon">
        mdi-camera-plus
      </v-icon>
      </div>
    <v-img class="butom"
      src="@/set.png">
    </v-img>
  </div>
</template>

<script>
export default {
  data: () => ({
    user: {
      name: ''
    },
    last: '',
    first: '',
  }),
  mounted () {
    const self = this

    self.getUserInfo()
  },
  methods: {
    updateUserInfo () {
      const self = this

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
        age: self.user.age
      }

      self.axios.post('http://syberctf.hadara-group.com:8083/users/update', info).then((res) => {
        alert('done')
        console.log(res)
      })
    },
    getUserInfo () {
      const self = this

      self.axios.get('http://syberctf.hadara-group.com:8083/users/search/a').then((res) => {
        self.user = res.data[0]
      })
    }
  },
  computed: {
    fname: { 
      get() { return this.user.name.split(' ')[0] },
      set(v) { this.first = v }
    },
    lname: { 
      get() { return this.user.name.split(' ')[1] },
      set(v) { this.last = v }
    },
  }
}
</script>

<style>
div.adress {
  font-size: 24px;
  position: absolute;
  top: 70px;
  left: 300px;
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
.butom {
  width: 600px;
  height: 350px;
  margin: 0 auto;
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.edit-1 {
  width: 340px;
  position: absolute;
  top: 105px;
}
.edit-2 {
  width: 340px;
  position: absolute;
  top: 170px;
}
.edit-3 {
  width: 340px;
  position: absolute;
  top: 235px;
}
.edit-4 {
  width: 340px;
  position: absolute;
  top: 300px;
}
.edit-5 {
  width: 340px;
  position: absolute;
  top: 105px; left: 350px;
}
.edit-6 {
  width: 340px;
  position: absolute;
  top: 170px; left: 350px;
}
.edit-7 {
  width: 340px;
  position: absolute;
  top: 235px; left: 350px;
}
.edit-8 {
  width: 340px;
  position: absolute;
  top: 300px; left: 350px;
}
.icon {
  position: relative;
  left: 270px;
  bottom: 70px;
}
.avatar {
  width: 200px;
  height: 200px;
  position: relative;
  left: 777px;
  top: -600px;
}
#camera {
  width: 80px;
  height: 80px;
  background: #F0F0F0;
  position: relative;
  left: 800px;
  top: -650px;
  border-radius: 50%;
}
.camera-icon {
  position: relative;
  left: 22px;
  top: 22px;
  color: #545871;
}
</style>