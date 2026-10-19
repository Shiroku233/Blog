<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// 直接从 localStorage 初始化，但用 ref 包起来
const username = ref(localStorage.getItem('username') || '')

const handleLogout = () => {
  localStorage.removeItem('token')
  localStorage.removeItem('username')
  username.value = ''        // ← 关键：立刻清空响应式变量
  router.push('/login')
}
</script>
<template>
    <header>
        <div class="main-nav">
            <div class="container">
                <div class="logo">
                    <a href="#">
                        <img src="#" alt="个人logo">
                    </a>
                </div>
                <ul>
                    <li><RouterLink to="/">首页</RouterLink></li>
                    <li><a href="#">标签</a></li>
                    <li><a href="#">搜索</a></li>
                    <li><a href="#">关于我</a></li>
                    <li><RouterLink to="/edit">发布</RouterLink></li>
                    <li v-if="username">
                        <span>{{ username }}</span>
                        <button class="logout-btn" @click="handleLogout">退出</button>
                    </li>
                    <li v-else>
                        <RouterLink to="/login">登录</RouterLink>
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>
<style scoped>
.main-nav{
    background:white;
    box-shadow: 0 1px 4px rgba(0,0,0,0.06);
    height: 60px;
    display: flex;
    align-items: center;
}
.main-nav.container{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.main-nav ul{
    display: flex;
    gap: 30px;
}
.main-nav ul a{
    font-size: 15;
    color: #555;
}
.main-nav ul a:hover{
    color: #1e80ff;
}
.logout-btn {
  background: none;
  border: none;
  color: #1e80ff;
  cursor: pointer;
  font-size: inherit;
  padding: 0;
}
.logout-btn:hover {
  text-decoration: underline;
}
</style>