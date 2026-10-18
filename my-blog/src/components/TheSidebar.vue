<script setup>
import {ref} from 'vue'
const tags = ref([
  { name: 'HTML', count: 100 },
  { name: 'CSS', count: 85 },
  { name: 'JavaScript', count: 70 },
  { name: 'Vue', count: 30 },
  { name: 'React', count: 45 },
  { name: 'Node.js', count: 60 },
  { name: 'TypeScript', count: 25 },
  { name: 'Git', count: 15 },
])

const MIN_SIZE = 12
const MAX_SIZE = 24

// 计算最大最小值
const counts = tags.value.map(t => t.count)
const max = Math.max(...counts)
const min = Math.min(...counts)

const tagSize = (count) => {
  return MIN_SIZE + (count - min) / (max - min) * (MAX_SIZE - MIN_SIZE)
}
</script>
<template>
    <aside class="sidebar">
        <div class="self-card">
            <div class="avatar-img">
                <img src="#" alt="个人头像">
            </div>
            <div class="author-name">MYNAME</div>
            <div class="description">这个人很懒，什么都没有写……</div>
            <a href="#" class="card-btn">关注GitHub</a>
        </div>
        <div class="sidebar-sticky">
            <section class="hot-post">
    
                <h3>热门文章</h3>
                <ul>
                    <li>
                        <h4><a href="#">文章1</a></h4>
                        <div class="article-date">2000-01-01</div>
                    </li>
                    <li>
                        <h4><a href="#">文章2</a></h4>
                        <div class="article-date">2000-01-02</div>
                    </li>
                    <li>
                        <h4><a href="#">文章3</a></h4>
                        <div class="article-date">2000-01-03</div>
                    </li>
                    <li>
                        <h4><a href="#">文章4</a></h4>
                        <div class="article-date">2000-01-04</div>
                    </li>
                    <li>
                        <h4><a href="#">文章5</a></h4>
                        <div class="article-date">2000-01-05</div>
                    </li>
                </ul>
            </section>
            <section class="tags">
                <h3>标签云</h3>
                <ul class="tag-cloud">
                    <li v-for="tag in tags" :key="tag.name">
                        <RouterLink :to="`/tag/${tag.name}`" :style="{fontSize: tagSize(tag.count)+'px'}">
                            {{ tag.name }}
                        </RouterLink>
                    </li>
                </ul>
            </section>
            <section class="site-info">
                <h3>网站信息</h3>
                <dl>
                    <dt>文章数目：</dt><dd>12</dd>
                    <dt>全站字数：</dt><dd>20k</dd>
                    <dt>总访客数：</dt><dd>8</dd>
                    <dt>运行天数：</dt><dd>365</dd>
                    <dt>最后更新时间：</dt><dd>3天前</dd>
                </dl>
            </section>
        </div>
    </aside>
</template>
<style scoped>
.sidebar {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 280px;
    flex-shrink: 0;
}
.self-card {
    text-align: center;
}

.avatar-img {
    display: flex;
    justify-content: center;
    margin-bottom: 12px;
}

.avatar-img img {
    width: 80px;
    height: 80px;
    border-radius: 50%;    /* 圆形头像 */
    background: #eee;
}

.author-name {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 6px;
}

.description {
    font-size: 13px;
    color: #999;
    margin-bottom: 15px;
}

.card-btn {
    display: inline-block;
    background: #1e80ff;
    color: #fff;
    padding: 8px 20px;
    border-radius: 20px;
    font-size: 13px;
}

.card-btn:hover {
    background: #0d6efd;
    color: #fff;
}
.sidebar-sticky section {
    background: #fff;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 1px 4px rgba(0,0,0,0.06);
}

.sidebar-sticky {
    display: flex;
    flex-direction: column;
    gap: 20px;
}
.sidebar-sticky h3 {
    font-size: 16px;
    border-left: 4px solid #1e80ff;
    padding-left: 10px;
    margin-bottom: 15px;
}
.tag-cloud {
    display: flex;
    flex-wrap: wrap;      /* 放不下自动换行 */
    gap: 8px;
}

.tag-cloud a {
    display: inline-block;
    padding: 4px 12px;
    background: #f0f4f8;
    color: #555;
    border-radius: 12px;
    transition: all 0.2s;
}

.tag-cloud a:hover {
    background: #1e80ff;
    color: #fff;
}
.site-info dl {
    display: grid;
    grid-template-columns: 1fr 1fr;  /* 两列 */
    gap: 8px 10px;
    font-size: 13px;
}

.site-info dt {
    color: #999;
}

.site-info dd {
    text-align: right;
    font-weight: 500;
}
</style>