<template>
  <v-card flat>
<!-- Start of Test Section -->

<!-- End of Test Section -->
<!-- Light Mode / Dark Mode Section -->
<div class="ma-4">
   <v-card
      class="d-flex justify-end mb-6"
     
      flat
      tile
    >
      <v-tooltip v-if="!$vuetify.theme.dark" bottom>
        <template v-slot:activator="{ on }">
          <v-btn v-on="on" color="primary" small fab @click="darkMode">
            <v-icon class="mr-1">mdi-moon-waxing-crescent</v-icon>
          </v-btn>
        </template>
        <span>Dark Mode On</span>
      </v-tooltip>

      <v-tooltip v-else bottom>
        <template v-slot:activator="{ on }">
          <v-btn v-on="on" color="primary" small fab @click="darkMode">
            <v-icon color="yellow">mdi-white-balance-sunny</v-icon>
          </v-btn>
        </template>
        <span>Dark Mode Off</span>
      </v-tooltip>
   </v-card>
    </div>
    <!-- Back to Top button -->
    <v-btn
      v-scroll="onScroll"
      v-show="fab"
      fab
      dark
      fixed
      bottom
      right
      color="primary"
      @click="toTop"
    >
      <v-icon>mdi-arrow-up</v-icon>
    </v-btn>
    <v-card class="mx-auto" max-width="80%" :style="act">
      
      <!-- Seach Section -->
      <!------------------------------------------------------------------------- How to know how access the item input-43----------------------------------------------------->
      <v-toolbar flat color="primary" class="text-white">
        <v-text-field
          single-line
          label="search"
          v-model="keyword"
          color="white"
          v-on:keyup.enter="activateSearch"
        ></v-text-field>
        <v-btn icon>
          <v-icon color="white" @click.prevent="activateSearch"
            >mdi-magnify</v-icon
          >
        </v-btn>
        <v-btn elevation="2" @click="loadMore">Show More</v-btn>
      </v-toolbar>

      <!-- Filter Section -->

      <div>
        <v-chip
          class="ma-2"
          :input-value="userValue"
          @click="userValue = !userValue"
          filter
        >
          People</v-chip
        >
        <v-chip
          class="ma-2"
          :input-value="postValue"
          @click="postValue = !postValue"
          filter
        >
          Post</v-chip
        >
        <v-chip
          class="ma-2"
          :input-value="boardValue"
          @click="boardValue = !boardValue"
          filter
        >
          Community</v-chip
        >
        <v-chip
          class="ma-2"
          :input-value="communityValue"
          @click="communityValue = !communityValue"
          filter
        >
          Board</v-chip
        >
      </div>
      <!-- <tagSection ></tagSection> -->

      <!-- Show Section -->

      <div>
        <div class="text-center d-flex pa-3 justify-center">
          <v-btn color="primary" class="mr-2" @click="all"> all </v-btn>
          <v-btn color="primary" @click="none"> none </v-btn>
        </div>

        <!--User Section -->
        <div class="text-center ma-2" v-if="userLoading">
          <v-progress-circular
            indeterminate
            color="primary"
          ></v-progress-circular>
        </div>
        <v-container
          class="grey lighten-5"
          v-if="users.length || post.length || community.length || board.length"
        >
          <v-row no-gutters>
            <!----------------------------------------------------------------------------How to justify center------------------------------------------------------------------------------------->
            <v-col cols="11" justify-center sm="11">
              <v-expansion-panels class="Panel" v-model="panel" multiple>
                <!-- People Section -->
                <v-expansion-panel v-if="users.length">
                  <v-expansion-panel-header>People</v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-card
                      v-for="item in users.slice(x, y)"
                      :key="item.id"
                      width="90%"
                      class="mx-auto mt-3"
                    >
                      <v-list-item three-line>
                        <v-list-item-avatar color="primary">
                          <v-img :src="item.attach"></v-img>
                        </v-list-item-avatar>
                        <v-list-item-content>
                          <v-list-item-title class="pointer">
                            {{ item.name }}</v-list-item-title
                          >
                          <v-list-item-subtitle>{{
                            item.university
                          }}</v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>
                    </v-card>
                  </v-expansion-panel-content>
                </v-expansion-panel>
                <!-- Post Section -->
                <v-expansion-panel v-if="post.length">
                  <v-expansion-panel-header>Post</v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-card
                      v-for="item in post.slice(x, y)"
                      :key="item.id"
                      width="90%"
                      class="mx-auto mt-3"
                    >
                      <v-card-actions class="pa-5">
                        <v-list-item three-line>
                          <v-list-item-avatar color="primary">
                            <v-img
                              class="elevation-6"
                              alt=""
                              :src="item.userImage"
                            ></v-img>
                          </v-list-item-avatar>
                          <v-list-item-content>
                            <v-list-item-title
                              @click="$router.push({ name: 'Profile' })"
                              class="pointer"
                            >
                              {{ item.title }}</v-list-item-title
                            >
                            <v-list-item-subtitle>{{
                              item.created_at | moment("from", "now")
                            }}</v-list-item-subtitle>
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
                              <v-row align="center" justify="end">
                                <v-col cols="3">
                                  <v-icon color="red" class="mr-1">
                                    mdi-heart
                                  </v-icon>
                                  <span class="subheading mr-2">{{
                                    item.likeCount
                                  }}</span>
                                  <v-icon color="primary" class="mr-1">
                                    mdi-comment
                                  </v-icon>
                                  <span class="subheading">{{
                                    item.commentCount
                                  }}</span>
                                </v-col>
                              </v-row>
                            </v-card-actions>
                          </v-list-item-content>
                        </v-list-item>
                      </v-card-actions>
                    </v-card>
                  </v-expansion-panel-content>
                </v-expansion-panel>
                <!-- Board Section -->
                <v-expansion-panel v-if="board.length">
                  <v-expansion-panel-header>Boards</v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-card
                      v-for="item in board.slice(x, y)"
                      :key="item.id"
                      width="90%"
                      class="mx-auto mt-3"
                    >
                      <v-list-item three-line>
                        <v-list-item-avatar color="primary">
                          <v-img :src="item.image"></v-img>
                        </v-list-item-avatar>
                        <v-list-item-content>
                          <v-list-item-title
                            @click="$router.push({ name: 'Boards' })"
                            class="pointer"
                          >
                            {{ item.name }}</v-list-item-title
                          >
                          <v-list-item-subtitle>{{
                            item.description
                          }}</v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>
                    </v-card>
                  </v-expansion-panel-content>
                </v-expansion-panel>
                <!-- Community Section -->
                <v-expansion-panel v-if="community.length">
                  <v-expansion-panel-header>Community</v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-card
                      v-for="item in community.slice(x, y)"
                      :key="item.id"
                      width="90%"
                      class="mx-auto mt-3"
                    >
                      <v-list-item three-line>
                        <v-list-item-avatar color="primary">
                          <v-img :src="item.img"></v-img>
                        </v-list-item-avatar>
                        <v-list-item-content>
                          <v-list-item-title
                            @click="$router.push({ name: 'Community' })"
                            class="pointer"
                          >
                            {{ item.name }}</v-list-item-title
                          >
                          <v-list-item-subtitle>{{
                            item.description
                          }}</v-list-item-subtitle>
                          <v-list-item-subtitle>
                            <v-icon>mdi-account-outline</v-icon
                            >{{
                              item.users.length
                            }}
                            followers</v-list-item-subtitle
                          >
                        </v-list-item-content>
                      </v-list-item>
                    </v-card>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </v-card>
  </v-card>
