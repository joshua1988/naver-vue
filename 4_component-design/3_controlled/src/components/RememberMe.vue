<template>
  <div>
    <label for="me">remember me</label>
    <input id="me" type="checkbox" v-on:click="checkRemember" v-bind:value="value">
  </div>  
</template>

<script>
export default {
	props: ['value'],
	methods: {
		checkRemember: function() {
			this.$emit('input', !this.value);
		},
	},
};
</script>