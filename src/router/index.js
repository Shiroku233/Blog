import { createRouter,createWebHistory } from "vue-router"
import Home from '../views/Home.vue'
import TagArticles from "@/views/TagArticles.vue"
import NotFound from "@/views/NotFound.vue"

const routes=[
    {
        path:'/',
        name:'Home',
        component:Home,
    },
    {
        path: '/article/:id',
        name: 'ArticleDetail',
        component: () => import('../views/ArticleDetail.vue'),
    },
    {
        path:'/tag/:tag',
        name:'TagArticles',
        component:TagArticles,
    },
    //NotFound必须放在最后
    {
        path:'/:pathMatch(.*)*',
        name:'NotFound',
        component:NotFound,
    }
    
]

const router=createRouter({
    history:createWebHistory(),
    routes,
})
export default router