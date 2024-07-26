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

#### CSS

<style scoped>

.container {
  display: flex;
  flex-direction: column;
  align-items: center; 
  padding: 10px; 
}

/* Título de la página */
.title {
  margin: 0; /* Elimina el margen por defecto */
  padding: 10px 0; /* Espaciado interno */
  color: #333; /* Color del texto */
}

/* Estilos de la barra de navegación */
.navbar {
  background-color: rgb(255,0,0); /* Color de fondo de la barra de navegación */
  padding: 10px 20px; /* Espaciado alrededor del contenido */
  border: 2px solid white; /* Borde sólido blanco */
  width: 100%; /* Ancho completo */
}

.nav-list {
  list-style: none; /* Elimina los puntos de la lista */
  display: flex; /* Usa Flexbox para la lista */
  flex-direction: row; /* Alinea los elementos en fila horizontal */
  justify-content: center; /* Centra los elementos horizontalmente */
  gap: 10px; /* Espacio entre los elementos */
  margin: 0;
  padding: 0;
}

.nav-link {
  color: white; /* Color del texto */
  text-decoration: none; /* Elimina el subrayado */
  font-size: 16px; /* Tamaño de la fuente */
}

.nav-link:hover {
  text-decoration: underline; /* Subrayado en el hover */
}
</style>
