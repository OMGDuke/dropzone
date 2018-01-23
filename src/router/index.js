import Vue from 'vue';
import Router from 'vue-router';
import Erangel from '@/components/Erangel';
import Home from '@/components/Home';

Vue.use(Router);

export default new Router({
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
  ],
});
