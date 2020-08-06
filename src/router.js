import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const router = new Router({
    base: process.env.BASE_URL,
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'dashboard',
            meta: {title: 'Dashboard'},
            component: () => import('./views/Dashboard.vue')
        },
    ]
})
router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    next()
})
export default router;