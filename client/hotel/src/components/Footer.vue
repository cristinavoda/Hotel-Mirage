<template>
  <footer class="bg-gray-800 p-4 text-white mt-10">
    < class="flex justify-around">
      <div>
        <h1>Contacto</h1>
        <p>Tel: 0034 645 987 032</p>
        <p>Email: info@miragehotel.com</p>
      </div>

      <div>
        <h2>Dirección</h2>
        <p>Calle Terra Nova no 27</p>
        <p>Peñíscola, Spain</p>
      </div>
    
    <div class="mt-4"><h3>Galería</h3></div>

      <div class="flex overflow-x-scroll">
        <img v-for="image in images" :src="image" class="h-32 w-32 object-cover m-1" />
      </div>
   
  </footer>
</template>

<script>
export default {
  data() {
    return {
      images: [
        require('..54968400.jpg'),
        require('../4230334682.jpg'),
        require('../420335241.jpg'),
        require('../420353376.jpg'),
        require('../556952573.jpg'),
        require('../556958320'),
      
      ]
    }
  }
};
</script>
