
const backToTop=document.querySelector('.back-to-top');

window.addEventListener('scroll',()=>{
    if(window.scrollY>=300){
        backToTop.classList.add('show');
    }
    else{
        backToTop.classList.remove('show');
    }

});
backToTop.addEventListener('click',()=>{
    window.scrollTo({top:0,behavior:'smooth'});
});

const tags=[
    {name:'HTML',count:100},
    {name:'CSS',count:85},
    {name:'JavaScript',count:70},
    {name:'Vue',count:30},
    {name:'React',count:45},
    {name:'Node.js',count:60},
    {name:'TypeScript',count:25},
    {name:'Git',count:15}
];

const counts=tags.map(t=>t.count);
const max=Math.max(...counts);
const min=Math.min(...counts);

const MIN_SIZE=12;
const MAX_SIZE=24;

const tagCloud=document.querySelector('#tagCloud');

tagCloud.innerHTML=tags.map(tag=>{
    const size=MIN_SIZE+(tag.count-min)/(max-min)*(MAX_SIZE-MIN_SIZE);
    return `<li><a href='#' style="font-size:${size}px">${tag.name}</a></li>`;
}).join('');

//模拟数据
const articles = [
    { id: 1, title: 'HTML 入门', date: '2026-10-01', summary: 'HTML 是网页的骨架……' },
    { id: 2, title: 'CSS 布局', date: '2026-10-02', summary: 'Flex 和 Grid 是核心……' },
    { id: 3, title: 'JS 基础', date: '2026-10-03', summary: '变量、函数、DOM……' },
    { id: 4, title: 'Vue 入门', date: '2026-10-04', summary: '组件化开发……' }
];
const articleList=document.querySelector('#articleList');

articleList.innerHTML=articles.map(article=>`
    <li>
        <article>
            <a href="/article/${article.id}">
                <h3>${article.title}</h3>
                <time class="article-date">${article.date}</time>
                <p>${article.summary}</p>
            </a>
        </article>
    </li>
`).join('');
