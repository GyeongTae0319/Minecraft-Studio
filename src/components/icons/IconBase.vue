<template>
    <svg :width="width" :height="height" :viewBox="`0 0 ${width} ${height}`">
        <slot />
    </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    props: {
        width: {
            type: [Number, String],
            default: 16
        },
        height: {
            type: [Number, String],
            default: 16
        }
    }
});
</script>
