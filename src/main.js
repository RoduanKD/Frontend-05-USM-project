import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import './plugins/vue-axios'
import './plugins/vue-moment'
import EventBus from './plugins/event-bus'

Vue.use(EventBus)

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
