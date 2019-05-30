<template>
  <div>
    <h1>Todo List</h1>
    <ul>
      <li v-for="item in items">
        {{ item.id }}, {{ item.title }}
      </li>
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
			fetch('https://jsonplaceholder.typicode.com/todos/')
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
