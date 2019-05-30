<template>
  <div>
    <app-header></app-header>
    <login-form>
      <!-- slot에다가 정의할 마크업과 기능 -->
      <button @click.prevent="submitForm">login</button>
    </login-form>
    <remember-me v-model="checkValue"></remember-me>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import LoginForm from './components/LoginForm.vue';
import RememberMe from './components/RememberMe.vue';

export default {
	components: {
		'app-header': AppHeader,
		'login-form': LoginForm,
		'remember-me': RememberMe,
	},
	data() {
		return {
			checkValue: false,
		};
	},
	methods: {
		submitForm: function() {
			console.log('submitted');
		},
	},
};
</script>