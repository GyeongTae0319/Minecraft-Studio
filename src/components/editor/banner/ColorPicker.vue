<template>
    <div class="color-picker">
        <app-button
            v-for="(color, key) in BannerColorList"
            :key="key"
            :style="{
                'background-color': color.hex
            }"
            class="color"
            @click="() => onClickColor(color)"
        >
            <app-tooltip>{{ $i18n.t(`color.minecraft.${key}`) }}</app-tooltip>
        </app-button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { BannerColor, BannerColorList } from "@/assets/lib/banner";

export default defineComponent({
    name: "BannerColorPicker",
    emits: {
        select(payload: BannerColor) {
            return true;
        }
    },
    data() {
        return { BannerColorList };
    },
    methods: {
        onClickColor(color: BannerColor) {
            this.$emit("select", color);
        }
    }
});
</script>

<style lang="scss" scoped>
$color-size: $pixel-unit * 10;

.color-picker {
    display: flex;
    flex-wrap: wrap;

    width: $color-size * 8;
    height: $color-size * 2;

    .color {
        position: relative;

        width: $color-size;
        height: $color-size;

        border: $pixel-unit solid #fff;
        border-color: rgba(#fff, 0.1) rgba(#000, 0.1) rgba(#000, 0.1) rgba(#fff, 0.1);

        transition: border-color 0.05s;

        &:hover,
        &.keyboard-mode:focus {
            border-color: rgba(#fff, 0.25) rgba(#000, 0.25) rgba(#000, 0.25) rgba(#fff, 0.25);
        }
        &:active {
            border-color: rgba(#000, 0.1) rgba(#fff, 0.1) rgba(#fff, 0.1) rgba(#000, 0.1);;
        }
    }
}
</style>
