<template>
  <div>
    <h2>Jobs</h2>
  </div>
</template>

<script>
import axios from "axios";

export default {
  methods: {
    fetchData: function() {
      axios.get("https://api.hnpwa.com/v0/jobs/1.json");
    }
  }
  // TODO: 위 fetchData 메서드를 이용하여 데이터를 받아온 뒤 화면에 구직 공고 제목을 표시해보세요.
};
</script>

<style>
</style>
