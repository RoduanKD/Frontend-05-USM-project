import Vue from 'vue'	

const EventBus = new Vue()	

export default {	

  install (Vue) {	
    Vue.prototype.$eventBus = EventBus	
  }	
}