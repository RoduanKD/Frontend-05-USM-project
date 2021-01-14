<template>

  <div class="back fill-height">
    <v-container justify-center fluid fill-height >
        <v-row justify="center">
          <v-col cols="3" >
               <v-card > 
              <v-tabs  color="deep-purple accent-4" background-color="primary" left>
                <v-tab class="white--text">SIGN IN</v-tab>
                <v-tab class="white--text">SIGN UP</v-tab>
                <v-tab-item>
        
          <v-card class="mx-auto elevation-12 midcard " style=" backdrop-filter: blur(5px);
  background: rgba(255,255,255,.7)  ">
              <v-card-text>
                <v-form class="Pdtop">
                  <v-text-field name="login" label="Login" type="text" ></v-text-field>
                  <v-text-field name="password" label="Password" id="password" type="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions class="Flex"  >
                <v-spacer ></v-spacer>
                <v-btn   color="primary"  >Login</v-btn>
              </v-card-actions>
            </v-card>
      </v-tab-item>
              <v-tab-item>
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
  name: 'Home',
  components: {
    // HelloWorld
  },
  data: () => ({
    
  }),
}
</script>

<style>
.colortab {
  color:#43425D !important ;
}
.pdtop2{
  padding-top: 20px;
}
.Pdtop {
  padding-top: 65px;
}


.midcard{
  height: 500px;
  
}
.Flex{
  flex-direction: column;
  padding-top: 35px;
}

.back {
  background-image: url('~@/assets/LoginBackground.jpeg');
  background-size: cover;
  width: 100%;
 

}
</style>