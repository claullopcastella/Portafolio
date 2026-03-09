<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue';

const imagenDefault = '/imagenes/Justin-Bieber-PNG.png';
const imagenHover = '/imagenes/Justin-Bieber-PNG-hover.png';
const iconoMenu1 = ref(imagenDefault);

const cambiarHover = () => {
  iconoMenu1.value = imagenHover;
}
const quitarHover = () => {
  iconoMenu1.value = imagenDefault;
}

const imagenesAnimacion = [
  '/imagenes/rallajo.png',
  '/imagenes/rallajo2.png',
  '/imagenes/rallajo3.png'
];

const imagenActual = ref(imagenesAnimacion[0]);
let indice = 0;
let intervalo: any;

onMounted(() => {
  intervalo = setInterval(() => {
  indice = (indice + 1) % imagenesAnimacion.length;
  imagenActual.value = imagenesAnimacion[indice];
}, 400);
});

onUnmounted(() => {
  clearInterval(intervalo);
});

</script>












<template>

  <nav class="nav-bar fixed top-0 left-0 w-full z-50 px-4">

      <div class="nav-left">
        <div class="icon-wrapper">
        <img
        :src="iconoMenu1"
        alt="iconoMenu"
        class="cursor-pointer"
        @mouseenter="cambiarHover"
        @mouseleave="quitarHover"
        />
        <span class="icon-tooltip">hope you like my work! :)</span>
      </div>
      </div>

      <div class="menu-items">

        <router-link to="/" class="menu-button">home</router-link>
        <router-link to="/about" class="menu-button">about</router-link>

        <div class="contact-wrapper">
          <router-link to="/contactme" class="menu-button">contact me!</router-link>
          <img src="/imagenes/rallajo-circulo.png" class="contact-circle">
        </div>

      </div>

  </nav>

  <div class="contenedor">
    <div class="contenido">
      <div class="intro">
        <img :src="imagenActual" alt="animacion-centro">
      </div>
        <p>these are some of my projects</p>
        
        <div class="linea-wrapper">
          <img src="/imagenes/linea.png" class="linea-animada">
        </div>

    </div>
  </div>

</template>












<style>

.linea-wrapper {
  position: relative;
  width: 100%;
  height: 50px; /* fixed height to keep element visible */
  overflow: hidden;
  margin: 2rem 0;
}

.linea-animada {
  position: absolute;
  top: 50%;
  left: 0;
  max-height: 100%;
  width: auto;
  transform: translateX(-100%) translateY(-50%);
  animation: mover-linea 4s linear infinite;
}

@keyframes mover-linea {
  0% {
    transform: translateX(-100%) translateY(-50%);
  }
  100% {
    transform: translateX(100%) translateY(-50%);
  }
}

.contact-wrapper {
  position: relative;
  display: inline-block;
}

.contact-circle {
  position: absolute;
  top: 50%;
  left: 50%;
  width: clamp(80px, 120%, 180px);
  height: auto;
  transform: translate(-50%, -50%);
  pointer-events: none;
}

.intro {
  display: flex;
  justify-content: center;
  align-items: center;
}

.intro + p {
  font-family: "AlteHaasGroteskBold", sans-serif;
  font-size: 2rem;
  text-align: left;
  margin-top: 6rem;
  color: #0a0307;
  line-height: 1.6;
}

.animacion-centro {
  width: 220px;
  height: auto;
  transform: scale(0.5);
}

.icon-wrapper {
  position: relative;
  display: inline-block;
}

.icon-tooltip {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-30%, 6px);
  font-size: 0.75rem;
  font-family: "AlteHaasGroteskRegular", sans-serif;
  color: #0a0307;
  background: none;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
  white-space: nowrap;
}

.icon-wrapper:hover .icon-tooltip {
  opacity: 1;
  transform: translate(-30%, 10px);
}

.nav-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f9ecf5;
  padding: 0.1rem 2rem;
  border-bottom: 1px solid #0a0307;
}

.nav-left img {
  display: block;
  width: 40px;
  height: 40px;
}

.menu-items {
  display: flex;
  gap: 1rem;
}





.menu-button {
  background: none;
  border: none;
  font-family: "AlteHaasGroteskRegular", sans-serif;
  font-size: 0.875rem;
  cursor: pointer;
  color: #0a0307;
  padding: 0.25rem 0.5rem;
  border-radius: 999px;
  transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out
}

.menu-button:hover {
  color: #f9ecf5;
  background-color: #0a0307;
}

.router-link-exact-active {
  color: #f9ecf5;
  background-color: #0a0307;
  transition: all 0.25s ease;
}


.contenedor {
  width: 100%;
  padding: 3rem 2rem;
  box-sizing: border-box;
  background-color: #f9ecf5;
  min-height: 100vh;
}

.contenido {
  margin: 0 auto;
  max-width: 1400px;
}

@media (min-width: 768px) {

  .menu-items {
    gap: 2rem;
  }

  .contenedor {
    padding: 3rem 2rem;
  }
}

@media (min-width: 1024px) {

  .menu-items {
    gap: 3rem;
  }

  .contenedor {
    padding: 3rem 2rem;
  }
  
}
</style>