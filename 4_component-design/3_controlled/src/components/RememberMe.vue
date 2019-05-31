<template>
  <div>
    <label for="me">remember me</label>
    <input id="me" type="checkbox" v-on:click="checkRemember" v-bind:checked="checked">
  </div>
</template>

<script>
export default {
	model: {
		prop: 'checked',
		event: 'change',
	},
	props: {
		checked: Boolean,
	},
	methods: {
		checkRemember: function() {
			this.$emit('change', !this.checked);
		},
	},
};
</script>