import Vue from 'vue';
import VueRouter from 'vue-router';
// components
import UserList from '../components/UserList.vue';
import TodoList from '../components/TodoList.vue';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/users',
    },
    {
      path: '/users',
      name: 'users',
      component: UserList,
    },
    {
      path: '/todos',
      name: 'todos',
      component: TodoList,
    },
  ],
});
