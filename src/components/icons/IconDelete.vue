<template>
    <icon-base width="16" height="16">
        <path d="M7 2H9V3H13V4H3V3H7V2Z" />
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4 5H12V13H11V14H5V13H4V5ZM10 6H11V12H10V6ZM9 6H8V13H9V6ZM6 6H7V13H6V6Z"
        />
    </icon-base>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import IconBaseVue from "./IconBase.vue";

export default defineComponent({
    components: {
        IconBase: IconBaseVue
    }
});
</script>
