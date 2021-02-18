import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'


Vue.use(VueRouter)


Vue.config.productionTip = false

const routes=[

  {path:'/Home',component:Home},
  {path:'/About',component:About},
  {path:'/Contact',component:Contact}

]
const router= new VueRouter({
  routes,
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
