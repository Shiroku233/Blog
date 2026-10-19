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

// 发布文章
app.post('/api/articles', async (req, res) => {
  try {
    const { title, content, summary, date, tags } = req.body

    if (!title) {
      return res.status(400).json({ message: '标题不能为空' })
    }

    const article = await Article.create({
      title,
      content,
      summary,
      date: date || new Date().toISOString().slice(0, 10),
      tags: tags || [],
    })

    res.status(201).json(article)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// 更新文章
app.put('/api/articles/:id', async (req, res) => {
  const article = await Article.findByPk(req.params.id)
  if (!article) return res.status(404).json({ message: '文章不存在' })
  await article.update(req.body)
  res.json(article)
})

// 删除文章
app.delete('/api/articles/:id', async (req, res) => {
  const article = await Article.findByPk(req.params.id)
  if (!article) return res.status(404).json({ message: '文章不存在' })
  await article.destroy()
  res.json({ message: '已删除' })
})