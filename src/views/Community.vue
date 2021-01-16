<template>
  <v-container>
    <v-row>
      <v-col cols="4" v-for="(item, i) in items" :key="item.id">
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
                item.value.length > 40
                  ? item.value.substr(0, 40) + " ..."
                  : item.value
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
      <v-dialog
        v-model="dialog"
        transition="dialog-bottom-transition"
        max-width="80%"
      >
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
              {{ item.value }}
            </div>
            <v-icon color="red" class="mr-1"> mdi-heart </v-icon>
            <span class="subheading mr-2">{{ item.likeCount }}</span>
            <v-icon color="primary" class="mr-1"> mdi-comment </v-icon>
            <span class="subheading">{{ item.commentCount }}</span>
            <v-list three-line>
              <template v-for="i in item.commentsInfo">
                <v-list-item :key="i.userName">
                  <!-- Backend should add avatar link -->
                  <!-- <v-list-item-avatar>
                      <v-img :src="item.avatar"></v-img>
                    </v-list-item-avatar> -->
                  <v-list-item-content>
                    <v-list-item-title v-html="i.userName"></v-list-item-title>
                    <v-list-item-subtitle
                      v-html="i.value"
                    ></v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </template>
            </v-list>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "Home",
  components: {
    // HelloWorld
  },
  data: () => ({
    items: [],
    item: {},
    dialog: false,
  }),
  mounted() {
    // Mr. Anas has to fix CORs problem here.

    const self = this;
    this.axios
      .get("http://syberctf.hadara-group.com:8083/posts/getbestposts")
      .then((res) => {
        self.items = res.data;
      });
  },
  methods: {
    openDialog(index) {
      this.item = this.items[index];
      this.dialog = true;
    },
  },
};
</script>

<style>
.community-card-avatar {
  position: relative;
  top: -49px;
  border: solid 3px #ffffff;
  background: #ffffff;
}
</style>