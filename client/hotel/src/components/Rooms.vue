<template>
  <div class="flex flex-col items-center mt-4">
    <label>Habitaciones</label>
    <select v-model="roomType" class="border p-2 mt-2">
      <option value="standar">Estándar</option>
      <option value="doble">Doble</option>
      <option value="triple">Triple</option>
      <option value="individual">Individual</option>
      <option value="suite">Suite</option>
    </select>
    <button @click="reserve" class="bg-blue-500 text-white p-2 mt-4">Reservar</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      roomType: 'standar'
    }
  },
  methods: {
    reserve() {
      // Aquí se manejará la lógica de reserva
    }
  }
};
</script>
