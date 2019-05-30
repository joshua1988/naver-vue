<template>
  <div>
    <form>
      <div>
        <label for="email">email: </label>
        <input id="email" type="text">
      </div>
      <div>
        <label for="password">password: </label>
        <input id="password" type="password">
      </div>
      <slot>
        <!-- 등록할 컴포넌트에서 정의할 수 있는 영역 -->
      </slot>
    </form>
  </div>
</template>