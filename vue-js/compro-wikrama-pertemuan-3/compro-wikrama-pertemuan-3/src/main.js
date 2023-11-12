import '@/assets/style.css'
import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Portofolio from '@/pages/Portfolio.vue';
import Blog from '@/pages/Blog.vue';
import Contact from '@/pages/Contact.vue';

const routes = [
    {
    path: "/",
    name: "home",
    component: Home
    },
    {
    path: "/portfolio",
    component: Portofolio,
    name: "Portofolio"
    },
    {
    path: "/blog",
    component: Blog,
    name: "Blog"
    },
    {
    path: "/contact",
    component: Contact,
    name: "Contact"
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

createApp(App).use(router).mount('#app')