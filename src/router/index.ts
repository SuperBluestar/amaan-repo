import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/page-1',
    name: 'page-1',
    component: () => import('../views/Page1.vue')
  },
  {
    path: '/page-2',
    name: 'page-2',
    component: () => import('../views/Page2.vue')
  },
  {
    path: '/page-3',
    name: 'page-3',
    component: () => import('../views/Page3.vue')
  },
  {
    path: '/page-4',
    name: 'page-4',
    component: () => import('../views/Page4.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
