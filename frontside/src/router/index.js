import { createRouter, createWebHistory } from 'vue-router'
import PageHome from '../views/PageHome.vue'
import PageAbout from '../views/PageAbout.vue'


// Declare routes
const routes = [
    {
        path: '/',
        name: 'home-view',
        component: PageHome
    },
    {
        path: '/about',
        name: 'about-view',
        component: PageAbout
    }
]

// Calling routes for CreateRouter
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
