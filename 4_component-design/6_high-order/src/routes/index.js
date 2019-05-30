import Vue from 'vue';
import VueRouter from 'vue-router';
// components
import UserList from '../components/UserList.vue';
import TodoList from '../components/TodoList.vue';
// high order component
import createHoc from '../components/createHoc.js';

Vue.use(VueRouter);

const userUrl = 'https://jsonplaceholder.typicode.com/users/';
const todoUrl = 'https://jsonplaceholder.typicode.com/todos/';

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/users',
    },
    {
      path: '/users',
      component: UserList,
      // component: createHoc(UserList, userUrl),
    },
    {
      path: '/todos',
      component: TodoList,
      // TODO: hoc로 TodoList의 로직을 재활용해보세요.
    },
  ],
});
