<template>
  <div class="back fill-height">
    <v-container justify-center fluid fill-height>
        <v-row justify="center">
          <v-col cols="8">
            <v-card class="mx-auto elevation-12 " >
              <v-toolbar dark color="primary">
                <v-toolbar-title>Efetue seu login</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field name="login" label="Login" type="text"></v-text-field>
                  <v-text-field name="password" label="Password" id="password" type="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary">Login</v-btn>
              </v-card-actions>
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

.back {
  background-image: url('~@/assets/LoginBackground.jpeg');
  background-size: cover;
  width: 100%;
  backdrop-filter: blur(5px);

}
</style>