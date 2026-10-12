<script setup>
import { useRoute } from 'vue-router';
import { articles } from '@/data/articles';
const route=useRoute()
const article=articles.find(a=>a.id===Number(route.params.id))


</script>
<template>
    <div v-if="article">
        <h1>{{ article.title }}</h1>
        <time>{{ article.time }}</time>
        <div>{{ article.content }}</div>
    </div>
    <div v-else>文章不存在</div>
</template>