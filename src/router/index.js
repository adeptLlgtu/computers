import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main'
import Iron from "../views/Iron";
import Order from "../views/Order";
import Login from "../views/Login";
import Registration from "../views/Registration";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/reg',
    name: 'Registration',
    component: Registration
  },
  {
    path: '/main',
    name: 'main',
    component: Main
  },
  {
    path: '/equipment',
    name: 'iron',
    component: Iron
  },
  {
    path: '/order',
    name: 'order',
    component: Order
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
