import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
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
    path: '/checkout',
    name: 'checkout',
    component: () => import('../views/CheckOut.vue'),
  }, {
    path: '/confirm',
    name: 'confirm',
    component: () => import('../views/ConFirm.vue'),
    children: [{
      path: 'order',
      component:()=>import('../components/OrderCom.vue')
    }]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
