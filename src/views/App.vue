<template>
    <component :is="`layout-${getLayout}`">
        <router-view/>
    </component>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// Components
import layoutDefault from "@/components/layout/Default.vue";
import layoutBlank from "@/components/layout/Blank.vue";

export default defineComponent({
    name: "AppLayout",
    components: {
        layoutDefault,
        layoutBlank
    },
    computed: {
        getLayout(): string {
            return this.$route.meta["layout"] || "default";
        }
    }
});
</script>

<style lang="scss">
*,
*::before,
*::after {
    box-sizing: border-box;

    margin: 0;
    padding: 0;

    border: none;
    outline: none;
    background: none;

    color: inherit;
    font: inherit;
    text-decoration: inherit;

    image-rendering: pixelated;

    @media (prefers-reduced-motion) {
        transition: none !important;
    }
}

html {
    @include block-background("gray_concrete");
    background-color: rgba(#000, 0.25);

    color: #fff;
    font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
