<template>
  <v-card :color="$vuetify.theme.dark ? 'lightblack' : 'primary'">
    <!-- start in toolbar -->
    <v-toolbar color="primary" dark>
      <v-toolbar-title>Boards</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn  @click="$router.push({ name: 'Search' })">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <template v-slot:extension>
        <v-tabs v-model="model" centered color="white" slider-color="white">
          <v-tab dark v-for="(item, i) in items" :key="item.id" :href="`#tab-${i}`">
            {{ item.name }}
          </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>
    <!-- end in toolbar -->

    <!-- srart in board tap -->
    <v-tabs-items v-model="model">
      <v-tab-item v-for="(item, i) in items" :key="i" :value="`tab-${i}`">
        <!-- start in hero -->
        <v-container  :color="$vuetify.theme.dark ? 'lightblack' : ' #EEE9F6'" :class="$vuetify.theme.dark ? '' : 'photo'">
          <div>
            <v-row align="center">
              <v-col cols="6">
                <v-img mt="-10" height="388px" src="../assets/about.png">
                </v-img>
              </v-col>
              <v-col cols="6"  >
                <h1   class="text-center text-primary">{{ item.description }}</h1>
                <h6  class="text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequatLorem ipsum
                  dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliquaLorem ipsum
                  dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliquaLorem ipsum
                  dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua.
                </h6>
              </v-col>
            </v-row>
          </div>
        </v-container>
        <!-- end in hero -->

        <!-- start in title -->
        <v-container>
          <h1   class="text-center">
            University LeaderShips
          </h1>
          <v-divider id="divi"></v-divider>
        </v-container>
        <!-- end in title -->

        <!-- start in slider -->
        <v-container>
          <v-carousel
            cycle
            height="300"
            hide-delimiter-background
            hide-delimiters
            show-arrows-on-hover
          >
            <v-carousel-item
              v-for="s in Math.ceil(leaders.length / slideSize)"
              :key="s"
            >
              <v-col cols="12">
                <v-row class="fill-height">
                  <v-col
                    v-for="leader in giveMeTheSlicedArray(s)"
                    :key="leader"
                    :cols="mini ? 6 : 3"
                  >
                    <v-hover v-slot="{ hover }">
                      <v-card color="secondary" class="mx-auto" max-width="360">
                        <v-img
                          :aspect-ratio="16 / 9"
                          src="~@/assets/team-1.png"
                          height="200px"
                        >
                          <v-expand-transition>
                            <div
                              v-if="hover"
                              class="d-flex transition-fast-in-fast-out black darken-2 v-card--reveal display-3 white--text"
                              style="height: 100%"
                            >
                              <v-btn dark color="primary"  @click="$router.push({ name: 'ChatRoom' })"> Chat </v-btn>
                            </div>
                          </v-expand-transition></v-img
                        >

                        <v-card-title> NOOUR </v-card-title>

                        <v-card-subtitle> COMPUTER ENG </v-card-subtitle>
                      </v-card>
                    </v-hover>
                  </v-col>
                </v-row>
              </v-col>
            </v-carousel-item>
          </v-carousel>
        </v-container>
        <!-- end in slider -->

        <!-- start in box -->
        <v-container v-if="item.scholarship ? item.scholarship.length : false">
          <!-- start in title2 -->
          <h1   class="text-center">
            Scholar <span style="color: #836ea9"> Ships</span>
          </h1>
          <v-divider id="divi"></v-divider>
          <!-- start in title2 -->
          <v-col cols="12">
            <v-row>
              <v-col v-for="(scholar, i) in item.scholarship" :key="i" cols="6">
                <v-hover close-delay="6" v-slot="{ hover }">
                  <v-sheet
                    :color="hover ? '#D4C8EB' : ''"
                    class="pa-4 hover-in-sheet"
                    :elevation="hover ? 14 : 2"
                    :class="{ 'on-hover': hover }"
                    height="400"
                    shaped
                  >
                    <h1 class="text-center">{{ scholar.title }}</h1>
                    <h3>
                      expiration date:
                      {{ scholar.expiredDate | moment("from", "now") }}
                    </h3>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Ad nam natus culpa debitis voluptate ab sequi iste rem
                      consequatur aperiam praesentium consequuntur illo, aliquam
                      saepe tenetur dolorem quo distinctio perspiciatis?
                    </p>
                    <v-img src="~@/assets/a.png"></v-img>
                  </v-sheet>
                </v-hover>
              </v-col>
              <!-- <v-col cols="6">
                <v-hover close-delay="6" v-slot="{ hover }">
                  <v-sheet
                    :color="hover ? '#FFCCCC' : ''"
                    class="pa-4 hover-in-sheet"
                    :elevation="hover ? 14 : 2"
                    :class="{ 'on-hover': hover }"
                    height="400"
                    shaped
                  >
                    <h1 class="text-center">hooland school</h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Odit voluptatibus iste totam officia? Delectus incidunt
                      nemo dolores fuga, est, ea quisquam facilis ut animi
                      iusto, adipisci quibusdam quae at vitae!
                    </p>
                    <v-img src="~@/assets/h.png"></v-img>
                  </v-sheet>
                </v-hover>
              </v-col> -->
            </v-row>
          </v-col>
        </v-container>
        <!-- end in box -->

        <!-- start in title3 -->
        <v-container>
          <h1  class="text-center">University Elites</h1>
          <v-divider id="divi"></v-divider>
        </v-container>
        <!-- end in title3 -->

        <!-- start in card in people -->
        <v-container>
          <v-hover close-delay="6" v-slot="{ hover }">
            <v-card
              class="mx-auto pa-4 hover-in-sheet"
              :elevation="hover ? 14 : 2"
              :class="{ 'on-hover': hover }"
              max-width="344"
            >
              <v-img src="~@/assets/sara.png" height="200px"></v-img>

              <v-card-title   class="justify-center">
                sara jack
              </v-card-title>

              <v-card-subtitle class="text-center"> GBA:100% </v-card-subtitle>

              <v-card-actions>
                <v-btn class="mx-auto" icon @click="show = !show">
                  <v-icon>{{
                    show ? "mdi-chevron-up" : "mdi-chevron-down"
                  }}</v-icon>
                </v-btn>
              </v-card-actions>

              <v-expand-transition>
                <div v-show="show">
                  <v-card-text> graduated from damas university </v-card-text>
                </div>
              </v-expand-transition>
            </v-card>
          </v-hover>
        </v-container>
        <!-- end in card in people -->

        <!-- start in fotters -->
        <v-container>
          <v-footer padless>
            <v-col class="text-center" cols="12">
              {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
            </v-col>
          </v-footer>
          <!-- end in fotters -->
        </v-container>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<style  scoped>
.photo {
  background-color: #EEE9F6 !important;
}
#divi {
  max-height: 200px !important;
  height: 3px;
  width: 150px !important;
  background-color: #b39ddb !important;
  margin: 0 auto !important;
}

.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
</style>


<script>
export default {
  data() {
    return {
      items: [],
      icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
      show: false,
      model: "tab-0",
      message:
        '<h1 style="color:#8D79B4;">"the place we call home inspires us to discover whats is next"</h1>',
      slides: [1, 2, 3, 4],
      leaders: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], // 10
    };
  },
  computed: {
    mini () {
      return this.$vuetify.breakpoint.mdAndDown;
    },
    slideSize () {
      return this.mini ? 2 : 4
    }
  },
  methods: {
    giveMeTheSlicedArray(s) {
      return this.leaders.slice((s - 1) * this.slideSize, (s - 1) * this.slideSize + this.slideSize);
    },
  },
  mounted() {
    const self = this;
    self.axios
      .get(`/boards/boardbyuserid/${self.$store.getters.authenticated.id}`)
      .then((res) => {
        self.items = res.data;
      });
  },
};
</script>