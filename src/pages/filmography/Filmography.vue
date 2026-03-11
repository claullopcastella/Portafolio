<script lang="ts" setup>
import { ref, computed } from 'vue';

const iconoMenu1 = ref('/imagenes/Justin-Bieber-PNG.png');
const cambiarHover = () => { iconoMenu1.value = '/imagenes/Justin-Bieber-PNG-hover.png'; }
const quitarHover = () => { iconoMenu1.value = '/imagenes/Justin-Bieber-PNG.png'; }

const ilustraciones = [
  '/imagenes/ft1.jfif',
  '/imagenes/ft2.jfif',
  '/imagenes/ft3.jfif',
  '/imagenes/ft4.jfif'
];

const indiceCentral = ref(0);
const ampliar = ref(false);

const siguiente = () => {
  indiceCentral.value = (indiceCentral.value + 1) % ilustraciones.length;
};

const anterior = () => {
  indiceCentral.value = (indiceCentral.value - 1 + ilustraciones.length) % ilustraciones.length;
};

const irA = (i: number) => {
  indiceCentral.value = i;
  if (i === indiceCentral.value) ampliar.value = true;
};

const cerrar = () => {
  ampliar.value = false;
};

const posiciones = computed(() =>
  ilustraciones.map((_, i) => {
    let offset = i - indiceCentral.value;
    return {
      offset,
      scale: offset === 0 ? 1 : Math.max(0.5, 1 - Math.abs(offset) * 0.3),
      zIndex: offset === 0 ? 10 : 5 - Math.abs(offset),
      opacity: offset === 0 ? 1 : Math.max(0.5, 1 - Math.abs(offset) * 0.3)
    };
  })
);
</script>

<template>
  <nav class="nav-bar fixed top-0 left-0 w-full z-50 px-4">
    <div class="nav-left">
      <div class="icon-wrapper">
        <img :src="iconoMenu1" alt="iconoMenu" class="cursor-pointer" @mouseenter="cambiarHover" @mouseleave="quitarHover" />
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
    <div class="work-switch">
      <router-link to="/illustration" class="work-link">Illustration</router-link>
      <router-link to="/graphicdesign" class="work-link">Graphic Design</router-link>
      <router-link to="/filmography" class="work-link">Filmography</router-link>
    </div>

    <h1 class="nav-title">FILMOGRAPHY</h1>

    <div class="carousel-wrapper">
      <button class="arrow left" @click="anterior">
        <span class="arrow-shape"></span>
      </button>

      <div class="carousel">
        <div
          v-for="(img, i) in ilustraciones"
          :key="i"
          class="carousel-item"
          @click="irA(i)"
          v-bind:style="(() => {
            const pos = posiciones[i] || { offset: 0, scale: 0.7, zIndex: 5, opacity: 0.7 };
            return {
              transform: `translateX(${pos.offset * 180}px) scale(${pos.scale})`,
              zIndex: pos.zIndex,
              opacity: pos.opacity
            };
          })()"
        >
          <img :src="img" alt="filmografía" />
        </div>
      </div>

      <button class="arrow right" @click="siguiente">
        <span class="arrow-shape"></span>
      </button>
    </div>

    <div v-if="ampliar" class="lightbox" @click="cerrar">
      <img :src="ilustraciones[indiceCentral]" alt="ampliado" class="lightbox-img" />
    </div>
  </div>
</template>

<style>
.work-switch{
  position:absolute;
  top:60px;
  left:20px;
  right:20px;
  display:flex;
  justify-content:space-between;
  font-family:"AlteHaasGroteskRegular", sans-serif;
  font-size:0.85rem;
}

.work-link{
  text-decoration:none;
  color:#0a0307;
  padding:0.2rem 0.5rem;
  border-radius:999px;
  transition:0.3s;
}

.work-link:hover{
  background:#0a0307;
  color:#f9ecf5;
}

.work-link.router-link-active{
  background:#0a0307;
  color:#f9ecf5;
}

.contenedor {
  position: relative;
  width: 100%;
  padding: 6rem 2rem 3rem;
  box-sizing: border-box;
  background-color: #f9ecf5;
  min-height: 100vh;
}

.nav-title {
  font-family: "AlteHaasGroteskBold", sans-serif;
  font-size: clamp(2.2rem, 6vw, 4.5rem);
  letter-spacing: 0.1em;
  color: #0a0307;
  margin-top: 4rem;
  margin-bottom: 1rem;
  text-align: center;
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
  perspective: 1000px;
  height: 300px;
}

.carousel-item {
  position: absolute;
  cursor: pointer;
  transition: transform 0.5s ease, z-index 0.5s ease, opacity 0.5s ease;
}

.carousel-item img {
  display: block;
  max-width: 250px;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.3);
}

.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #f9ecf5;
  border: 1px solid #0a0307;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 20;
  transition: background 0.3s, transform 0.2s;
}

.arrow:hover {
  background: #e5d5e1;
  transform: translateY(-50%) scale(1.1);
}

.arrow-shape {
  position: relative;
  width: 12px;
  height: 5px;
}

.arrow-shape::before,
.arrow-shape::after {
  content: "";
  position: absolute;
  width: 12px;
  height: 1px;
  background: #0a0307;
  left: 0;
}

.arrow-shape::before {
  transform: rotate(25deg);
  top: 0;
}

.arrow-shape::after {
  transform: rotate(-25deg);
  bottom: 0;
}

.arrow.right .arrow-shape {
  transform: rotate(180deg);
}

.arrow.left { left: 10px; }
.arrow.right { right: 10px; }

.lightbox {
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(10,3,7,0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 50;
  cursor: pointer;
}

.lightbox-img {
  max-width: 80%;
  max-height: 80%;
  border-radius: 10px;
  box-shadow: 0 5px 25px rgba(0,0,0,0.5);
}
</style>