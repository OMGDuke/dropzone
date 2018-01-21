import Vue from 'vue';
import Router from 'vue-router';
import Erangel from '@/components/Erangel';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Erangel',
      component: Erangel,
    },
  ],
});
