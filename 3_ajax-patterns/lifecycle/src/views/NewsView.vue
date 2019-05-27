<template>
  <div>
    <h2>News</h2>
    <ul v-if="!isLoading">
      <li v-for="newsItem in newsItems" v-bind:key="newsItem.id">
        {{ newsItem.title }}
      </li>
    </ul>
    <p v-else>Loading...</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      newsItems: [],
      isLoading: true
    };
  },
  methods: {
    fetchData: function() {
      var vm = this;
      axios
        .get("https://api.hnpwa.com/v0/news/1.json")
        .then(function(response) {
          console.log(response);
          vm.newsItems = response.data;
          vm.isLoading = false;
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  created: function() {
    this.fetchData();
  }
};
</script>

<style>
</style>
