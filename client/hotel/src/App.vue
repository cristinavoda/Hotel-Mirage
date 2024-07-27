<template>
<h1> HOTEL MIRAGE </h1>
  <div class="bg-hero-pattern min-h-screen bg-cover bg-center">
    <Navbar />
  
    <Navbar />
    <router-view />
    <Footer />
    <Calendario/>
  </div>

 
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  components: {
    Navbar
  }
};
</script>

<style scope>

Navbar {
display:inline}
</style>
