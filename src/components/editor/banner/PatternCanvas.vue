<template>
    <canvas width="20" height="40" class="pattern-canvas" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { BannerColorList, BannerPatternList } from "@/assets/lib/banner";

export default defineComponent({
    name: "BannerPatternCanvas",
    props: {
        pattern: {
            type: String,
            default: "base",
            validator(pattern: string) {
                return Object.keys(BannerPatternList).includes(pattern);
            }
        },
        color: {
            type: String,
            default: "white",
            validator(color: string) {
                return Object.keys(BannerColorList).includes(color);
            }
        }
    },
    mounted() {
        const canvas = this.$el as HTMLCanvasElement;
        const context = canvas.getContext("2d");
        if (!context) return;

        const image = new Image();
        image.addEventListener("load", () => {
            context.drawImage(image, 1, 1, 20, 40, 0, 0, 20, 40);
            context.globalCompositeOperation = "multiply";
            context.fillStyle = BannerColorList[this.color].hex;
            context.fillRect(0, 0, 20, 40);
            context.globalCompositeOperation = "destination-atop";
            context.drawImage(image, 1, 1, 20, 40, 0, 0, 20, 40);
        });
        image.src = BannerPatternList[this.pattern].image;
    }
});
</script>

<style lang="scss" scoped>

</style>
