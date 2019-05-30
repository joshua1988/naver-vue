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
// TODO: 믹스인 파일 불러오기

export default {
	// TODO: 불러온 믹스인을 mixins 속성에 추가
};
</script>