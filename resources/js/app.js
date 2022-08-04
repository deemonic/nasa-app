require('./bootstrap');

import { createApp} from "vue"
import Search from "./components/Search"

const app = createApp({})
app.component('search', Search)
app.mount('#app')