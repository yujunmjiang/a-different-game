import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import GetProduction from '../views/GetProduction.vue';
import GetRevenue from '../views/GetRevenue.vue';
import GetCommunity from '../views/GetCommunity.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/getproduction',
    name: 'GetProduction',
    component: GetProduction
  },
  {
    path: '/getrevenue',
    name: 'GetRevenue',
    component: GetRevenue
  },
  {
    path: '/getcommunity',
    name: 'GetCommunity',
    component: GetCommunity
  }
]

const router = createRouter({
  history: createWebHistory(),
  base:'/a-different-game/',
  routes
})

export default router
