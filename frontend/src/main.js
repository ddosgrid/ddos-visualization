import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import VueMuuri from 'vue-muuri'
// You need a specific loader for CSS files like https://github.com/webpack/css-loader
import 'vue-muuri/dist/vue-muuri.css'

Vue.use(VueMaterial)
Vue.use(VueMuuri)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
