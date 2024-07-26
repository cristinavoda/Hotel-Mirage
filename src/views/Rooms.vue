<template>
  <div>
    <h1 class="text-2xl">Rooms</h1>
  </div>
  <form class="mt-4">
      <div>
        <label for="name" class="block">Habitacion individual</label>
        <input type="text" id="name" class="border p-2">
      </div>
      <div>
        <label for="name" class="block"> Habitacion doble</label>
        <input type="text" id="phone" class="border p-2">
      </div>
      
      <div>
        <label for="email" class="block">Habitacion triple</label>
        <input type="email" id="email" class="border p-2">
      </div>
      <div>
        <label for="email" class="block">Suite</label>
        <input type="email" id="email" class="border p-2">
      </div>
</template>

<script>
export default {
  name: 'Rooms',
};
</script>
