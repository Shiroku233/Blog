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
</template>
<style scoped>
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
</style>