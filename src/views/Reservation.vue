<template>
  <div>
    <h1 class="text-2xl">Reservas</h1>
    <form class="mt-4">
      <div>
        <label for="name" class="block">Nombre</label>
        <input type="text" id="name" class="border p-2">
      </div>
      <div>
        <label for="name" class="block"> phone</label>
        <input type="text" id="phone" class="border p-2">
      </div>
      
      <div>
        <label for="email" class="block">Email</label>
        <input type="email" id="email" class="border p-2">
      </div>
      <div>
        <label for="email" class="block">Room type</label>
        <input type="email" id="email" class="border p-2">
      </div>
      

      <button type="submit" class="bg-blue-500 text-white p-2 mt-4">Enviar</button>

    </form>
  </div>
</template>

<script>
export default {
  name: 'Reservation',
};
</script>
