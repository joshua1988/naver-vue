<template>
  <div>
    <app-header></app-header>
    <login-form>
      <!-- slot에다가 정의할 마크업과 기능 -->
      <button v-on:click="submitForm">login</button>
    </login-form>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import LoginForm from './components/LoginForm.vue';

export default {
	components: {
		'app-header': AppHeader,
		'login-form': LoginForm,
	},
	methods: {
		submitForm: function() {
			console.log('submitted');
		},
	},
};
</script>