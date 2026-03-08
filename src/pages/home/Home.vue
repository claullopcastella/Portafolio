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
        <img
        :src="iconoMenu1"
        alt="iconoMenu"
        class="w-16 h-16 cursor-pointer"
        @mouseenter="cambiarHover"
        @mouseleave="quitarHover"
        />
      </div>

      <div class="menu-items">
        <button class="menu-button">home</button>
        <button class="menu-button">about</button>
        <button class="menu-button">contact me!</button>
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
  font-family: "AlteHaasGroteskBold", sans-serif;
  font-size: 0.875rem;
  cursor: pointer;
  color: #0a0d1c;
  transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out
}

.menu-button:hover {
  color: #fff9d6;
  background-color: #0a0d1c;
  padding: 0.25rem 0.5rem;
  border-radius: 2px;
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