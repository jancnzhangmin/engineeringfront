// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import './assets/iconfont/iconfont.css'
import router from './router'
import { LoadingPlugin, DatetimePlugin } from 'vux'
import global from './store/global.js'

Vue.use(VueRouter)
Vue.use(Vuex)

Vue.prototype.$global = global

const history = window.sessionStorage
history.clear()
const shouldUseTransition = !/transition=none/.test(location.href)
let historyCount = history.getItem('count') * 1 || 0
history.setItem('/', 0)
let isPush = false
let endTime = Date.now()
let isTouchStart = false

let store = new Vuex.Store({
    modules: {
        vux: {
            state: {
                demoScrollTop: 0,
                isLoading: false,
                direction: shouldUseTransition ? 'forward' : ''
            },
            mutations: {
                updateDemoPosition (state, payload) {
                    state.demoScrollTop = payload.top
                },
                updateLoadingStatus (state, payload) {
                    state.isLoading = payload.isLoading
                },
                updateDirection (state, payload) {
                    if (!shouldUseTransition) {
                        return
                    }
                    state.direction = payload.direction
                }
            },
            actions: {
                updateDemoPosition ({ commit }, top) {
                    commit({ type: 'updateDemoPosition', top: top })
                }
            }
        }
    }
})
Vue.use(LoadingPlugin)
Vue.use(DatetimePlugin)

FastClick.attach(document.body)

Vue.config.productionTip = false

router.beforeEach(function (to, from, next) {
    store.commit('updateLoadingStatus', { isLoading: true })

    const toIndex = history.getItem(to.path)
    const fromIndex = history.getItem(from.path)
    let direction

    if (toIndex) {
        if (!fromIndex || parseInt(toIndex, 10) > parseInt(fromIndex, 10) || (toIndex === '0' && fromIndex === '0')) {
            direction = 'forward'
        } else {
            direction = 'reverse'
        }
    } else {
        ++historyCount
        history.setItem('count', historyCount)
        to.path !== '/' && history.setItem(to.path, historyCount)
        direction = 'forward'
    }

    // 判断是否是ios左滑返回 或者 右滑前进
    if (toIndex && toIndex !== '0' && !isPush && (((Date.now() - endTime) < 377) || isTouchStart)) {
        store.commit('updateDirection', { direction: '' })
    } else {
        store.commit('updateDirection', { direction: direction })
    }
    isTouchStart = false

    if (/\/http/.test(to.path)) {
        let url = to.path.split('http')[1]
        window.location.href = `http${url}`
    } else {
        next()
    }
})

router.afterEach(function (to) {
    isPush = false
    store.commit('updateLoadingStatus', { isLoading: false })
})

/* eslint-disable no-new */
new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app-box')
