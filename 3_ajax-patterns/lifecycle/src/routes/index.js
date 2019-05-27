import Vue from 'vue';
import Router from 'vue-router';
import NewsView from '../views/NewsView.vue';
import JobsView from '../views/JobsView.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/news'
    },
    {
      path: '/news',
      component: NewsView,
    },
    {
      path: '/jobs',
      component: JobsView,
    },
  ]
})