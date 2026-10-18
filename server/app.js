const express=require('express')
const cors=require('cors')

const app=express()
app.use(cors())
app.use(express.json())

const articles=[
    { 
        id: 1,
        tags:['HTML','前端'],
        title: 'HTML 入门', 
        date: '2026-10-01', 
        summary: 'HTML 是网页的骨架……', 
        content: '这里是 HTML 入门正文……' 
    },
    { 
        id: 2, 
        tags:['CSS','前端'],
        title: 'CSS 布局', 
        date: '2026-10-02', 
        summary: 'Flex 和 Grid 是核心……', 
        content: '这里是 CSS 布局正文……' 
    },
    { 
        id: 3, 
        tags:['JavaScript','前端'],
        title: 'JS 基础', 
        date: '2026-10-03', 
        summary: '变量、函数、DOM……', 
        content: '这里是 JS 基础正文……' 
    },
    { 
        id: 4, 
        tags:['Vue','前端'],
        title: 'Vue 入门', 
        date: '2026-10-04', 
        summary: '组件化开发……', 
        content: '这里是 Vue 入门正文……' 
    },

]

app.get('/api/articles',(req,res)=>{
    res.json(articles)
})
app.get('/api/articles/:id',(req,res)=>{
    const article=articles.find(a=>a.id===Number(req.params.id))
    if(!article){
        return res.status(404).json({message:'文章不存在'})

    }
    res.json(article)
})

app.listen(3000,()=>{
    console.log('后端已启动：http://localhost:3000')
})