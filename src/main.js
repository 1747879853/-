// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import axios from 'axios'
import Vuex from 'vuex'
// import VideoPlayer from 'vue-video-player'
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
 //if (process.env.NODE_ENV !== 'production') require('@/mock')
// Vue.use(VideoPlayer)
//Vue.prototype.$http = axios
Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.use(iView)
Vue.use(Vuex)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
