<script setup>

import TheSidebar from '../components/TheSidebar.vue'
import ArticleList from '../components/ArticleList.vue'
import Collection from '../components/Collection.vue'

import {ref,onMounted,onUnmounted} from 'vue'

const showBackTop=ref(false)
const handleScroll=()=>{
    showBackTop.value=window.scrollY>=300
}

const scrollToTop=()=>{
    window.scrollTo({top:0,behavior:'smooth'})
}
onMounted(()=>window.addEventListener('scroll',handleScroll))
onUnmounted(()=>window.removeEventListener('scroll',handleScroll))

</script>
<template>
    <main>
        <div class="container">
            <div class="show-nav">
                <div class="achievement">
                    <a href="#">
                        <img src="#" title="查看我的“人生成就”" class="achievement-img">
                        <span class="achievement-text">人生成就系统</span>
                    </a>
                </div>
                <nav class="blog-nav">
                    <div class="container">
                        <ul>
                            <li><a href="#">个人简介</a></li>
                            <li><a href="#">文章</a></li>
                            <li><a href="#">作品与经历</a></li>
                            <li><a href="#">收藏馆</a></li>
                            <li><a href="#">知识库</a></li>
                            <li><a href="#">工具箱</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div class="content-wrap">
                <TheSidebar />
                <div class="main-content">
                    <section class="article">
                        <header class="section-header">
                            <h2>文章</h2>
                            <a href="#" class="more">更多>></a>
                        </header>
                        <ArticleList />
                    </section>
                    <section class="creation-experience">
                        <header class="section-header">
                            <div>
                                <h2>作品与经历</h2>
                                <div class="more">
                                    <a href="#">更多>></a>
                                </div>
                            </div>
                        </header>
                    </section>
                    <section class="collection">
                        <header class="section-header">
                            <h2>收藏馆</h2>
                        </header>
                        <Collection />
                    </section>
                </div>
            </div>
        </div>
    </main>
    <button class="back-to-top" :class="{show:showBackTop}" @click="scrollToTop">回到顶部</button>
</template>
<style scoped>
.show-nav{
    display:flex;
    align-items: center;
    gap: 20px;
    margin: 20px 0;
}
.achievement a{
    display: flex;
    flex-direction:column;
    align-items: center;
    gap: 10px;
    background: linear-gradient(135deg,#667eea,#764ba2);
    color: #fff;
    padding: 10px 20px;
    border-radius: 8px;
    font-weight: 500;
}
.achievement-text{
    white-space: nowrap;
}
.achievement-img{
    width: 24px;
    height: 24px;
}
.blog-nav{
    flex: 1;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 1px 4px rgba(0,0,0,0.06);
}
.blog-nav ul{
    display: flex;
}
.blog-nav li{
    flex: 1;
    text-align: center;
}
.blog-nav a{
    display: block;
    padding: 12px 0;
    color: #555;
    border-bottom: 2px solid transparent;
    
}
.blog-nav a:hover{
    color: #1e80ff;
    border-bottom-color: #1e80ff;
}
.content-wrap{
    display: flex;
    gap:20px;
    align-items: flex-start;
}

.main-content{
    flex:1;
    min-width: 0;
}
.main-content{
    display: flex;
    flex-direction: column;
    gap: 20px;
}
.main-content section{
    background: #fff;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 1px 4px rgba(0,0,0,0.06);
}
.section-header{
    display: flex;
    justify-content: space-between;
    align-items:center ;
    border-bottom: 1px solid #eee;
    padding-bottom:12px ;
    margin-bottom: 15px;
}
.section-header h2{
    font-size: 18px;
    color: #222;
    border-left:4px solid #1e80ff ;
    padding-left: 10px;
}
.section-header .more{
    font-size: 13px;
    color: #999;
}


.back-to-top {
    position: fixed;       /* 固定定位 */
    right: 30px;
    bottom: 80px;
    width: 45px;
    height: 45px;
    border: none;
    border-radius: 50%;
    background: #1e80ff;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
    box-shadow: 0 2px 8px rgba(0,0,0,0.2);
    opacity: 0;            /* 默认透明 */
    visibility: hidden;    /* 默认隐藏 */
    transition: all 0.3s;
    z-index: 100;
}

.back-to-top.show {
    opacity: 1;
    visibility: visible;
}

.back-to-top:hover {
    background: #0d6efd;
    transform: translateY(-3px);
}
</style>