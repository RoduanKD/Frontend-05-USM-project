import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    loggedIn: false,
    user: null,
    search: {
      user: true,
      post: true,
      board: true,
      community: true,
    }
  },
  getters: {
    searchPage: (state) => (target) => {
      return state.search[target]
    },
    authenticated: (state) => state.user
  },
  mutations: {
    login(state, user) {
      state.user = user
    },
    logout(state) {
      state.user = null
    },
    toggle(state, target) {
      state.search[target] = !state.search[target]
    }

  }
})

export default store