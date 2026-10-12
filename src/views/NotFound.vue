<script setup>
</script>
<template>
    <div class="not-found">
        <h1>404</h1>
        <p>页面不存在，请返回首页</p>
        <RouterLink to="/">返回首页</RouterLink>
    </div>
</template>
<style scoped>
.not-found {
  text-align: center;
  padding: 100px 20px;
}
.not-found h1 {
  font-size: 72px;
  color: #1e80ff;
  margin-bottom: 10px;
}
.not-found p {
  font-size: 16px;
  color: #999;
  margin-bottom: 20px;
}
.not-found a {
  color: #1e80ff;
}
</style>