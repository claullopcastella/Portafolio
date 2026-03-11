<script lang="ts" setup>
import { ref } from 'vue';

const iconoMenu1 = ref('/imagenes/Justin-Bieber-PNG.png');
const cambiarHover = () => { iconoMenu1.value = '/imagenes/Justin-Bieber-PNG-hover.png'; }
const quitarHover = () => { iconoMenu1.value = '/imagenes/Justin-Bieber-PNG.png'; }

const fechaSeleccionada = ref('');
const horaSeleccionada = ref('');
const nombre = ref('');
const email = ref('');

const horasDisponibles = [
  '09:00', '10:00', '11:00', '12:00',
  '14:00', '15:00', '16:00', '17:00'
];

const reservarCita = () => {
  if (!fechaSeleccionada.value || !horaSeleccionada.value || !nombre.value || !email.value) {
    alert('Please fill all fields to continue!');
    return;
  }
  alert(`Appointment booked for ${nombre.value} on ${fechaSeleccionada.value} at ${horaSeleccionada.value}`);
  fechaSeleccionada.value = '';
  horaSeleccionada.value = '';
  nombre.value = '';
  email.value = '';
};
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
    <h1 class="nav-title">CONTACT ME!</h1>
    <div class="contact-grid">
      <div class="formulario">
        <h2>Book your appointment</h2>
        <input type="text" v-model="nombre" placeholder="Full name" />
        <input type="email" v-model="email" placeholder="Email" />
        <input type="date" v-model="fechaSeleccionada" />
        <select v-model="horaSeleccionada">
          <option disabled value="">Select a time</option>
          <option v-for="hora in horasDisponibles" :key="hora" :value="hora">{{ hora }}</option>
        </select>

        <div class="button-wrapper">
          <img src="/imagenes/flechascal.png" class="flecha-cal" :class="{ active: fechaSeleccionada && horaSeleccionada }" />
          <button class="appointment-button" @click="reservarCita">
           Book appointment
          </button>
        </div>
      </div>

      <div class="calendario">
        <h2>Availability</h2>
        <table>
          <thead>
            <tr><th>Time</th><th>State</th></tr>
          </thead>
          <tbody>
            <tr v-for="hora in horasDisponibles" :key="hora">
              <td>{{ hora }}</td>
              <td>{{ hora === horaSeleccionada && fechaSeleccionada ? 'Booked' : 'Available' }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style>
.appointment-button {
  background: none;
  border: none;
  font-family: "AlteHaasGroteskRegular", sans-serif;
  font-size: 0.875rem;
  cursor: pointer;
  color: #0a0307;
  padding: 0.35rem 0.7rem;
  border-radius: 999px;
  transition: color 0.3s, background-color 0.3s;
}

.appointment-button:hover {
  color: #f9ecf5;
  background-color: #0a0307;
}

.contenedor {
  width: 100%;
  padding: 3rem 2rem;
  background-color: #f9ecf5;
  min-height: 100vh;
}

.nav-title {
  font-family: "AlteHaasGroteskBold", sans-serif;
  font-size: clamp(2.2rem, 6vw, 4.5rem);
  color: #0a0307;
  margin-bottom: 2rem;
  text-align: center;
}

.contact-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  align-items: flex-start;
}

.formulario, .calendario {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  width: 100%;
  max-width: 450px;
}

.formulario h2, .calendario h2 {
  margin-bottom: 1rem;
  font-family: "AlteHaasGroteskBold", sans-serif;
  color: #0a0307;
}

.formulario input, .formulario select, .formulario button {
  display: block;
  width: 100%;
  margin-bottom: 1rem;
  padding: 0.5rem;
  font-size: 1rem;
  font-family: "AlteHaasGroteskRegular", sans-serif;
  border-radius: 5px;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

.button-wrapper {
  position: relative;
  width: 100%;
}

.flecha-cal {
  position: absolute;
  top: -40px;
  left: 50%;
  transform: translateX(-50%);
  width: 140%;
  height: auto;
  transition: transform 0.3s ease, opacity 0.3s ease;
  opacity: 0.7;
  pointer-events: none;
}

.button-wrapper:hover .flecha-cal,
.flecha-cal.active {
  animation: bounce 0.6s infinite alternate;
  opacity: 1;
}

@keyframes bounce {
  0%   { transform: translateX(-50%) translateY(0) scale(1.1); }
  50%  { transform: translateX(-50%) translateY(-8px) scale(1.1); }
  100% { transform: translateX(-50%) translateY(0) scale(1.1); }
}

.calendario table {
  width: 100%;
  border-collapse: collapse;
  font-family: "AlteHaasGroteskRegular", sans-serif;
}

.calendario th, .calendario td {
  padding: 0.5rem;
  text-align: center;
  border-bottom: 1px solid #ccc;
}

.calendario th {
  background-color: #f9ecf5;
  color: #0a0307;
  font-weight: bold;
}

.contact-wrapper {
  position: relative;
}

.contact-circle {
  position: absolute;
  top: 50%;
  left: 50%;
  width: clamp(80px, 10%, 180px);
  transform: translate(-50%, -50%);
  pointer-events: none;
}

.icon-wrapper {
  position: relative;
}

.icon-tooltip {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-30%, 6px);
  font-size: 0.75rem;
  color: #0a0307;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s, transform 0.3s;
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
  transition: color 0.3s, background-color 0.3s;
}

.menu-button.router-link-active {
  background-color: #0a0307; 
  color: #f9ecf5;
}

.menu-button:hover {
  color: #f9ecf5;
  background-color: #0a0307;
}
</style>