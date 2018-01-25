import Vue from 'vue';
import Router from 'vue-router';
import Erangel from '@/components/Erangel';
import Miramar from '@/components/Miramar';
import Home from '@/components/Home';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/erangel',
      name: 'Erangel',
      component: Erangel,
    },
    {
      path: '/miramar',
      name: 'Miramar',
      component: Miramar,
    },
  ],
});
