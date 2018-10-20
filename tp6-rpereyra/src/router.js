import Vue from 'vue'
import Router from 'vue-router'
import Persons from './views/Persons.vue'
import PersonUpdate from './views/PersonUpdate.vue'
import PersonCreate from './views/PersonCreate.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'persons',
      component: Persons
    },
    {
      path: '/persons/update/:id',
      name: 'personUpdate',
      component: PersonUpdate
    },
    {
      path: '/persons/create',
      name: 'personCreate',
      component: PersonCreate
    }
  ]
})
