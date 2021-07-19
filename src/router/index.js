import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Services from '@/views/Services.vue';
import Monopage from '@/views/Monopage.vue';
import Multipage from '@/views/Multipage.vue';
import Ecommerce from '@/views/Ecommerce.vue';
import Tarifs from '@/views/Tarifs.vue';
import Application from '@/views/Application.vue';
import Mentions from '@/views/Mentions.vue';
import Cgv from '@/views/Cgv.vue';
import Confidentialite from '@/views/Confidentialite.vue';
import Contact from '@/views/Contact.vue';



/*import Realisations from '@/views/Realisations.vue';
import Tarifs from '@/views/Tarifs.vue';

import SiteInternet from '@/views/SiteInternet.vue';
import SitePerso from '@/views/SitePerso.vue';
import SiteCommerce from '@/views/SiteCommerce.vue';
import SiteSpecifique from '@/views/SiteSpecifique.vue';


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
    },
    {
        name: 'Monopage',
        path: '/monopage',
        component: Monopage,
        meta: {
            title: 'Monopage'
        }
    },
    {
        name: 'Multipage',
        path: '/multipage',
        component: Multipage,
        meta: {
            title: 'Multipage'
        }
    },
    {
        name: 'Ecommerce',
        path: '/ecommerce',
        component: Ecommerce,
        meta: {
            title: 'Ecommerce'
        }
    },
    {
        name: 'Application',
        path: '/api',
        component: Application,
        meta: {
            title: 'Application'
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
        name: 'Mentions',
        path: '/mentions',
        component: Mentions,
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
        name: 'Confidentialite',
        path: '/confidentialite',
        component: Confidentialite,
        meta: {
            title: 'confidentialite'
        }
    },
    {
        name: 'Contact',
        path: '/contact',
        component: Contact,
        meta: {
            title: 'Contact'
        }
    }
    /*,
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