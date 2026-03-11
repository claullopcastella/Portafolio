<script lang="ts" setup>
import { ref, computed } from 'vue';

const imagenDefault = '/imagenes/Justin-Bieber-PNG.png';
const imagenHover = '/imagenes/Justin-Bieber-PNG-hover.png';
const iconoMenu1 = ref(imagenDefault);

const cambiarHover = () => (iconoMenu1.value = imagenHover);
const quitarHover = () => (iconoMenu1.value = imagenDefault);

const ilustraciones = [
  '/imagenes/ilustracion1.jpg',
  '/imagenes/ilustracion2.png',
  '/imagenes/ilustracion3.jpg',
  '/imagenes/ilustracion4.jpg'
];

const indiceCentral = ref(0);

const siguiente = () => {
  indiceCentral.value = (indiceCentral.value + 1) % ilustraciones.length;
};

const anterior = () => {
  indiceCentral.value =
    (indiceCentral.value - 1 + ilustraciones.length) % ilustraciones.length;
};

const irA = (i: number) => {
  indiceCentral.value = i;
};

const posiciones = computed(() =>
  ilustraciones.map((_, i) => {
    const offset = i - indiceCentral.value;
    const scale = Math.max(0.5, 1 - Math.abs(offset) * 0.3);
    const zIndex = 10 - Math.abs(offset);
    const translateX = offset * 180;
    return { offset, scale, zIndex, translateX };
  })
);
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
        <img src="/imagenes/rallajo-circulo.png" class="contact-circle" />
      </div>
    </div>
  </nav>

  <div class="contenedor">
    <div class="contenido">
      <h1 class="nav-title">ILLUSTRATIONS</h1>

      <div class="carousel-wrapper">
        <button class="arrow left" @click="anterior">&#10094;</button>

        <div class="carousel">
          <div
            v-for="(img, i) in ilustraciones"
            :key="i"
            class="carousel-item"
            :style="{
              transform: `translateX(${posiciones[i]?.translateX}px) scale(${posiciones[i]?.scale})`,
              zIndex: posiciones[i]?.zIndex ?? 0
            }"
            @click="irA(i)"
          >
            <img :src="img" alt="ilustracion" />
          </div>
        </div>

        <button class="arrow right" @click="siguiente">&#10095;</button>
      </div>
    </div>
  </div>
</template>

<style>
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

.nav-title {
  font-family: "AlteHaasGroteskBold", sans-serif;
  font-size: clamp(2.2rem, 6vw, 4.5rem);
  letter-spacing: 0.1em;
  color: #0a0307;
  margin-bottom: 0.5rem;
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
  transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;
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

.carousel-wrapper {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
}

.carousel {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  perspective: 1200px;
  height: 350px;
}

.carousel-item {
  position: absolute;
  cursor: pointer;
  transition: transform 0.5s ease, z-index 0.5s ease;
}

.carousel-item img {
  display: block;
  max-width: 250px;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
}

.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 3rem;
  background: rgba(255, 255, 255, 0.6);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  z-index: 20;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #0a0307;
  transition: background 0.3s ease;
}

.arrow:hover {
  background: rgba(255, 255, 255, 0.9);
}

.arrow.left {
  left: 10px;
}

.arrow.right {
  right: 10px;
}
</style>