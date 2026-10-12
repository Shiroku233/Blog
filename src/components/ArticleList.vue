<script setup>
import {ref} from 'vue'

const articles = ref([
  { id: 1, title: 'HTML 入门', date: '2026-10-01', summary: 'HTML 是网页的骨架……' },
  { id: 2, title: 'CSS 布局', date: '2026-10-02', summary: 'Flex 和 Grid 是核心……' },
  { id: 3, title: 'JS 基础', date: '2026-10-03', summary: '变量、函数、DOM……' },
  { id: 4, title: 'Vue 入门', date: '2026-10-04', summary: '组件化开发……' },
])
</script>
<template>
    <ul id="articleList">
        <li v-for="article in articles" :key="article.id">
            <article>
                <RouterLink :to="`/article/${article.id}`">
                    <h3>{{ article.title }}</h3>
                    <time class="article-date">{{article.date}}</time>
                    <p>{{ article.summary }}</p>
                </RouterLink>
            </article>
        </li>
    </ul>
</template>
<style scoped>
ul {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

article {
    padding: 15px;
    border: 1px solid #f0f0f0;
    border-radius: 6px;
    transition: all 0.2s;
}

article:hover {
    border-color: #1e80ff;
    box-shadow: 0 2px 8px rgba(30,128,255,0.1);
}

h3 {
    font-size: 16px;
    color: #222;
    margin-bottom: 6px;
}

time {
    display: block;
    font-size: 12px;
    color: #999;
    margin-bottom: 8px;
}

p {
    font-size: 13px;
    color: #666;
}
</style>