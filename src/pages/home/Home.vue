<script lang="ts" setup>
import { ref } from 'vue';

interface Proyecto {
  id: number;
  nombre: string;
  imagen: string;
  link: string;
}

const imagenDefault = '/imagenes/Justin-Bieber-PNG.png';
const imagenHover = '/imagenes/Justin-Bieber-PNG-hover.png';
const iconoMenu1 = ref(imagenDefault);

const cambiarHover = () => {
  iconoMenu1.value = imagenHover;
}
const quitarHover = () => {
  iconoMenu1.value = imagenDefault;
}


const proyectos: Proyecto[] = [
  { id: 1, nombre: 'Proyecto 1', imagen: '/imagenes/proyecto1.png', link: '/proyecto1' },
  { id: 2, nombre: 'Proyecto 2', imagen: '/imagenes/proyecto2.png', link: '/proyecto2' },
  { id: 3, nombre: 'Proyecto 3', imagen: '/imagenes/proyecto3.png', link: '/proyecto3' },
  { id: 4, nombre: 'Proyecto 4', imagen: '/imagenes/proyecto4.png', link: '/proyecto4' },
  { id: 5, nombre: 'Proyecto 5', imagen: '/imagenes/proyecto5.png', link: '/proyecto5' }
  
];

const indiceCentral = ref(2);

const getStyle = (i: number) => {
  const offset = i - indiceCentral.value;
  const scale = Math.pow(0.8, Math.abs(offset));
  const zIndex = 100 - Math.abs(offset);
  const translateZ = -100 * offset;
  const translateX = offset * 60;
  return {
    transform: `translateX(${translateX}px) translateZ(${translateZ}px) scale(${scale})`,
    zIndex,
  };
};

const calcularTranslateX = () => {
  return 0;
};

const irA = (i: number) => {
  indiceCentral.value = i;
};

</script>












<template>

  <nav class="nav-bar fixed top-0 left-0 w-full z-50 px-4">

      <div class="nav-left">
        <div class="icon-wrapper">
        <img
        :src="iconoMenu1"
        alt="iconoMenu"
        class="w-16 h-16 cursor-pointer"
        @mouseenter="cambiarHover"
        @mouseleave="quitarHover"
        />
        <span class="icon-tooltip">hope you like my work! :)</span>
      </div>
      </div>

      <div class="menu-items">
        <router-link to="/" class="menu-button">home</router-link>
        <router-link to="/about" class="menu-button">about</router-link>
        <router-link to="/contactme" class="menu-button">contact me!</router-link>
      </div>

  </nav>

  <div class="contenedor">
    <div class="contenido">
      <div class="intro">

        <div class="w-full h-96 flex justify-center items-center perspective-container overflow-hidden">
          <div class="relative w-full h-full flex justify-center items-center">
            <div class="flex relative transition-all dration-500"
            :style="{ transform: `translateX(${calcularTranslateX()}px)` }">
              <div
              v-for="(proyecto, i) in proyectos"
              :key="proyecto.id"
              class="absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-500"
              >
                <img :src="proyecto.imagen"
                 :alt="proyecto.nombre"
                 class="rounded-lg shadow-lg w-48 md:w-64"
                 />
              </div>
            </div>
          </div>
        </div>


    </div>
    </div>
  </div>

</template>












<style>

.perspective-container {
  perspective: 1200px;
}

img {
  transition: transform 0.5s;
}

img:hover {
  transform: scale(1.05);
}

.icon-wrapper {
  position: relative;
  display: inline-block;
}

.icon-tooltip {
  position: absolute;
  top: 100%;
  left: 100%;
  margin-left: 0.25rem;
  font-size: 0.75rem;
  font-family: "AlteHaasGroteskBold", sans-serif;
  color: #0e0d0c;
  padding: 0;
  background: none;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
  white-space: nowrap;
}

.icon-wrapper:hover .icon-tooltip {
  opacity: 1;
  transform: translateY(0.25rem);
}

.nav-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #eae9e5;
  padding: 0.5rem 2rem;
}

.nav-left img {
  display: block;
}

.menu-items {
  display: flex;
  gap: 1rem;
}

@media (min-width: 768px) {
  .menu-items {
    gap: 2rem;
  }
}

@media (min-width: 1024px) {
  .menu-items {
    gap: 3rem;
  }
}

.menu-button {
  background: none;
  border: none;
  font-family: "AlteHaasGroteskBold", sans-serif;
  font-size: 0.875rem;
  cursor: pointer;
  color: #0e0d0c;
  padding: 0.25rem 0.5rem;
  border-radius: 999px;
  transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out
}

.menu-button:hover {
  color: #eae9e5;
  background-color: #0e0d0c;
}

.router-link-exact-active {
  color: #eae9e5;
  background-color: #0e0d0c;
  transition: all 0.25s ease;
}


.contenedor {
  width: 100%;
  padding: 13rem 2rem;
  box-sizing: border-box;
  background-color: #eae9e5;
  min-height: 100vh;
}

.contenido {
  margin: 0 auto;
  max-width: 1400px;
}

@media (min-width: 768px) {
  .contenedor {
    padding: 13rem 4rem;
  }
}

@media (min-width: 1024px) {
  .contenedor {
    padding: 13rem 6rem;
  }
  
}
</style>