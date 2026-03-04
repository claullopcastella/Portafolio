<script lang="ts" setup>


</script>

<template>
  <div class="contenedor">
    <div class="contenido">
  <p class="parrafo-introduccion">
    Welcome to my
  </p>
  <p class="portfolio">
    portfolio !
  </p>
  </div>
  </div>
</template>

<style scoped>
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