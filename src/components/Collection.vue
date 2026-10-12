<template>
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
</template>
<style scoped>
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
</style>