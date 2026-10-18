import request from './request'

export function getArticles(){
    return request.get('/articles')
}

export function getArticle(id){
    return request.get(`/articles/${id}`)
}