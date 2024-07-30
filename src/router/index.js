import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/students/:id',
      name: 'students',
      component: () => import('../views/StudentView.vue'),
      props: true
    },
    {
       path: '/attendance/:id',
       name: 'attendance',
       component: () => import('../views/AttendanceView.vue'),
       props: true
    },
    { 
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('../views/Dashboard.vue'),
        children: [
          {
            path: '/classes',
            name: 'classes',
            component: () => import('../views/ClassView.vue')
         }
        ]
    }
  ]
})

export default router
