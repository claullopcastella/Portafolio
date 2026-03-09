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

const botones = Array(6).fill(0).map((_, i) => ({
  id: i,
  imagen: '/imagenes/post-it-1.png',
  hoverImagen: '/imagenes/post-it-2.png',
  current: ref('/imagenes/post-it-1.png')
}));

const mouseEnter = (boton: any) => {
  boton.current.value = boton.hoverImagen;
}
const mouseLeave = (boton: any) => {
  boton.current.value = boton.imagen;
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
        <p class="intro-text">nice to meet you, my name is Claudia, a soon to be illustrator</p>
       
       <picture class="hero-picture">
        <source srcset="/imagenes/de-hecho-yo.png"
        alt="yo"
        class="hero-image"
        >

        <img src="/imagenes/de-hecho-yo.png" 
        alt="yo"
        class="hero-image"
        >
       </picture>
    </div>


    <div class="postit-grid">
      <div
      v-for="boton in botones"
      :key="boton.id"
      class="postit-button"
      @mouseenter="mouseEnter(boton)"
      @mouseleave="mouseLeave(boton)"
      >
    
      <img :src="boton.current.value" alt="post-it">

    </div>
    </div>

    </div>
  </div>

</template>












<style>

.postit-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 2rem;
  justify-content: center;
  margin: auto;
}

.postit-button img {
  width: 100%;
  max-width: 150px;
  height: auto;
  transition: all 0.3s ease;
  display: block;
  cursor: pointer;
  margin: auto;
}

@media (min-width: 768px) {
  .postit-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    justify-content: center;
  }
  .postit-button img {
    max-width: 180px;
  }
}

.intro {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: clamp(4rem, 10vw, 8rem) clamp(2rem, 5vw, 6rem);
  text-align: left;
  align-items: center;
  transition: padding 0.3s ease, gap 0.3s ease;
  margin: auto;
}

.hero-picture img {
  width: 100%;
  max-width: 200px;
  height: auto;
  transition: all 0.3s ease;
  display: block;  
  margin: auto;
}

.intro > * {
  width: 100%;
  max-width: 400px;
  transition: all 0.3s ease;
}

.hero-image {
  width: 100%;
  max-width: 200px;
  height: auto;
}

.intro-text {
  font-family: "AlteHaasGroteskBold", sans-serif;
  font-size: 1rem;
  color: #0a0d1c;
  max-width: 150px;
  line-height: 1.4;
  margin: auto;
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
  .intro {
    padding: clamp(6rem, 8vw, 10rem) clamp(3rem, 6vw, 8rem);
  }
  .hero-picture img {
    max-width: 300px;
  }
}

@media (min-width: 1024px) {
  .intro {
    padding: clamp(6rem, 8vw, 10rem) clamp(4rem, 8vw, 10rem);
  }
}



.menu-button {
  background: none;
  border: none;
  font-family: "AlteHaasGroteskBold", sans-serif;
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
  padding: 3rem 2rem;
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
    padding: 10rem 4rem;
  }
}

@media (min-width: 1024px) {
  .contenedor {
    padding: 8rem 6rem;
  }
  
}
</style>