import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home';
import FAQ from "@/views/FAQ";
import Definitions from "@/views/Definitions";

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        }, {
            path: '/faq',
            name: 'FAQ',
            component: FAQ
        }, {
            path: '/define/:term',
            name: 'Definitions',
            component: Definitions
        }
    ]
});