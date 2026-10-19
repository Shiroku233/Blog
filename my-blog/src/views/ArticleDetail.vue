
<script setup>
import { onMounted, ref } from 'vue'
import { useRoute,useRouter } from 'vue-router'
import { getArticle,deleteArticle } from '../api/article'
import { marked } from 'marked'
const route = useRoute()
const router=useRouter()
const article = ref(null)
const renderedContent=ref('')


onMounted(async () => {
  const res = await getArticle(route.params.id)
  article.value = res.data
  renderedContent.value=marked(res.data.content||'')
})
const handleDelete = async () => {
  if (!confirm('确定删除这篇文章吗？')) return

  try {
    await deleteArticle(route.params.id)
    router.push('/')
  } catch (err) {
    alert('删除失败：' + (err.response?.data?.message || err.message))
  }
}
</script>
<template>
    <main v-if="article">
        <div class="container">
            <article class="card">
                <RouterLink to="/" class="back-link">返回首页</RouterLink>
                <header class="article-header">
                    <h1>{{article.title}}</h1>
                    <div class="meta">
                        <time class="article-time">{{article.date}}</time>
                        <div class="tags">
                            <RouterLink 
                                v-for="tag in article.tags" 
                                :key="tag" 
                                :to="`/tag/${tag}`" 
                                class="tag"
                            >
                                {{tag}}
                            </RouterLink>
                        </div>
                    </div>
                </header>
                <div class="article-content" v-html="renderedContent"></div>
                <!-- 操作按钮 -->
                <div class="actions">
                    <RouterLink :to="`/edit/${article.id}`" class="btn btn-edit">
                        编辑
                    </RouterLink>
                    <button class="btn btn-delete" @click="handleDelete">
                        删除
                    </button>
                </div>
            </article>
        </div>
    </main>
    <div v-else class="loading">加载中……</div>
</template>
<style scoped>
.back-link{
    display:inline-block;
    color:#1e80ff;
    margin-bottom: 20px;
    font-size: 14px;
}
.article-header{
    border-bottom:1px solid #eee;
    padding-bottom:20px;
    margin-bottom: 30px;
}
.article-header h1{
    font-size: 28px;
    color: #222;
    margin-bottom: 12px;
    line-height: 1.4;
}
.meta{
    display: flex;
    align-items: center;
    gap:16px;
    font-size:13px;
    color: #999;
}
.tags{
    display: flex;
    gap: 8px;
}
.tag{
    padding: 2px 10px;
    border-radius: 12px;
    color: #555;
    background: #f0f4f8;
}
.tag:hover{
    background: #1e80ff;
    color: #fff;

}
.article-content{
    font-size: 16px;
    line-height: 1.8;
    color:#333;
    margin-bottom: 40px;
}
.article-content :deep(h1),
.article-content :deep(h2),
.article-content :deep(h3) {
  margin: 20px 0 10px;
}
.article-content :deep(p) {
  margin-bottom: 12px;
}
.article-content :deep(code) {
  background: #f5f7fa;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 13px;
}
.article-content :deep(pre) {
  background: #f5f7fa;
  padding: 15px;
  border-radius: 6px;
  overflow-x: auto;
}
.article-nav{
    display:flex;
    justify-content: space-between;
    border-top:1px solid #eee;
    padding-top: 20px;
    font-size: 14px;
}
.article-nav a{
    color:#1e80ff;
    max-width: 45%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space:nowrap;
}
.actions {
  display: flex;
  gap: 12px;
  border-top: 1px solid #eee;
  padding-top: 20px;
}
.btn {
  padding: 6px 18px;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  border: none;
}
.btn-edit {
  background: #1e80ff;
  color: #fff;
}
.btn-edit:hover {
  background: #0d6efd;
}
.btn-delete {
  background: #fff;
  color: #e74c3c;
  border: 1px solid #e74c3c;
}
.btn-delete:hover {
  background: #e74c3c;
  color: #fff;
}
</style>