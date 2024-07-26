import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Rooms from '../views/Rooms.vue';
import Reservation from '../views/Reservation.vue';
import Services from '../views/Services.vue';
import Location from '../views/Location.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/rooms', name: 'Rooms', component: Rooms },
  { path: '/reservation', name: 'Reservation', component: Reservation },
  { path: '/services', name: 'Services', component: Services },
  { path: '/location', name: 'Location', component: Location }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
