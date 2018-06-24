import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Blog from './components/Blog.vue'
import Account from './components/Account.vue'
import User from './components/User.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/blog', component: Blog },
  { path: '/account', component: Account },
  { path: '/', component: User }
]

const router = new VueRouter({
  routes
})

Vue.component('app-user', User)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
