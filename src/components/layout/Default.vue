<template>
    <div id="appLayout">
        <app-aside id="appAside" />
        <main id="appMain">
            <!-- <header id="appHeader"></header> -->
            <slot/>
        </main>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// Components
import AppAside from "@/components/layout/elements/AppAside/AppAside.vue";

export default defineComponent({
    name: "AppLayoutDefault",
    components: {
        AppAside
    }
});
</script>

<style lang="scss" scoped>
#appLayout {
    padding-left: $aside-width;

    #appAside {
        position: fixed;
        top: 0;
        left: 0;
    }
    #appMain {
        width: 100%;
    }
}
</style>
