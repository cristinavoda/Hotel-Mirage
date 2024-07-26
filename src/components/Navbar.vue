<template>
  <div class="container">
    
    <nav class="navbar">
      <ul class="nav-list">
        <li><router-link to="/" class="nav-link">Inicio</router-link></li>
        <li><router-link to="/rooms" class="nav-link">Rooms</router-link></li>
        <li><router-link to="/reservation" class="nav-link">Reservas</router-link></li>
        <li><router-link to="/services" class="nav-link">Servicios</router-link></li>
        <li><router-link to="/location" class="nav-link">Ubicación</router-link></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>



<style scoped>

.container {
  display: flex;
  flex-direction: column;
<<<<<<< HEAD
  align-items: center; 
=======
  align-items: center;
>>>>>>> e37fdb0dbf5dd50c42713342c006eb6c23cb41e3
  padding: 10px; 
}


.title {
  margin: 0; 
  padding: 10px 0; 
  color: #333; 
}


.navbar {
  background-color: rgb(255,0,0); 
  padding: 10px 20px; 
  border: 2px solid white; 
  width: 100%; 
}

.nav-list {
  list-style: none; 
  display: flex; 
  flex-direction: row;
  justify-content: center; 
  gap: 10px; 
  margin: 0;
  padding: 0;
}

.nav-link {
  color: white; 
  text-decoration: none; 
  font-size: 16px; 
}

.nav-link:hover {
  text-decoration: underline; 
}
</style>
