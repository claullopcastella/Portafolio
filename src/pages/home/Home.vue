<script lang="ts" setup>


</script>

<template>
  <div class="contenedor">
    <div class="contenido">
  <p class="parrafo-introduccion">
    Este párrafo usa Perfectly Nineties.
  </p>

  <p>
    Este párrafo usa la fuente por defecto.
  </p>
  </div>
  </div>
</template>

<style scoped>
.parrafo-introduccion {
  font-family: "perfectly-nineties-regular", sans-serif;
  font-size: 2.5rem;
  transition: font-size 0.3s ease-in-out;
}

.contenedor {
  width: 100%;
  padding: 0 10rem;
  box-sizing: border-box;
  margin: 2rem 0;
}

.contenido {
  margin: 0 auto;
}

@media (min-width: 1024px) {
  .parrafo-introduccion {
    font-size: 3rem;
  }

}
</style>