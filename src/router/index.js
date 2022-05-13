import { createRouter, createWebHistory } from 'vue-router'
import userRegister from '../views/UserRegister.vue'

const routes = [
  {
    path: '/',
    name: 'Registro de Usuário',
    component: userRegister
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
    path: '/userRegister',
    name: 'Registro de Usuários',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/UserRegister.vue')
  },
  {
    path: '/userConsult',
    name: 'Consulta de Usuários',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/UserConsult.vue')
  },
  {
    path: '/clientConsult',
    name: 'Consulta de Clientes',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ClientConsult.vue')
  },
  {
    path: '/vendorWalletClient',
    name: 'Minha Carteira Client',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/VendorClientConsult.vue')
  },
  {
    path: '/vendorWallet',
    name: 'Minha Carteira',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/VendorWallet.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
