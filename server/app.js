const express=require('express')
const cors=require('cors')
const sequelize=require('./config/db')
const Article=require('./models/Article')

const app=express()
app.use(cors())
app.use(express.json())



app.get('/api/articles',async(req,res)=>{
    const articles=await Article.findAll()
    res.json(articles)
})
app.get('/api/articles/:id',async(req,res)=>{
    const article=await Article.findByPk(req.params.id)
    if(!article){
        return res.status(404).json({message:'文章不存在'})

    }
    res.json(article)
})

sequelize.sync().then(()=>{
    app.listen(3000,()=>{
        console.log('后端已启动：http://localhost:3000')
    })
})