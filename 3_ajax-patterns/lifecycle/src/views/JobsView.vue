<template>
  <div>
    <h2>Jobs</h2>
    <div>
      <ul>
        <li v-for="item in items" v-bind:key="item.id">
          {{ item.title }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
	data() {
		return {
			items: [],
		};
	},
	methods: {
		fetchData: function() {
			var vm = this;
			axios
				.get('https://api.hnpwa.com/v0/jobs/1.json')
				.then(function(response) {
					vm.items = response.data;
					// console.log(response.data);
				})
				.catch(function(error) {
					console.log(error);
				});
		},
	},
	// TODO: 위 fetchData 메서드를 이용하여
	// 데이터를 받아온 뒤 화면에 구직 공고 제목을 표시해보세요.
	created: function() {
		// console.log(this);
		this.fetchData();
	},
};
</script>

<style>
</style>
