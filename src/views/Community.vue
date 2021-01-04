<template>
  <div class="home">
    <v-row>
      <v-col cols="4" v-for="item in items" :key="item.id">
        <v-card
          class="mx-auto"
        >
          <v-img
            class="white--text align-end"
            height="200px"
            :src="item.featured_image"
          >
          </v-img>
          <v-row>
            <v-col cols="8" class="pa-0">
              <v-card-title>{{ item.title }}</v-card-title>
            </v-col>
            <v-col cols="2" class="pa-0" max-width="98px">
              <v-avatar size="98" class="community-card-avatar">
              <img
                alt="user"
                src="https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg"
              >
            </v-avatar>
            </v-col>
          </v-row>
      
          <v-card-subtitle class="pb-0">
            {{ item.since }}
          </v-card-subtitle>
      
          <v-card-text class="text--primary">
            <div>
              {{ item.content }}
            </div>
          </v-card-text>
      
          <v-card-actions>
            <v-btn
              color="primary"
              text
            >
              Read More
            </v-btn>
      
            <v-btn
              color="orange"
              text
            >
              Explore
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
  },
  data: () => ({
    items: [{
      title: 'Top 10 Australian beaches',
      content: `As the new year beginning we are more than glad to
announce about our new Registration system 
to register for the new year in our university 
Please follow this steps :
1.visit the student...
`,
      featured_image: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
      user_avatar: 'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light',
      since: '5 Mins Ago'
    }],
  })
}
</script>

<style>
.community-card-avatar {
  position: relative;
  top: -49px;
}
</style>