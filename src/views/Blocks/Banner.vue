<template>
    <div class="page-blocks-banner">
        <banner-pattern-editor></banner-pattern-editor>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BannerPatternEditorVue from "@/components/editor/banner/BannerPatternEditor.vue";

export default defineComponent({
    name: "PageBlocksBanner",
    components: {
        BannerPatternEditor: BannerPatternEditorVue
    }
});
</script>

<style lang="scss" scoped>

</style>
