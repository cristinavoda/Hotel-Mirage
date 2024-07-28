<template>
  <div class="navbar">
    <ul class="nav-list">
      <li><router-link to="/" class="nav-link">Inicio</router-link></li>
      <li><router-link to="/Rooms" class="nav-link">Habitaciones</router-link></li>
      <li><router-link to="/Reservas" class="nav-link">Reservas</router-link></li>
      <li><router-link to="/Calendario" class="nav-link">Calendario</router-link></li>
      <li><router-link to="/hotel-services" class="nav-link">Servicios</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style scoped>
.navbar {
  background-color: white;
  color:white ;
  width: 150px; 
  height: 900px; 
  position: fixed; 
  top: 0;
  left: 0;
  padding: 160px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.3);
}

.nav-list {
  list-style: none;
  padding: 0;
}

.nav-list li {
  margin-bottom: 10px;
}

.nav-link {
  color: red;
  text-decoration: none;
  font-size: 1.5rem;
}

.nav-link:hover {
  text-decoration: underline;
}
</style>
