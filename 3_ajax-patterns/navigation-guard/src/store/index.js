import Vue from 'vue';
import Vuex from 'vuex';
import { fetchNews } from '../api/index.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    news: [],
  },
  mutations: {
    setNews(state, news) {
      state.news = news;
    },
  },
  actions: {
    FETCH_NEWS(context) {
      return fetchNews()
        .then(function(response) {
          var data = response.data;
          context.commit('setNews', data);
          return response;
        })
        .catch(function(error) {
          console.log(error);
          return error;
        });
    },
    // TODO: fetchJobs() API 함수로 구직 정보를 호출하는 액션 함수를 구현해보세요.
    FETCH_JOBS() {}
  },
});
