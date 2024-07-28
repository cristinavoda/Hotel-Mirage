import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Calendario from '../components/Calendario.vue';  
import Rooms from '../components/Rooms.vue';  


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  { path: '/' ,
    name:'Calendario',
    component: Calendario
  },
  { path: '/',
    name: 'Rooms',
    component:Rooms
  },
  
 
  {
    path: '/',
    name: 'Navbar',
    component: Home
  },
{
  path: '/',
  name: 'Footer',
  component: Home
},]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
