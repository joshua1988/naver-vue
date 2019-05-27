<template>
  <div>
    <ul>
      <li v-for="newsItem in this.$store.state.news" v-bind:key="newsItem.id">
        {{ newsItem.title }}
      </li>
    </ul>    
  </div>
</template>