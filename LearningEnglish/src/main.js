import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'

import carousel from "@/components/carousel.vue";
import pageFooter from "@/components/footer.vue";
import pageHead from "@/components/header.vue";
import suggest from "@/components/SuggestedReading.vue";
import people from "@/components/people.vue"


const app = createApp(App)

app.use(router)
app.component('carousel', carousel)
app.component('pageFoot', pageFooter)
app.component('pageHead', pageHead)
app.component('suggest', suggest)
app.component('people', people)



app.mount('#app')
