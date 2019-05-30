<template>
  <div>
    <div>
      <router-link to="/users">/users</router-link>
      <router-link to="/todos">/todos</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<style scoped>
a {
	padding: 0 3px;
}
</style>
