import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

const instance = axios.create({
  baseURL: 'http://syberctf.hadara-group.com:8080',
  // baseURL: 'http://192.168.43.187:8080'
})

Vue.use(VueAxios, instance)