</template>





<script>
// import tagSection from '@/components/searchComponents/tagSection';

export default {
  name: "Home",
  components: {
    // tagSection,
  },

  data: () => ({
    fab: false,

    keyword: "",
    users: [],
    post: [],
    community: [],
    board: [],

    colo: "",
    act: "margin-top: 200px",
    divColor: "red",

    x: "0",
    y: "5",

    panel: [],
    items: 4,

    userValue: true,
    postValue: true,
    boardValue: true,
    communityValue: true,
    userLoading: false,

    postLoading: false,
    boardLoading: false,
    communityLoading: false,

    //////////Start of test Section
    aaa:
      "dfgadfashfasdhfksjdfhkfhaskfjhskdfahsdkfashfjsfhkahdfk sgkjhdfgkjhdfgksj dfghksdf hgskfdgh sdkfgjhd kgjhfkasjd fhskdjfh skgjhdfg jkfdghkdj ghgrjkaehgk jashkasjfhk sjdfhaskdfjh kgjhdfk gjhgkjerhkjah kajwefh aksjdfh askjdfh skjdfh kasjdfhkasj dfhsdkjfhskjdfhas dkfjhgaerjkghrekjghghdfoivdn kdf ko pgsjgohdfgkjgkd fgdhfjgfdhg kjdfghkdjfg hdkfgjh 0iwfwiruweriu woierhw rj hskjf hskdfj hwkejfhrkjherkjghdkfj hkf lorem",

    ////////////////////////////End Of test Section
  }),

  methods: {
    //////////Start of test Section
    darkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
    ////////////////////////////End Of test Section

    //Back To top if scrolled
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 20;
    },
    toTop() {
      this.$vuetify.goTo(0);
    },

    //Open all panel
    all() {
      this.panel = [...Array(this.items).keys()].map((k, i) => i);
    },
    // Colapse all panel
    none() {
      this.panel = [];
    },

    activateSearch() {
      this.colo = "grey";
      this.act = "margin-top: 10px";

      if (this.userValue == true && this.keyword != "") {
        this.userLoading = true;
        this.checkUser();
      }
      if (this.postValue == true && this.keyword != "") {
        this.postLoading = true;
        this.checkPost();
      }
      if (this.boardValue == true && this.keyword != "") {
        this.boardLoading = true;
        this.checkBoard();
      }
      if (this.communityValue == true && this.keyword != "") {
        this.communityLoading = true;
        this.checkCommunity();
      }
    },

    // Fetching Data from The Server
    //////////////////////////////////////////////Can We Change it to a switch or make it simpler???
    checkUser() {
      this.axios
        .get(
          "http://syberctf.hadara-group.com:8083/users/search/" + this.keyword
        )
        .then((res) => {
          this.users = res.data;
          this.userLoading = false;
        })
        .catch((error) => console.log(error));
    },
    checkPost() {
      this.axios
        .get(
          // "http://syberctf.hadara-group.com:8083/posts/search/" + this.keyword
          "http://syberctf.hadara-group.com:8083/posts/getbestposts"
        )
        .then((res) => {
          this.post = res.data;
          this.postLoading = true;
        })
        .catch((error) => console.log(error));
    },
    checkBoard() {
      this.axios
        .get(
          "http://syberctf.hadara-group.com:8083/boards/search/" + this.keyword
        )
        .then((res) => {
          this.board = res.data;
          this.boardLoading = true;
        })
        .catch((error) => console.log(error));
    },
    checkCommunity() {
      this.axios
        .get(
          "http://syberctf.hadara-group.com:8083/community/search/" +
            this.keyword
        )
        .then((res) => {
          this.community = res.data;
          this.communityLoading = true;
        })
        .catch((error) => console.log(error));
    },
    loadMore() {
      this.y = this.y + 4;
    },
  },
};
</script>

<style>
.accent {
  position: relative;
  left: 40%;
}
.move {
  top: -238px;
  left: 480px;
}
.caps {
  color: white;
  border-color: 2px solid white;
}
#input-36 {
  color: white !important;
}
/* .Panel {
  width: 90% !important;
} */
.pointer {
  cursor: pointer;
}
</style>