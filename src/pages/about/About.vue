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

const titulo = ref("THE ARTIST")

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
        <h1 class="nav-title">{{  titulo  }}</h1>

        <hr class="dashed-line">
        <p class="main-line">CLAU</p>
        <hr class="dashed-line">

        <p class="main-line">BIRTHDAY:</p>
        <p class="main-line">STAR SIGN:</p>
        <p class="main-line">ART-STYLE:</p>
        <p class="main-line">QUALITIES:</p>
        <p class="main-line">WORK-METHOD:</p>

        <hr class="dashed-line">
        <p class="sub-line">Real name:</p>
        <hr class="dashed-line">

        <p class="sub-line">Specialty:</p>
        <hr class="dashed-line">

        <p class="sub-line">Hometown:</p>
        <hr class="dashed-line">

        <p class="sub-line">Student at:</p>
        <hr class="dashed-line">

        <p class="sub-line">Previous studies:</p>
        <hr class="dashed-line">

        <p class="sub-line">Favorite cartoon:</p>
        <hr class="dashed-line">

      <div class="intro">
    </div>
    </div>
  </div>

</template>












<style>
.main-line {
  font-family: "AlteHaasGroteskBold", sans-serif;
  font-size: clamp(1rem, 2.5vw, 1.5rem);
  letter-spacing: 0.1em;
  color: #0a0307;
  margin: 0.5rem 0;
}

.sub-line {
  font-family: "AlteHaasGroteskRegular", sans-serif;
  font-size: clamp(1rem, 2.5vw, 1.5rem);
  color: #0a0307;
  margin: 1.5rem 0 0.1rem 0;
}

.dashed-line {
  border: none;
  height: 1.5px;
  background-image: repeating-linear-gradient(
    to right,
    #0a0307 0%,
    #0a0307 2%,
    transparent 2%,
    transparent 4%
  );
  margin: 0.5rem 0 0.5rem 0;
}

.nav-title {
  font-family: "AlteHaasGroteskBold", sans-serif;
  font-size: clamp(2.2rem, 6vw, 4.5rem);
  letter-spacing: 0.1em;
  color: #0a0307;
  margin-bottom: 0.5rem;
}

.contact-wrapper {
  position: relative;
  display: inline-block;
}

.contact-circle {
  position: absolute;
  top: 50%;
  left: 50%;
  width: clamp(80px, 10%, 180px);
  height: auto;
  transform: translate(-50%, -50%);
  pointer-events: none;
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
  padding: 7rem 0 3rem 0;
  background-color: #f9ecf5;
  min-height: 100vh;
}

.contenido {
  margin: 0 auto;
  width: min(90%, 1100px);
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
</style>