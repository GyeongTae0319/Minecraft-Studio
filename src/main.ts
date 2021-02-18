import { createApp } from "vue";
import App from "@/views/App.vue";
// Plugins
import router from "@/plugins/router";
import store from "@/plugins/store";
import i18n from "@/plugins/i18n";
import a11y from "@/plugins/a11y";

const app = createApp(App)
    .use(store)
    .use(router)
    .use(i18n)
    .use(a11y);

import AppButton from "@/components/AppButton.vue";
app.component("app-button", AppButton);

app.mount("#app");
