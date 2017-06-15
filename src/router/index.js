
import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

const rank = _ => import('../views/rank')
const recommend = _ => import('../views/recommend')
const search = _ => import('../views/search')
const singer = _ => import('../views/singer')
const singerDetail = _ => import('../views/singer-detail')

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/rank',
      name: 'rank',
      component: rank
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: recommend
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path: '/singer',
      name: 'singer',
      component: singer,
      children: [{
        path: ':id',
        component: singerDetail
      }]
    }
  ]
})