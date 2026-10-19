<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { createArticle, updateArticle, getArticle } from '../api/article'

const router = useRouter()
const route = useRoute()

const isEdit = computed(() => !!route.params.id)

const form = ref({
  title: '',
  summary: '',
  content: '',
  tags: '',
})

const submitting = ref(false)
const error = ref('')

// 编辑模式：加载原有文章，预填表单
onMounted(async () => {
  if (isEdit.value) {
    try {
      const res = await getArticle(route.params.id)
      const a = res.data
      form.value = {
        title: a.title || '',
        summary: a.summary || '',
        content: a.content || '',
        tags: Array.isArray(a.tags) ? a.tags.join(',') : '',
      }
    } catch (err) {
      error.value = '文章加载失败'
    }
  }
})

const handleSubmit = async () => {
  if (!form.value.title.trim()) {
    error.value = '标题不能为空'
    return
  }

  submitting.value = true
  error.value = ''

  const payload = {
    title: form.value.title,
    summary: form.value.summary,
    content: form.value.content,
    tags: form.value.tags
      .split(',')
      .map(t => t.trim())
      .filter(Boolean),
  }

  try {
    if (isEdit.value) {
      await updateArticle(route.params.id, payload)
    } else {
      await createArticle(payload)
    }
    router.push('/')
  } catch (err) {
    error.value = err.response?.data?.message || '提交失败'
  } finally {
    submitting.value = false
  }
}
</script>

<template>
    <main>
        <div class="container">
            <section class="card">
                <header class="section-header">
                    <h2>{{ isEdit ? '编辑文章' : '发布文章' }}</h2>
                    <RouterLink to="/" class="more">返回首页</RouterLink>
                </header>

                <form class="edit-form" @submit.prevent="handleSubmit">
                    <label>
                        标题
                        <input v-model="form.title" type="text" placeholder="文章标题" />
                    </label>
                    <label>
                        摘要
                        <input v-model="form.summary" type="text" placeholder="一句话摘要" />
                    </label>
                    <label>
                        标签（逗号分隔）
                        <input v-model="form.tags" type="text" placeholder="HTML,前端" />
                    </label>
                    <label>
                        正文
                        <textarea v-model="form.content" rows="10" placeholder="文章正文"></textarea>
                    </label>

                    <p v-if="error" class="error">{{ error }}</p>

                    <button type="submit" :disabled="submitting">
                        {{ submitting ? '提交中……' : (isEdit ? '保存' : '发布') }}
                    </button>
                </form>
            </section>
        </div>
    </main>
</template>

<style scoped>
.card {
  background: #fff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);
}
.edit-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.edit-form label {
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 14px;
  color: #555;
}
.edit-form input,
.edit-form textarea {
  padding: 8px 10px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 14px;
  font-family: inherit;
}
.edit-form input:focus,
.edit-form textarea:focus {
  outline: none;
  border-color: #1e80ff;
}
.edit-form button {
  align-self: flex-start;
  padding: 8px 24px;
  background: #1e80ff;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}
.edit-form button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
.error {
  color: #e74c3c;
  font-size: 13px;
}
</style>