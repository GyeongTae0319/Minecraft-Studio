import { createApp } from "vue";
import App from "@/App.vue";
// Plugins
import router from "@/router";
import store from "@/store";
import i18n from "@/i18n";
import a11y from "@/a11y";

const app = createApp(App)
    .use(store)
    .use(router)
    .use(i18n)
    .use(a11y);

import AppButton from "@/components/AppButton.vue";
app.component("app-button", AppButton);

app.mount("#app");
