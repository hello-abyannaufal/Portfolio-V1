import { createRouter, createWebHistory } from 'vue-router'
import PageHome from '../views/PageHome.vue'
import PageAbout from '../views/PageAbout.vue'
import PagePortfolio from '../views/PagePortfolio.vue'
import PageCertificate from '../views/PageCertificate.vue'


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
    },
    {
        path: '/portfolio',
        name: 'portfolio-view',
        component: PagePortfolio
    },
    {
        path: '/certificate',
        name: 'certificate-view',
        component: PageCertificate
    },
]

// Calling routes for CreateRouter
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
