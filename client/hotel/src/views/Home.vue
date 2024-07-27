<template>
  <div>
    <Description />
    <Calendario />
    <Rooms />
    <Navbar/>
    <Footer/>
  </div>
</template>

<script>
import Description from '../components/Description.vue';
import Calendario from '../components/Calendario.vue';
import Rooms from '../components/Rooms.vue';
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
export default {
  components: {
    Description,
    Calendario,
    Rooms,
    Navbar,
    Footer
  }
};
</script>
