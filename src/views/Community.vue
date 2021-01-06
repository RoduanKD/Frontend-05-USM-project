<template>
    <v-row>
      <v-col cols="4" v-for="item in items" :key="item.id">
        <v-card
          class="mx-auto"
        >
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
              <img
                alt="user"
                :src="item.userImage"
              >
            </v-avatar>
            </v-col>
          </v-row>
      
          <v-card-text class="text--primary">
            <div>
              {{ item.value }}
            </div>
          </v-card-text>
      
          <v-card-actions>
            <v-btn
              color="primary"
              text
            >
              Read More
            </v-btn>
            <v-row
              align="center"
              justify="end"
            >
            <v-col cols="6">
              <v-icon color="red" class="mr-1">
                mdi-heart
              </v-icon>
              <span class="subheading mr-2">{{ item.likeCount }}</span>
              <v-icon color="primary" class="mr-1">
                mdi-comment
              </v-icon>
              <span class="subheading">{{ item.commentCount }}</span>
            </v-col>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
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
    items: [
      {
        id: 1,
        attach: "https://hamzashatela.com/wp-content/uploads/2017/11/8-Tips-to-Make-Your-Posts-Thumbnail-Suck-Less.jpg",
        rate: 0,
        communityModel: null,
        value: "This is a test post for prototyping, we are waiting for actual content ...",
        userImage: "https://avatars0.githubusercontent.com/u/9064066?v=4&s=460",
        userWhoMakeLike: [
          {
            id: 1,
            name: "anas",
            email: "anas@anas",
            password: "123",
            specilauis: "ite",
            university: "fas",
            img: "test",
            community_name: "ite",
            study_year: 2020,
            start_year: "2020-12-22T14:22:43.000+00:00",
            age: "2020-12-01T17:16:16.000+00:00"
          },
          {
            id: 2,
            name: "fadi",
            email: "fadi@fadi",
            password: "password",
            specilauis: "arabic",
            university: "asd",
            img: "test",
            community_name: "arabic",
            study_year: 2020,
            start_year: "2020-12-02T17:19:29.000+00:00",
            age: "2020-12-02T17:19:29.000+00:00"
          }
        ],
        commentsInfo: [
          {
            value: "val",
            userName: "anas"
          },
          {
            value: "value",
            userName: "fadi"
          },
          {
            value: "This is a test post for prototyping, we are waiting for actual content ...",
            userName: "fadi"
          }
        ],
        likeCount: 2,
        commentCount: 3,
        title: "test",
        created_at: "2020-12-09T17:20:32.000+00:00"
      },
      {
        id: 2,
        attach: "https://hamzashatela.com/wp-content/uploads/2017/11/8-Tips-to-Make-Your-Posts-Thumbnail-Suck-Less.jpg",
        rate: 0,
        communityModel: null,
        value: "This is a test post for prototyping, we are waiting for actual content ...",
        userImage: "https://avatars0.githubusercontent.com/u/9064066?v=4&s=460",
        userWhoMakeLike: [
          {
            id: 1,
            name: "anas",
            email: "anas@anas",
            password: "123",
            specilauis: "ite",
            university: "fas",
            img: "test",
            community_name: "ite",
            study_year: 2020,
            start_year: "2020-12-22T14:22:43.000+00:00",
            age: "2020-12-01T17:16:16.000+00:00"
          },
          {
            id: 2,
            name: "fadi",
            email: "fadi@fadi",
            password: "password",
            specilauis: "arabic",
            university: "asd",
            img: "test",
            community_name: "arabic",
            study_year: 2020,
            start_year: "2020-12-02T17:19:29.000+00:00",
            age: "2020-12-02T17:19:29.000+00:00"
          }
        ],
        commentsInfo: [
          {
            value: "val",
            userName: "anas"
          },
          {
            value: "value",
            userName: "fadi"
          },
          {
            value: "This is a test post for prototyping, we are waiting for actual content ...",
            userName: "fadi"
          }
        ],
        likeCount: 2,
        commentCount: 3,
        title: "test",
        created_at: "2020-12-09T17:20:32.000+00:00"
      },
      {
        id: 3,
        attach: "https://hamzashatela.com/wp-content/uploads/2017/11/8-Tips-to-Make-Your-Posts-Thumbnail-Suck-Less.jpg",
        rate: 0,
        communityModel: null,
        value: "This is a test post for prototyping, we are waiting for actual content ...",
        userImage: "https://avatars0.githubusercontent.com/u/9064066?v=4&s=460",
        userWhoMakeLike: [
          {
            id: 1,
            name: "anas",
            email: "anas@anas",
            password: "123",
            specilauis: "ite",
            university: "fas",
            img: "test",
            community_name: "ite",
            study_year: 2020,
            start_year: "2020-12-22T14:22:43.000+00:00",
            age: "2020-12-01T17:16:16.000+00:00"
          },
          {
            id: 2,
            name: "fadi",
            email: "fadi@fadi",
            password: "password",
            specilauis: "arabic",
            university: "asd",
            img: "test",
            community_name: "arabic",
            study_year: 2020,
            start_year: "2020-12-02T17:19:29.000+00:00",
            age: "2020-12-02T17:19:29.000+00:00"
          }
        ],
        commentsInfo: [
          {
            value: "val",
            userName: "anas"
          },
          {
            value: "value",
            userName: "fadi"
          },
          {
            value: "This is a test post for prototyping, we are waiting for actual content ...",
            userName: "fadi"
          }
        ],
        likeCount: 2,
        commentCount: 3,
        title: "test",
        created_at: "2020-12-09T17:20:32.000+00:00"
      },
    ],
  }),
  mounted () {
    // Mr. Anas has to fix CORs problem here.

    // const self = this
    // this.axios.get('http://syberctf.hadara-group.com:8083/posts/getbestposts').then((res) => {
    //   self.items = res.data
    // })
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