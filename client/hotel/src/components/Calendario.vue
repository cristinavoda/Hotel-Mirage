<template>
  <div class="flex flex-col items-center">
    <label>Fecha Llegada</label>
    <input type="date" v-model="arrivalDate" class="border p-2"/>
    <label>Fecha Salida</label>
    <input type="date" v-model="departureDate" class="border p-2 mt-2"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arrivalDate: '',
      departureDate: ''
    }
  }
};
</script>
