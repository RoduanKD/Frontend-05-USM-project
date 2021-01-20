<template>
  <div>
    <v-chip
      class="ma-2"
      :input-value="getFilter('user')"
      @click="$store.commit('toggle', 'user')"
      filter
    >
      People</v-chip
    >
    <v-chip
      class="ma-2"
      :input-value="getFilter('post')"
      @click="$store.commit('toggle', 'post')"
      filter
    >
      Post</v-chip
    >
    <v-chip
      class="ma-2"
      :input-value="getFilter('board')"
      @click="$store.commit('toggle', 'board')"
      filter
    >
      Community</v-chip
    >
    <v-chip
      class="ma-2"
      :input-value="getFilter('community')"
      @click="$store.commit('toggle', 'community')"
      filter
    >
      Board</v-chip
    >
  </div>
</template>

<script>
export default {
  methods: {
    getFilter (target) {
      return this.$store.getters.searchPage(target)
    }
  }
}
</script>