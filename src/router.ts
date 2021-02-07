import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import i18n from "@/i18n";

// Route structure
const routes: Array<RouteRecordRaw> = [
    { // Root
        path: "/",
        name: "root",
        component: { template: "<div/>" }
    },
    { // Index Page
        path: "/:lang/",
        name: "home",
        component: () => import(
            /* webpackChunkName: "home" */
            "@/views/Home.vue"
        )
    },
    // * Block Pages * //
    { // Banner
        path: "/:lang/block/banner",
        name: "blocks-banner",
        component: () => import (
            /* webpackChunkName: "blocks-banner" */
            "@/views/Blocks/Banner.vue"
        )
    },
    { // 404 Not Found
        path: "/:lang/:catchAll(.*)",
        name: "error",
        component: () => import(
            /* webpackChunkName: "error" */
            "@/views/Error.vue"
        ),
        meta: { layout: "blank" }
    }
];

// Router init
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

// Language guard
router.beforeEach((to, from, next) => {
    const lang = to.params["lang"] as string;
    if (i18n.setLocale(lang)) {
        next();
    } else {
        i18n.setLocale(window.navigator.language);
        if (to.name === "root") next({
            name: "home",
            params: {
                lang: i18n.getLocale()
            }
        });
        else {
            to.params["lang"] = i18n.getLocale();
            next(to);
        }
    }
});

export default router;
