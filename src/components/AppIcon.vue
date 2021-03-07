<template>
    <component :is="`icon-${icon}`" class="app-icon" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Icons from "./icons";

export default defineComponent({
    components: {
        ...Icons
    },
    props: {
        icon: {
            type: String,
            required: true
        },
        fill: {
            type: String,
            default: "currentColor"
        }
    }
});
</script>

<style lang="scss" scoped>
.app-icon {
    fill: currentColor;
}
</style>
