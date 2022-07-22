import Vue from 'vue'
import VueRouter from 'vue-router'
import BookHome  from '../views/BookHome.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: BookHome
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import(/* webpackChunkName: "about" */ '../views/BookContactUs.vue')
  },
  {
    path: '/books/:bookId',
    name: 'bookDetails',
    component: () => import(/* webpackChunkName: "about" */ '../views/BookDetails.vue')
  },
  {
    path: '/team',
    name: 'team',
    component: () => import(/* webpackChunkName: "about" */ '../views/BookTeam.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
