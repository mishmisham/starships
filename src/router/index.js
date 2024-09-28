import { createRouter, createWebHistory } from 'vue-router'
import StarshipList from '../views/StarshipList.vue'

const routes = [
  {
    path: '/',
    name: 'Starship list',
    component: StarshipList
  },
  {
    path: '/starship/:id',
    name: 'About starship',
    component: () => import('../views/StarshipAbout.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
