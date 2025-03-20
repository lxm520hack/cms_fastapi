import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Manager',
            component: () => import('../views/Manager.vue'),
            redirect: '/home',
            children: [
                {path: 'home', name: 'Home', component: () => import('../views/manager/Home.vue')},
            ]
        }
    ]
})

export default router