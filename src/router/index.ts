import Audiovisuales from "@/pages/audiovisuales/Audiovisuales.vue";
import Contactame from "@/pages/contactame/Contactame.vue";
import Home from "@/pages/home/Home.vue";
import Juegomesa from "@/pages/juegomesa/Juegomesa.vue";
import Respuesta from "@/pages/respuesta/Respuesta.vue";
import Videojuego from "@/pages/videojuego/Videojuego.vue";
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
      path: '/audiovisuales',
      name: 'audiovisuales',
      component: Audiovisuales
    },    
    {
      path: '/contactame',
      name: 'contactame',
      component: Contactame
    },    
    {
      path: '/juegomesa',
      name: 'juegomesa',
      component: Juegomesa
    },    
    {
      path: '/indecision',
      name: 'indecision',
      component: Respuesta
    },    
    {
      path: '/videojuego',
      name: 'videojuego',
      component: Videojuego
    },
    {
      path: '/:patchMatch(.*)',
      redirect: '/'
    }
  ]
})