import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LinksView from '../views/LinksView.vue'
import GettingStartedView from '../views/GettingStartedView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/links',
      name: 'links',
      component: LinksView
    },
    {
      path: '/getting-started',
      name: 'getting-started',
      component: GettingStartedView
    }
  ]
})

export default router
