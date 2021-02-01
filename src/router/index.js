import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ProjectsPage from '../views/ProjectsPage.vue'
import Tadlace from "../views/Tadlace"

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/projects',
    name: 'PorjectsPage',
    component: ProjectsPage,
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/partystore',
    name: 'Party Store',
    component: () => import('../views/partystore')

  },
  {
    path: '/tadlace',
    name: 'Tadlace',
    component: Tadlace,
  },
  {
    path: '*',
    component: Home
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router