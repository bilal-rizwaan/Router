import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'
import Gallery from './components/Gallery.vue'

// Use Vue Router
Vue.use(VueRouter)


Vue.config.productionTip = false

//  link  Router
const routes=[
  {
    path:'/Home/:id/:age',
    props:true,
    component:Home
  },
  {
    path:'/About',
    component:About
  },
  {
    path:'/Contact',
    component:Contact
  },
    {path:'/Gallery',
    component:Gallery
  }
]
const router= new VueRouter({
  routes,
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
