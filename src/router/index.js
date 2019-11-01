import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/Index.vue'),
      redirect: '/await',
      children: [
        {
          path: '/await',
          name: 'await',
          meta: {
            index: 1
          },
          component: () => import('@/views/await/Index.vue')
        },
        {
          path: '/work',
          name: 'work',
          meta: {
            index: 2
          },
          component: () => import('@/views/work/Index.vue')
        }
      ]
    },
    {
      path: '/creatework',
      name: 'creatework',
      component: () => import('@/views/work/Creatework.vue')
    }
  ]
})
