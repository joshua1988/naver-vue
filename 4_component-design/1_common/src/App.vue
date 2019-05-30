<template>
  <div>
    <app-header></app-header>
    <login-form></login-form>
    <!-- TODO: AppFooter 컴포넌트를 표시해보세요 -->
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
};
</script>
