
<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { getArticle } from '../api/article'

const route = useRoute()
const article = ref(null)

onMounted(async () => {
  const res = await getArticle(route.params.id)
  article.value = res.data
})
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
                <div class="article-content">{{article.content}}</div>
                <nav class="article-nav">
                    <RouterLink v-if="prev" :to="`/article/${prev.id}`"> <-{{prev.title}}</RouterLink>
                    <RouterLink v-if="next" :to="`/article/${next.id}`"> ->{{next.title}}</RouterLink>
                </nav>
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
</style>