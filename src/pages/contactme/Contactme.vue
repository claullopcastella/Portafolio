<script lang="ts" setup>
import { ref } from 'vue';

const imagenDefault = '/imagenes/Justin-Bieber-PNG.png';
const imagenHover = '/imagenes/Justin-Bieber-PNG-hover.png';
const iconoMenu1 = ref(imagenDefault);

const cambiarHover = () => {
  iconoMenu1.value = imagenHover;
}
const quitarHover = () => {
  iconoMenu1.value = imagenDefault;
}

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

    </div>
    </div>
  </div>

</template>












<style>

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
  font-family: "AlteHaasGroteskRegular", sans-serif;
  color: #0a0d1c;
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
  background-color: #fff9d6;
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
  font-family: "AlteHaasGroteskRegular", sans-serif;
  font-size: 0.875rem;
  cursor: pointer;
  color: #0a0d1c;
  padding: 0.25rem 0.5rem;
  border-radius: 999px;
  transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out
}

.menu-button:hover {
  color: #fff9d6;
  background-color: #0a0d1c;
}

.router-link-exact-active {
  color: #fff9d6;
  background-color: #0a0d1c;
  transition: all 0.25s ease;
}


.contenedor {
  width: 100%;
  padding: 13rem 2rem;
  box-sizing: border-box;
  background-color: #fff9d6;
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