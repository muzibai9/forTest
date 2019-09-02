import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: () => import('../views/layout/layout'),
      children: [{
        path: '/lv',
        name: 'lv',
        component: () => import('../views/lv'),
      }]
    },
  ]
})
