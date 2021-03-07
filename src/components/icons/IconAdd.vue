<template>
    <icon-base width="16" height="16">
        <path d="M9 2H7V7H2V9H7V14H9V9H14V7H9V2Z" />
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
