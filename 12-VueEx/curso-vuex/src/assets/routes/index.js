import Vue from 'vue'
import VueRouter from 'vue-router'

import homeComponent from '../components/home/homeComponent'
import taskComponent from '../components/task/taskComponent'

Vue.use(VueRouter)

const routes = [
    {path: '/', component: homeComponent, name: 'home'},
    {path: '/tasks', component: taskComponent, name: 'tasks'},
]

export default new VueRouter({
  mode: 'history',
  routes
})