<template>
  <div>
    <h1>User List</h1>
    <ul>
      <li v-for="item in items">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
import FetchListMixin from '../mixins/FetchListMixin.js';

export default {
	mixins: [FetchListMixin],
};
</script>