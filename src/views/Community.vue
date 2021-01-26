<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6" md="4" v-for="(item, i) in items" :key="item.id">
        <v-card class="mx-auto">
          <v-img
            class="white--text align-end"
            height="200px"
            :src="item.attach"
          >
          </v-img>
          <v-row class="ma-0">
            <v-col cols="8" class="pa-0">
              <v-card-title>{{ item.title }}</v-card-title>
              <v-card-subtitle class="pb-0">
                {{ item.created_at | moment("from", "now") }}
              </v-card-subtitle>
            </v-col>
            <v-col cols="2" class="pa-0" max-width="98px">
              <v-avatar size="98" class="community-card-avatar">
                <img alt="user" :src="item.userImage" />
              </v-avatar>
            </v-col>
          </v-row>

          <v-card-text class="text--primary">
            <div>
              {{
                item.value ? 
                (item.value.length > 40
                  ? item.value.substr(0, 40) + " ..."
                  : item.value) : ''
              }}
            </div>
          </v-card-text>

          <v-card-actions>
            <v-btn color="orange" text @click="openDialog(i)">
              Read More
            </v-btn>
            <v-row align="center" justify="end">
              <v-col cols="6">
                <v-icon color="red" class="mr-1"> mdi-heart </v-icon>
                <span class="subheading mr-2">{{ item.likeCount }}</span>
                <v-icon color="primary" class="mr-1"> mdi-comment </v-icon>
                <span class="subheading">{{ item.commentCount }}</span>
              </v-col>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-col>
      <post-details-dialog :post="item"></post-details-dialog>
      <v-dialog
      v-model="addDialog"
      persistent
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
        color="primary"
        elevation="2"
        fab
        fixed
        bottom
        right
        v-bind="attrs"
        v-on="on"
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Add New Post</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="5"
              >
                <v-text-field
                  label="Post Title*"
                  v-model="post.title"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="7"
              >
                <v-text-field
                  v-model="post.attach"
                  label="Post Image"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-textarea
                  v-model="post.value"
                  label="Post Content*"
                  required
                ></v-textarea>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary darken-1"
            text
            @click="addDialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="orange darken-1"
            text
            @click="savePost"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
import PostDetailsDialog from '@/components/PostDetailsDialog.vue'

export default {
  name: "Home",
  components: {
    PostDetailsDialog
  },
  data: () => ({
    items: [],
    item: {},
    dialog: false,
    addDialog: false,
    post: {}
  }),
  mounted() {
    const self = this
    
    self.fetchPosts()
  },
  methods: {
    fetchPosts () {
      const self = this
      self.axios.get(`/posts/getallposts/${self.$store.getters.authenticated.id}`).then((res) => {
        self.items = res.data
      })
    },
    openDialog (index) {
      this.item = this.items[index]
      this.$eventBus.$emit('TOGGLE_DIALOG')
    },
    savePost () {
      const self = this

      self.axios.post(`/posts/add/${self.$store.getters.authenticated.id}`, self.post).then(() => {
        self.addDialog = false
        self.fetchPosts()
      })
      .catch(() => {
        alert('something went wrong')
      })
    }
  }
}
</script>

<style>
.community-card-avatar {
  position: relative;
  top: -49px;
  border: solid 3px #ffffff;
  background: #ffffff;
}
</style>