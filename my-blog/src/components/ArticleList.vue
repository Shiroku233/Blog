<script setup>
import {ref,onMounted} from 'vue'
import { getArticles } from '../api/article'

const articles=ref([])

onMounted(async()=>{
    const res=await getArticles()
    articles.value=res.data
})

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