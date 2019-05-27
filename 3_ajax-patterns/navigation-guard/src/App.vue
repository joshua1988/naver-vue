<template>
  <div>
    <div class="wrapper">
      <loading-bar v-if="loading"></loading-bar>
    </div>
    <header>
      <h1>Data Fetching - Instance Life Cycle</h1>
      <div>
        <router-link to="/news">News</router-link> |
        <router-link to="/jobs">Jobs</router-link>
      </div>
    </header>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import LoadingBar from "./components/LoadingBar.vue";
import bus from "./utils/bus.js";

export default {
  components: {
    LoadingBar
  },
  data: function() {
    return {
      loading: false
    };
  },
  methods: {
    showLoadingBar: function() {
      this.loading = true;
    },
    hideLoadingBar: function() {
      this.loading = false;
    }
  },
  beforeMount: function() {
    bus.$on("on:loading-bar", this.showLoadingBar);
    bus.$on("off:loading-bar", this.hideLoadingBar);
  }
};
</script>

<style>
@import "./assets/css/reset.css";

.wrapper {
  height: 4px;
}
h1 {
  padding: 1rem 0;
}
</style>
