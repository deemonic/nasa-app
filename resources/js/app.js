require('./bootstrap');

import { createApp } from "vue"
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from "vue-router"
import Search from "./components/Search"
import Asset  from "./components/Asset"

const routes = [
    { path: '/', component: Search, name: 'search' },
    { path: '/asset/:id', component: Asset, name: 'asset' },
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

const pinia = createPinia()

const app = createApp({})
app.use(router)
app.use(pinia)
app.mount('#app')
