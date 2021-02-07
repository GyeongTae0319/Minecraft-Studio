<template>
    <div id="appLayout">
        <app-aside/>
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
    display: flex;

    #appMain {
        flex: 1 1 0;
    }
}
</style>
