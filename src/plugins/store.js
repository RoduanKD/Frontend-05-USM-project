import Vue from 'vue'	
import Vuex from 'vuex'	

Vue.use(Vuex)	

const store = new Vuex.Store({	
  state: {	
    loggedIn: false,
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
    }
  },
  mutations: {	
    login (state) {	
      state.loggedIn = true	
    },	
    logout (state) {	
      state.loggedIn = false	
    },
    toggle(state, target) {
      state.search[target] = !state.search[target]
    }

  }	
})	

export default store