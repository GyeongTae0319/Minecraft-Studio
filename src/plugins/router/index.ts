import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import i18n from "@/plugins/i18n";
// Router view template
import Blank from "@/views/Blank.vue";

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
    { // Blocks Pages
        path: "/:lang/blocks",
        component: Blank,
        children: [
            { // Home
                path: "",
                name: "blocks",
                component: () => import(
                    /* webpackChunkName: "blocks" */
                    "@/views/Blocks/Home.vue"
                )
            },
            { // Banner
                path: "banner",
                name: "blocks-banner",
                component: () => import(
                    /* webpackChunkName: "blocks-banner" */
                    "@/views/Blocks/Banner.vue"
                )
            }
        ]
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
    const lang = to.params["lang"] as string | undefined;
    if (lang && i18n.setLocale(lang)) {
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
