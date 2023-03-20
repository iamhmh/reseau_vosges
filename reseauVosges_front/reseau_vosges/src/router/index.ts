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
        path: 'bonmpb',
        component: () => import('@/views/bons/BonMPBPage.vue')
      },
      {
        path: 'bonreco',
        component: () => import('@/views/bons/BonRecoPage.vue')
      },
      {
        path: 'bonfacetoface',
        component: () => import('@/views/bons/BonTeteATetePage.vue')
      },
      {
        path: 'addmpb',
        component: () => import('@/views/tools/EnregistrerUnMPB.vue')
      },
      {
        path: 'addrecommendation',
        component: () => import('@/views/tools/BonDeRecommandation.vue')
      },
      {
        path: 'addfacetoface',
        component: () => import('@/views/tools/TeteATete.vue')
      },
      {
        path: 'userprofile',
        component: () => import('@/views/ProfilPage.vue')
      },
      {
        path: 'userprofile/photo',
        component: () => import('@/components/UserProfile/PhotoUser.vue')
      },
      {
        path: 'userprofile/address',
        component: () => import('@/components/UserProfile/AdresseUser.vue')
      },
      {
        path: 'userprofile/contact',
        component: () => import('@/components/UserProfile/ContactUser.vue')
      },
      {
        path: 'userprofile/maj_username',
        component: () => import('@/components/UserProfile/MajNomUser.vue')
      },
      {
        path: 'userprofile/maj_password',
        component: () => import('@/components/UserProfile/MajPasswordUser.vue')
      },
      {
        path: 'userprofile/mybusiness',
        component: () => import('@/components/UserProfile/MonBusinessUser.vue')
      },
      {
        path: 'userprofile/user_account_params',
        component: () => import('@/components/UserProfile/ParametreCompteUser.vue')
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
