import About from "@/pages/about/About.vue";
import Contactme from "@/pages/contactme/Contactme.vue";
import Home from "@/pages/home/Home.vue";
import { createRouter, createWebHashHistory } from "vue-router";



export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),

  routes: [

    {
      path: '/',
      name: 'home',
      component: Home
    },    

    {
      path: '/about',
      name: 'about',
      component: About
    },  

    {
      path: '/contactme',
      name: 'contactme',
      component: Contactme
    }, 

    {
      path: '/:patchMatch(.*)',
      redirect: '/'
    }
  ]
})