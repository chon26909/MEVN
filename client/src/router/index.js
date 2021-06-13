import { createWebHistory, createRouter } from "vue-router";
import Home from "@/components/Home.vue";
import Create from "@/components/Create.vue"
import Edit from "@/components/Edit.vue";
import List from "@/components/List.vue";

const routes = [
    {
        path: "/",
        name: "Create",
        component: Create
    },
    {
        path: "/home",
        name: "Home",
        component: Home,
    },
    {
        path: "/view",
        name: "View",
        component: List,
    },
    {
        path: "/edit/:id",
        name: "Edit",
        component: Edit
    },
    {
        path: "/*",
        component: Create
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;