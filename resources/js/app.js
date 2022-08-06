require('./bootstrap');

import { createApp} from "vue"
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

const app = createApp({})
app.use(router)
app.mount('#app')