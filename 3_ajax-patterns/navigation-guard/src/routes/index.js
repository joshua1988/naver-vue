import Vue from 'vue';
import Router from 'vue-router';
import store from '../store/index.js';
import bus from '../utils/bus.js';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/news',
    },
    {
      path: '/news',
      component: () => import('../views/NewsView.vue'),
      beforeEnter: function(to, from, next) {
        bus.$emit('on:loading-bar');
        store
          .dispatch('FETCH_NEWS')
          .then(function(response) {
            console.log(response);
            next();
          })
          .catch(function(error) {
            console.log(error);
          })
          .finally(function() {
            bus.$emit('off:loading-bar');
          });
      },
    },
    {
      path: '/jobs',
      component: () => import('../views/JobsView.vue'),
      beforeEnter: function() {
        // TODO: 페이지에 진입하기 전에 'FETCH_JOBS' API 함수를 호출하여 데이터를 스토어에 저장해보세요.
      },
    },
  ],
});
