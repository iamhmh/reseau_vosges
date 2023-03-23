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
        path: 'profilmembre',
        component: () => import('@/views/ProfilMembrePage.vue')
      },
      {
        path: 'settings',
        component: () => import('@/views/setting/AppSettingPage.vue')
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
      {
        path: 'bonmpb',
        component: () => import('@/components/bons/BonMPBPage.vue')
      },
      {
        path: 'bonreco',
        component: () => import('@/components/bons/BonRecoPage.vue')
      },
      {
        path: 'bonfacetoface',
        component: () => import('@/components/bons/BonTeteATetePage.vue')
      },
      {
        path: 'addmpb',
        component: () => import('@/components/bons/EnregistrerUnMPB.vue')
      },
      {
        path: 'addrecommendation',
        component: () => import('@/components/bons/EnregistrerUneReco.vue')
      },
      {
        path: 'addfacetoface',
        component: () => import('@/components/bons/EnregistrerUnTeteATete.vue')
      },
      {
        path: 'invitation/invitation1',
        component: () => import('@/components/EnregistrerUneVisite/Invitation1Page.vue')
      },
      {
        path: 'invitation/invitation2',
        component: () => import('@/components/EnregistrerUneVisite/Invitation2Page.vue')
      },
      {
        path: 'invitation/invitation3',
        component: () => import('@/components/EnregistrerUneVisite/Invitation3Page.vue')
      },
      {
        path: 'invitation/invitation4',
        component: () => import('@/components/EnregistrerUneVisite/Invitation4Page.vue')
      },
      {
        path: 'invitation/invitation5',
        component: () => import('@/components/EnregistrerUneVisite/Invitation5Page.vue')
      },
      {
        path: 'invitation/moi1',
        component: () => import('@/components/EnregistrerUneVisiteMoi/Moi1Page.vue')
      },
      {
        path: 'invitation/moi2',
        component: () => import('@/components/EnregistrerUneVisiteMoi/Moi2Page.vue')
      },
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/ConnexionPage.vue')
  },
  {
    path: '/admin',
    component: () => import('@/views/AdminDashboardPage.vue'),
    children : [
      {
        path: 'addmember',
        component: () => import('@/components/admin/member/AddMemberPage.vue')
      },
      {
        path: 'editmember',
        component: () => import('@/components/admin/member/EditMemberPage.vue')
      },
      {
        path: 'deletemember',
        component: () => import('@/components/admin/member/DeleteMemberPage.vue')
      },
      {
        path: 'creategroup',
        component: () => import('@/components/admin/group/CreateGroupPage.vue')
      },
      {
        path: 'editgroup',
        component: () => import('@/components/admin/group/EditGroupPage.vue')
      },
      {
        path: 'addmembergroup',
        component: () => import('@/components/admin/group/AddMemberGroupPage.vue')
      },
      {
        path: 'deletemembergroup',
        component: () => import('@/components/admin/group/DeleteMemberGroupPage.vue')
      },
      {
        path: 'createmeeting',
        component: () => import('@/components/admin/meeting/CreateMeetingPage.vue')
      },
      {
        path: 'editmeeting',
        component: () => import('@/components/admin/meeting/EditMeetingPage.vue')
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
