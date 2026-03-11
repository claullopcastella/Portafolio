import About from "@/pages/about/About.vue";
import Contactme from "@/pages/contactme/Contactme.vue";
import Home from "@/pages/home/Home.vue";
import Illustration from "@/pages/illustration/Illustration.vue";
import Graphicdesign from "@/pages/graphicdesign/Graphicdesign.vue";
import Filmography from "@/pages/filmography/Filmography.vue";

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
      path: '/illustration',
      name: 'illustration',
      component: Illustration
    }, 
    {
      path: '/graphicdesign',
      name: 'graphicdesign',
      component: Graphicdesign
    }, 

    {
      path: '/filmography',
      name: 'filmography',
      component: Filmography
    }, 

    {
      path: '/:patchMatch(.*)',
      redirect: '/'
    }
  ]
})