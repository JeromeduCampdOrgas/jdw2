import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Services from '@/views/Services.vue';
/*import Realisations from '@/views/Realisations.vue';
import Tarifs from '@/views/Tarifs.vue';
import Contact from '@/views/Contact.vue';
import SiteInternet from '@/views/SiteInternet.vue';
import SitePerso from '@/views/SitePerso.vue';
import SiteCommerce from '@/views/SiteCommerce.vue';
import SiteSpecifique from '@/views/SiteSpecifique.vue';
import MentionsLegales from '@/views/MentionsLegales.vue';
import Cgv from '@/views/Cgv.vue';
import NotFound from '@/views/NotFound.vue';*/

const routes = [
    {
        name: 'Home',
        path: '/',
        component: Home,
        meta: {
            title: 'Accueil'
        }
    },
    {
        name: 'Services',
        path: '/services',
        component: Services,
        meta: {
            title: 'Services'
        }
    }/*,
    {
        name: 'Realisations',
        path: '/realisations',
        component: Realisations,
        meta: {
            title: 'Réalisations'
        }
    },
    {
        name: 'Tarifs',
        path: '/tarifs',
        component: Tarifs,
        meta: {
            title: 'Tarifs'
        }
    },
    {
        name: 'Contact',
        path: '/contact',
        component: Contact,
        meta: {
            title: 'Contact'
        }
    },
    {
        name: 'Vitrine',
        path: '/vitrine',
        component: SiteInternet,
        meta: {
            title: 'vitrine'
        }
    },
    {
        name: 'Personnalise',
        path: '/personnalise',
        component: SitePerso,
        meta: {
            title: 'personnalise'
        }
    },
    {
        name: 'Commerce',
        path: '/commerce',
        component: SiteCommerce,
        meta: {
            title: 'commerce'
        }
    },
    {
        name: 'Specifique',
        path: '/api',
        component: SiteSpecifique,
        meta: {
            title: 'Api'
        }
    },
    {
        name: 'Mentions',
        path: '/mentions',
        component: MentionsLegales,
        meta: {
            title: 'mentions'
        }
    },
    {
        name: 'Cgv',
        path: '/cgv',
        component: Cgv,
        meta: {
            title: 'cgv'
        }
    },
    {
        name: 'NotFound',
        path: '/:pathMatch(.*)',
        component: NotFound,
        meta: {
            title: '404 Not Found'
        }
    }*/

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.afterEach((to, from) => {
    console.log(from, to);
    document.title = to.meta.title;
})
export default router;