<template>
  <div>
    <h1>User List</h1>
    <ul>
      <li v-for="item in items">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
	data() {
		return {
			items: [],
		};
	},
	methods: {
		fetchData() {
			fetch('https://jsonplaceholder.typicode.com/users/')
				.then(res => res.json())
				.then(data => (this.items = data))
				.catch(error => console.log(error));
		},
	},
	created() {
		this.fetchData();
	},
};
</script>

<style>
</style>
