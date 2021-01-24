<template>
  <v-card flat>
    <!-- Light Mode / Dark Mode Section -->
    <div class="ma-4">
      <v-card class="d-flex justify-end mb-6" flat tile>
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
          dark
        ></v-text-field>
        <v-btn icon>
          <v-icon color="white" @click.prevent="activateSearch"
            >mdi-magnify</v-icon
          >
        </v-btn>
        <v-btn elevation="2" @click="loadMore">Show More</v-btn>
      </v-toolbar>

      <!-- Filter Section -->
      <search-filters></search-filters>

      <!-- Show Section -->

      <div>
        <div class="text-center d-flex pa-3 justify-center">
          <v-btn color="primary" class="mr-2" @click="all"> all </v-btn>
          <v-btn color="primary" @click="none"> none </v-btn>
        </div>

        <!--User Section -->
        <div class="text-center ma-2" v-if="loading['user']">
          <v-progress-circular
            indeterminate
            color="primary"
          ></v-progress-circular>
        </div>
        <v-container
          class="grey lighten-5"
          v-if="items.user.length || items.post.length || items.community.length || items.board.length"
        >
          <v-row no-gutters>
            <!----------------------------------------------------------------------------How to justify center------------------------------------------------------------------------------------->
            <v-col cols="11" justify-center sm="11">
              <v-expansion-panels class="Panel" v-model="panel" multiple>
                <!-- People Section -->
                <v-expansion-panel v-if="items.user.length">
                  <v-expansion-panel-header>People</v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-card
                      v-for="item in items.user.slice(x, y)"
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
                <v-expansion-panel v-if="items.post.length">
                  <v-expansion-panel-header>Post</v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-card
                      v-for="item in items.post.slice(x, y)"
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
                <v-expansion-panel v-if="items.board.length">
                  <v-expansion-panel-header>Boards</v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-card
                      v-for="item in items.board.slice(x, y)"
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
                <v-expansion-panel v-if="items.community.length">
                  <v-expansion-panel-header>Community</v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-card
                      v-for="item in items.community.slice(x, y)"
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
import SearchFilters from '@/components/search/SearchFilters.vue'
import pl from 'pluralize'

export default {
  name: "Home",
  components: {
    SearchFilters,
  },

  data: () => ({
    fab: false,

    keyword: "",

    colo: "",
    act: "margin-top: 200px",
    divColor: "red",

    x: "0",
    y: "5",

    panel: [],
    itemsCount: 4,

    loading: {
      user: false,
      post: false,
      board: false,
      community: false,
    },
    items: {
      user: [],
      post: [],
      board: [],
      community: [],
    },
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
      this.panel = [...Array(this.itemsCount).keys()].map((k, i) => i);
    },
    // Colapse all panel
    none() {
      this.panel = [];
    },

    activateSearch() {
      const self = this
      this.colo = "grey";
      this.act = "margin-top: 10px";
      const filters = ['user', 'board', 'community']

      filters.forEach(filter => {
        if (this.getFilter(filter) && this.keyword != "") {
          self.loading[filter] = true
          this.search(filter);
        }
      })
    },
    getFilter (target) {
      return this.$store.getters.searchPage(target)
    },
    // Fetching Data from The Server
    search (target) {
      const self = this

      self.axios
        .get(
          `/${target != 'community' ? pl(target) : target}/search/` + this.keyword
        )
        .then((res) => {
          self.items[target] = res.data
          self.loading[target] = false
        })
        .catch((error) => console.log(error));
    },
    loadMore() {
      this.y = this.y + 4;
    },
  },
};
</script>

<style >
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