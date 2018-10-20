// Components Imports
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuetify from 'vuetify'

// CSS Imports
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.config.productionTip = false

Vue.use(Vuetify)

new Vue({
  router,
  Vuetify,
  render: h => h(App)
}).$mount('#app')
