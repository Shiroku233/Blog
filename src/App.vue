<script setup>
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

const articles = ref([
  { id: 1, title: 'HTML 入门', date: '2026-10-01', summary: 'HTML 是网页的骨架……' },
  { id: 2, title: 'CSS 布局', date: '2026-10-02', summary: 'Flex 和 Grid 是核心……' },
  { id: 3, title: 'JS 基础', date: '2026-10-03', summary: '变量、函数、DOM……' },
  { id: 4, title: 'Vue 入门', date: '2026-10-04', summary: '组件化开发……' },
])
</script>

<template>
  <header>
    <div class="main-nav">
        <div class="container">
            <div class="logo">
                <a href="#">
                    <img src="#" alt="个人logo">
                </a>
            </div>
            <ul>
                <li><a href="#">首页</a></li>
                <li><a href="#">标签</a></li>
                <li><a href="#">搜索</a></li>
                <li><a href="#">关于我</a></li>
            </ul>
        </div>
    </div>
  </header>
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
                                <a href="#" :style="{fontSize: tagSize(tag.count)+'px'}">
                                    {{ tag.name }}
                                </a>
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
              <div class="main-content">
                  <section class="article">
                      <header class="section-header">
                          <h2>文章</h2>
                          <a href="#" class="more">更多>></a>
                      </header>
                      <ul id="articleList">
                          <li v-for="article in articles" :key="article.id">
                              <article>
                                  <a :href="`/article/${article.id}`">
                                      <h3>{{ article.title }}</h3>
                                      <time class="article-date">{{article.date}}</time>
                                      <p>{{ article.summary }}</p>
                                  </a>
                              </article>
                          </li>
                      </ul>
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
                      <div class="section-item-list">
                          <article class="section-item">
                              <a href="#">
                                  <h3 class="item-headline">影视</h3>
                                  <img src="#" alt="影视">
                              </a>
                              <ul>
                                  <li><a href="#">影视1</a></li>
                                  <li><a href="#">影视2</a></li>
                                  <li><a href="#">影视3</a></li>
                              </ul>
                          </article>
                          <article class="section-item">
                              <a href="#">
                                  <h3 class="item-headline">音乐</h3>
                                  <img src="#" alt="音乐">
                              </a>
                              <ul>
                                  <li><a href="#">曲目1</a></li>
                                  <li><a href="#">曲目2</a></li>
                                  <li><a href="#">曲目3</a></li>
                              </ul>
                          </article>
                          <article class="section-item">
                              <a href="#">
                                  <h3 class="item-headline">动漫</h3>
                                  <img src="#" alt="动漫">
                              </a>
                              <ul>
                                  <li><a href="#">动漫1</a></li>
                                  <li><a href="#">动漫2</a></li>
                                  <li><a href="#">动漫3</a></li>
                              </ul>
                          </article>
                          <article class="section-item">
                              <a href="#">
                                  <h3 class="item-headline">书籍</h3>
                                  <img src="#" alt="书籍">
                              </a>
                              <ul>
                                  <li><a href="#">书籍1</a></li>
                                  <li><a href="#">书籍2</a></li>
                                  <li><a href="#">书籍3</a></li>
                              </ul>
                          </article>
                          <article class="section-item">
                              <a href="#">
                                  <h3 class="item-headline">游戏</h3>
                                  <img src="#" alt="游戏">
                              </a>
                              <ul>
                                  <li><a href="#">游戏1</a></li>
                                  <li><a href="#">游戏2</a></li>
                                  <li><a href="#">游戏3</a></li>
                              </ul>
                          </article>
                      </div>
                  </section>
              </div>
          </div>
      </div>
  </main>
  <footer>
      <div class="copyright">
          <p>&copy; 2026 by 我</p>
          <p>京ICP备00000000号 | 京公网安备00000000号</p>
      </div>
  </footer>
  <button class="back-to-top" :class="{show:showBackTop}" @click="scrollToTop">回到顶部</button>
</template>

<style scoped>

.container{
    width: 1100px;
    margin: 0 auto;
}
.main-nav{
    background:white;
    box-shadow: 0 1px 4px rgba(0,0,0,0.06);
    height: 60px;
    display: flex;
    align-items: center;
}
.main-nav.container{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.main-nav ul{
    display: flex;
    gap: 30px;
}
.main-nav ul a{
    font-size: 15;
    color: #555;
}
.main-nav ul a:hover{
    color: #1e80ff;
}
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
.sidebar{
    width: 280px;
    flex-shrink: 0;
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
.article ul {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.article article {
    padding: 15px;
    border: 1px solid #f0f0f0;
    border-radius: 6px;
    transition: all 0.2s;
}

.article article:hover {
    border-color: #1e80ff;
    box-shadow: 0 2px 8px rgba(30,128,255,0.1);
}

.article h3 {
    font-size: 16px;
    color: #222;
    margin-bottom: 6px;
}

.article time {
    display: block;
    font-size: 12px;
    color: #999;
    margin-bottom: 8px;
}

.article p {
    font-size: 13px;
    color: #666;
}
.sidebar {
    display: flex;
    flex-direction: column;
    gap: 20px;
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
.collection article {
    display: inline-block;
    width: calc(20% - 8px);    /* 一行 5 个 */
    margin-right: 8px;
    vertical-align: top;
    text-align: center;
    padding: 10px;
    border: 1px solid #f0f0f0;
    border-radius: 6px;
}

.collection article:last-child {
    margin-right: 0;
}

.collection article img {
    width: 100%;
    height: 80px;
    object-fit: cover;
    border-radius: 4px;
    background: #eee;
    margin: 8px 0;
}
.section-item-list{
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
}
.section-item{
    flex: 1;
}
footer {
    margin-top: 30px;
    padding: 25px 0;
    background: #fff;
    border-top: 1px solid #eee;
}

.copyright {
    text-align: center;
    font-size: 13px;
    color: #999;
    line-height: 1.8;
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
