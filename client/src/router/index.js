import { createWebHistory, createRouter } from "vue-router";
import Create from "@/components/Home.vue";
import Edit from "@/components/Edit.vue";
import List from "@/components/List.vue";

const routes = [{
        path: "/",
        name: "Home",
        component: Create,
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
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;