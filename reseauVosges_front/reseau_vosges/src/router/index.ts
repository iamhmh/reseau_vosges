import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/home'
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/home'
      },
      {
        path: 'home',
        component: () => import('@/views/AccueilPage.vue')
      },
      {
        path: 'actualite',
        component: () => import('@/views/FilActualitePage.vue')
      },
      {
        path: 'rechercher',
        component: () => import('@/views/RechercherPage.vue')
      },
      {
        path: 'invitation',
        component: () => import('@/views/InvitationPage.vue')
      },
      {
        path: 'addmpb',
        component: () => import('@/views/EnregistrerUnMPB.vue')
      },
      {
        path: 'userprofile',
        component: () => import('@/views/ProfilPage.vue')
      },
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/ConnexionPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
