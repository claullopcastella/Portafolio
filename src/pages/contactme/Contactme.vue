<script lang="ts" setup>
import { ref, computed } from 'vue';

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

const mesActual = ref(new Date().getMonth());
const añoActual = ref(new Date().getFullYear());

const generarDiasMes = (mes: number, año: number) => {
  const totalDias = new Date(año, mes + 1, 0).getDate();
  return Array.from({ length: totalDias }, (_, i) => ({
    dia: i + 1,
    ocupado: Math.random() < 0.3
  }));
};

const diasDelMes = ref(generarDiasMes(mesActual.value, añoActual.value));

const nombreMes = computed(() =>
  new Date(añoActual.value, mesActual.value).toLocaleString('default', { month: 'long' })
);

const siguienteMes = () => {
  if (mesActual.value === 11) { mesActual.value = 0; añoActual.value += 1; }
  else mesActual.value += 1;
  diasDelMes.value = generarDiasMes(mesActual.value, añoActual.value);
};

const mesAnterior = () => {
  if (mesActual.value === 0) { mesActual.value = 11; añoActual.value -= 1; }
  else mesActual.value -= 1;
  diasDelMes.value = generarDiasMes(mesActual.value, añoActual.value);
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
        <input type="text" v-model="fechaSeleccionada" placeholder="Enter the hour" />

        <div class="button-wrapper">
          <img src="/imagenes/flechascal.png" class="flecha-cal" :class="{ active: fechaSeleccionada && horaSeleccionada }" />
          <button class="appointment-button" @click="reservarCita">
           Book appointment
          </button>
        </div>
      </div>

      <div class="calendario">
        <h2>Availability</h2>
        <div class="mes-navegacion">
          <button @click="mesAnterior">&lt;</button>
          <span>{{ nombreMes }} {{ añoActual }}</span>
          <button @click="siguienteMes">&gt;</button>
        </div>
        <div class="calendar-grid">
          <div
            v-for="dia in diasDelMes"
            :key="dia.dia"
            class="calendar-day"
            :class="{ ocupado: dia.ocupado, seleccionado: dia.dia === fechaSeleccionada }"
            @click="!dia.ocupado ? fechaSeleccionada = dia.dia : null"
          >
            {{ dia.dia }}
            <img v-if="dia.ocupado" src="/imagenes/no-disponible.png" class="no-disponible" />
          </div>
        </div>
      </div>

      

        <div class="bottom-contact">

        <div class="redes-sociales">
          <a href="https://www.instagram.com/claudllop/" target="_blank">
            <img src="/imagenes/instagram.png" alt="instagram" class="icon-small" />
             <span class="contact-item">@claudllopart</span>

          </a>
         
        </div>

          <div class="contact-info">
            <div class="contact-item">
              <img src="/imagenes/telefono.png" alt="Teléfono" class="icon-small">
              <span>+34 633 77 62 62</span>
            </div>
            <div class="contact-item">
              <img src="/imagenes/email.png" alt="Email" class="icon-small">
              <span>claudllopart@gmail.com</span>
            </div>
          </div>
        </div>



    </div>
  </div>
</template>

<style>

.redes-sociales a {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: #0a0307;
}

.bottom-contact {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-shrink: wrap;
  margin: 2rem 0;
  gap: 2rem;
}

.icon-small {
  width: clamp(25px, 3vw, 40px);
  height: auto;
  transition: transform 0.3s ease;
}

.redes-sociales .icon-small:hover {
  transform: scale(1.1);
}

.contact-info {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-family: "AlteHaasGroteskRegular", sans-serif;
  letter-spacing: -0.02em;
  transform: scaleY(1.2);
  font-size: 1rem;
  color: #0a0307;
}

.redes-sociales {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin: 2rem 0;
}

.red-social-icon {
  width: clamp(40px, 5vw, 60px);
  height: auto;
  transition: transform 0.3s ease;
  cursor: pointer;
}

.red-social-icon:hover {
  transform: scale(1.1);
}
.mes-navegacion button {
  background: none;
  border: none;
  font-family: "AlteHaasGroteskRegular", sans-serif;
  font-size: 1rem;
  color: #0a0307;
  cursor: pointer;
  padding: 0.25rem 0.5rem;
  border-radius: 999px;
  transition: transform 0.3s, background-color 0.3s, color 0.3s;
}

.mes-navegacion button:hover {
  animation: bounce 0.6s infinite alternate;
  background-color: #0a0307;
  color: #f9ecf5;
}
.contenedor {
  width: 100%;
  padding: 3rem 2rem;
  background-color: #f9ecf5;
  min-height: 100vh;
}

.mes-navegacion span {
  font-family: "AlteHaasGroteskRegular", sans-serif;
  letter-spacing: -0.02em;
  transform: scaleY(1.2);
  font-size: 1rem;
  color: #0a0307;
  text-transform: capitalize;
}

.nav-title {
  font-family: "AlteHaasGroteskBold", sans-serif;
  font-size: clamp(2.2rem, 6vw, 4.5rem);
  letter-spacing: -0.02em;
  transform: scaleY(1.2);
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
  letter-spacing: -0.02em;
  transform: scaleY(1.2);
}

.formulario input, .formulario select, .formulario button {
  display: block;
  width: 100%;
  margin-bottom: 1rem;
  padding: 0.5rem;
  font-size: 1rem;
  font-family: "AlteHaasGroteskRegular", sans-serif;
  letter-spacing: -0.02em;
  transform: scaleY(1.2);
  border-radius: 5px;
  border: 1px solid #0a0307;
  box-sizing: border-box;
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
  z-index: 10; 
}

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
  position: relative;
  z-index: 1; 
}

.appointment-button:hover {
  color: #f9ecf5;
  background-color: #0a0307;
}

.button-wrapper {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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

.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.5rem;
  margin-top: 1rem;
}

.calendar-day {
  position: relative;
  width: 100%;
  padding-top: 100%;
  background-color: #f9ecf5;
  border-radius: 5px;
  text-align: center;
  font-family: "AlteHaasGroteskRegular", sans-serif;
  color: #0a0307;
  cursor: pointer;
  transition: transform 0.2s, background-color 0.2s;
}

.calendar-day.ocupado {
  background-color: #e5d5e1;
  cursor: not-allowed;
}

.calendar-day.seleccionado {
  border: 2px solid #0a0307;
}

.no-disponible {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 60%;
  transform: translate(-50%, -50%);
  pointer-events: none;
}
</style>