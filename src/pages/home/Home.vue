<script lang="ts" setup>
import DropdownMenu from '@/components/ui/dropdown-menu/DropdownMenu.vue';
import DropdownMenuContent from '@/components/ui/dropdown-menu/DropdownMenuContent.vue';
import DropdownMenuItem from '@/components/ui/dropdown-menu/DropdownMenuItem.vue';
import DropdownMenuTrigger from '@/components/ui/dropdown-menu/DropdownMenuTrigger.vue';
import { ref } from 'vue';

const imagenDefault = '/imagenes/Justin-Bieber-PNG.png';
const imagenHover = '/imagenes/Justin-Bieber-PNG-hover.png';
const iconoMenu1 = ref(imagenDefault);

const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  section?.scrollIntoView({ behavior: 'smooth'});
};

</script>

<template>

  <div class="fixed top-4 left-4 z-50">
    <DropdownMenu>
      <DropdownMenuTrigger>
        <img
        :src="iconoMenu1"
        alt="iconoMenu"
        class="w-16 h-16 cursor-pointer block my-4 mx-5"
        @mouseenter="iconoMenu1 = imagenHover"
        @mouseleave="iconoMenu1 = imagenDefault"
        />
      </DropdownMenuTrigger>


    <DropdownMenuContent class="dropdown-tabla p-0">
      <DropdownMenuItem class="fuente-dropdown" @click="scrollToSection('inicio')">Home</DropdownMenuItem>
      <DropdownMenuItem class="fuente-dropdown" @click="scrollToSection('sobre-mi')">About</DropdownMenuItem>
      <DropdownMenuItem class="fuente-dropdown" @click="scrollToSection('proyectos')">Projects</DropdownMenuItem>
      <DropdownMenuItem class="fuente-dropdown" @click="scrollToSection('contacto')">Contact me!</DropdownMenuItem>

    </DropdownMenuContent>

    </DropdownMenu>

  </div>



  <div class="contenedor">
    <div class="contenido">
  <p class="parrafo-introduccion">
    Welcome to my
  </p>
  <p class="portfolio">
    portfolio
  </p>
  </div>
  </div>

  <section id="inicio" class="min-h-screen bg-gray-50"></section>
  <section id="sobre-mi" class="min-h-screen bg-gray-100"></section>
  <section id="proyectos" class="min-h-screen bg-gray-200"></section>
  <section id="contacto" class="min-h-screen bg-gray-300"></section>
</template>

<style>

.dropdown-tabla {
  border: 1px solid black;
  border-radius: 0 !important;
  box-shadow: none !important;
  overflow: hidden;
}

.fuente-dropdown {
  font-family: "RobotoMono-Light", sans-serif;
  font-size: 0.875rem;
  padding: 0.5rem 1rem;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  border-radius: 0;
}

.fuente-dropdown:hover {
  background-color: black;
  color: white;
  border-radius: 0 !important;
  transition: all 0.3s ease-in-out;
}

.parrafo-introduccion,
.portfolio {
  font-family: "RobotoMono-MediumItalic", sans-serif;
  transition: font-size 0.3s ease-in-out;
  margin: 0;
}

.parrafo-introduccion{
  font-size: 1.6rem;
}

.portfolio{
  font-size: 3rem;
  line-height: 1;
}

.contenedor {
  width: 100%;
  padding: 13rem 10rem;
  box-sizing: border-box;
}

.contenido {
  margin: 0 auto;
}

@media (min-width: 1024px) {
  .parrafo-introduccion{
    font-size: 2rem;
  }
  .portfolio{
    font-size: 3.4rem;
  }
}
</style>