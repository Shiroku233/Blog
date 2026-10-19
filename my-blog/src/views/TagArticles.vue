<script setup>
import { computed, ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getArticles } from '../api/article'


const route=useRoute()
const articles=ref([])

const tag=computed(()=>route.params.tag)

const filteredArticles=computed(()=>
    articles.value.filter(a=>a.tags&&a.tags.includes(tag.value))
)
onMounted(async () => {
  const res = await getArticles()
  articles.value = res.data
})
</script>
<template>
    <main>
        <div class="container">
            <div class="content-wrap">
                <div class="main-content">
                    <section class="article">
                        <header class="section-header">
                            <h2>标签：{{ tag }}</h2>
                            <RouterLink to="/" class="more">返回首页</RouterLink>
                        </header>

                        <ul v-if="filteredArticles.length">
                            <li v-for="article in filteredArticles" :key="article.id">
                                <article>
                                    <RouterLink :to="`/article/${article.id}`">
                                        <h3>{{ article.title }}</h3>
                                        <time class="article-date">{{ article.date }}</time>
                                        <p>{{ article.summary }}</p>
                                    </RouterLink>
                                </article>
                            </li>
                        </ul>

                        <p v-else class="empty">这个标签下还没有文章</p>
                    </section>
                </div>
            </div>
        </div>
    </main>
</template>
<style scoped>
.empty {
  color: #999;
  padding: 20px 0;
}
</style>