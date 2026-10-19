<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import request from '../api/request'

const router = useRouter()
const username = ref('')
const password = ref('')
const error = ref('')
const loading = ref(false)

const handleLogin = async () => {
  loading.value = true
  error.value = ''
  try {
    const res = await request.post('/auth/login', {
      username: username.value,
      password: password.value,
    })
    localStorage.setItem('token', res.data.token)
    localStorage.setItem('username', res.data.username)
    router.push('/')
  } catch (err) {
    error.value = err.response?.data?.message || '登录失败'
  } finally {
    loading.value = false
  }
}
</script>

<template>
    <main>
        <div class="container">
            <section class="card login-card">
                <h2>登录</h2>
                <form @submit.prevent="handleLogin">
                    <input v-model="username" placeholder="用户名" />
                    <input v-model="password" type="password" placeholder="密码" />
                    <p v-if="error" class="error">{{ error }}</p>
                    <button type="submit" :disabled="loading">
                        {{ loading ? '登录中……' : '登录' }}
                    </button>
                </form>
            </section>
        </div>
    </main>
</template>

<style scoped>
.login-card {
  max-width: 360px;
  margin: 80px auto;
  background: #fff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);
}
.login-card h2 {
  margin-bottom: 20px;
}
.login-card form {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.login-card input {
  padding: 8px 10px;
  border: 1px solid #ddd;
  border-radius: 6px;
}
.login-card button {
  padding: 8px;
  background: #1e80ff;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}
.error {
  color: #e74c3c;
  font-size: 13px;
}
</style>