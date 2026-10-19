require('dotenv').config()
const sequelize = require('./config/db')
const Article = require('./models/Article')

async function seed() {
  await sequelize.sync()
  await Article.bulkCreate([
    { title: 'HTML 入门', content: '正文……', summary: '摘要……', date: '2026-10-01', tags: ['HTML', '前端'] },
    { title: 'CSS 布局', content: '正文……', summary: '摘要……', date: '2026-10-02', tags: ['CSS', '前端'] },
    { title: 'JS 基础', content: '正文……', summary: '摘要……', date: '2026-10-03', tags: ['JavaScript'] },
    { title: 'Vue 入门', content: '正文……', summary: '摘要……', date: '2026-10-04', tags: ['Vue', '前端'] },
  ])
  console.log('数据已导入')
  process.exit()
}

seed()