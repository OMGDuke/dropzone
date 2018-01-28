import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import About from '@/components/About';
import NotFound from '@/components/NotFound';
import Erangel from '@/components/Erangel';
import Fortnite from '@/components/Fortnite';
import Miramar from '@/components/Miramar';

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
      path: '/about',
      name: 'About',
      component: About,
    },
    {
      path: '/erangel',
      name: 'Erangel',
      component: Erangel,
    },
    {
      path: '/fortnite',
      name: 'Fortnite',
      component: Fortnite,
    },
    {
      path: '/miramar',
      name: 'Miramar',
      component: Miramar,
    },
    {
      path: '/*',
      name: 'Not Found',
      component: NotFound,
    },
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});
