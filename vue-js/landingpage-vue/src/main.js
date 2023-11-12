import './assets/style.css'

import { createRouter, createWebHistory } from 'vue-router'; 

import { createApp } from 'vue'
import App from './App.vue'

import Home from '@/components/Beranda/Beranda.vue';
import Portofolio from '@/components/Beranda/Portofolio.vue';
import Blog from '@/components/Beranda/Blog.vue';
import Contact from '@/components/Beranda/Contact.vue';

const routes = [
  {
    path: "/",
    component: Home,
    name: "Home"
  },
  {
    path: "/portofolio",
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

createApp(App).use(router).mount('#app');



