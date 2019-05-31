import Vue from 'vue';
import Router from 'vue-router';
import NewsView from '../views/NewsView.vue';
import JobsView from '../views/JobsView.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      // URL 정보
      path: '/',
      redirect: '/news',
    },
    {
      // URL 정보
      path: '/news',
      // URL에 해당하는 페이지 컴포넌트
      component: NewsView,
    },
    {
      path: '/jobs',
      component: JobsView,
    },
  ],
});
