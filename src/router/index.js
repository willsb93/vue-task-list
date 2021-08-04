import { createRouter, createWebHistory } from "vue-router";
import About "..\views\About.vue"

const routes = {
    path: "/about",
    name: "About",
    component: About
}

const router = createRouter({
        history: createWebHistory(process.env.BASE_URL),routes,
})

export default router;