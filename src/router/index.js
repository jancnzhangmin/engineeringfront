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
                },
                {
                    path: 'ower',
                    name: 'ower',
                    meta: {
                        index: 4
                    },
                    component: () => import('@/views/ower/Index.vue')
                }
            ]
        },
        {
            path: '/creatework',
            name: 'creatework',
            component: () => import('@/views/work/Creatework.vue')
        },
        {
            path: '/ower/currentproject',
            name: 'owercurrentproject',
            component: () => import('@/views/ower/project/Index.vue')
        },
        {
            path: '/ower/currentproject/new',
            name: 'owercurrentprojectnew',
            component: () => import('@/views/ower/project/New.vue')
        },
        {
            path: '/ower/currentproject/edit/:id',
            name: 'owercurrentprojectedit',
            component: () => import('@/views/ower/project/Edit.vue'),
            props: true
        },
        {
            path: '/ower/setting',
            name: 'owersetting',
            component: () => import('@/views/ower/setting/Index.vue')
        },
        {
            path: '/ower/notice',
            name: 'owernotice',
            component: () => import('@/views/ower/notice/Index.vue')
        },
        {
            path: '/ower/notice/new',
            name: 'owernoticenew',
            component: () => import('@/views/ower/notice/New.vue')
        },
        {
            path: '/ower/notice/show/:id',
            name: 'owernoticeshow',
            component: () => import('@/views/ower/notice/Show.vue'),
            props: true
        },
        {
            path: '/ower/notice/edit/:id',
            name: 'owernoticeedit',
            component: () => import('@/views/ower/notice/Edit.vue'),
            props: true
        },
        {
            path: '/ower/myorder',
            name: 'owermyorder',
            component: () => import('@/views/ower/myorder/Index.vue')
        },
        {
            path: '/ower/myorder/new',
            name: 'owermyordernew',
            component: () => import('@/views/ower/myorder/New.vue')
        },
        {
            path: '/ower/myorder/show/:id',
            name: 'owermyordershow',
            component: () => import('@/views/ower/myorder/Show.vue'),
            props: true
        }
    ]
})
