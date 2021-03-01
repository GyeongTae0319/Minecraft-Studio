<template>
    <div class="banner-pattern-editor">
        <color-picker />
        <pattern-picker v-model="selected.pattern" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ColorPickerVue from "./ColorPicker.vue";
import PatternPicker from "./PatternPicker.vue";

export default defineComponent({
    name: "BannerPatternEditor",
    components: {
        ColorPicker: ColorPickerVue,
        PatternPicker: PatternPicker
    },
    data() {
        return {
            selected: {
                color: "",
                pattern: "base"
            }
        };
    }
});
</script>

<style lang="scss" scoped>

</style>
