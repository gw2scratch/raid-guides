import Vue from 'vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import App from './App.vue'
import VueRouter from 'vue-router'
import RaidGuideRoutes from '../../routes'

Vue.use(Buefy);
Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
  routes: RaidGuideRoutes.routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
