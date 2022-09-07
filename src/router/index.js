import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }, {
    path: '/Login',
    name: 'Login',
    component: () => import('../views/LoginView.vue')
  }, {
    path: '/LoginOK',
    name: 'LoginOK',
    component: () => import('../views/LoginOK.vue'),
    children: [{
      path: 'ObtAin',
      component: () => import('../views/ObtAin.vue')
    },{
      path: 'TvWall',
      component: () => import('../views/TvWall.vue')
    },{
      path: 'SFt',
      component: () => import('../views/SFt.vue')
    },{
      path: 'Order',
      component: () => import('../views/OrDer.vue')
    },{
      path: 'CouPon',
      component: () => import('../views/VouCher.vue')
    }]
  }, {
    path: '/seafishing',
    name: 'seafishing',
    component: () => import('../views/SeaFishing.vue')
  }, {
    path: '/CommoDity',
    name: 'CommoDity',
    component: () => import('../views/CommoDity.vue')
  }, {
    path: '/gobay',
    name: 'gobay',
    component: () => import('../views/GoBuy.vue'),
  }, {
    path: '/confirm',
    name: 'confirm',
    component: () => import('../views/ConFirm.vue'),
    children: [{
      path: 'checkout',
      component:()=>import('../views/CheckOut')
    },{
      path: 'order',
      component:()=>import('../components/OrderCom.vue')
    },{
      path:'consummation',
      component:()=>import('../components/ConsummAtion.vue')
    }]
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
