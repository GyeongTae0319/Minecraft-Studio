<template>
    <div class="pattern-picker">
        <template v-for="(pattern, key) in BannerPatternList">
            <app-button
                v-if="key != 'base'"
                :key="key"
                class="pattern"
                @click="() => onClickPattern(key)"
            >
                <pattern-canvas color="black" class="base" />
                <pattern-canvas :pattern="key" class="over" />
            </app-button>
        </template>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { BannerPatternList } from "@/assets/lib/banner";
import PatternCanvas from "./PatternCanvas.vue";

export default defineComponent({
    name: "BannerPatternPicker",
    components: {
        PatternCanvas
    },
    props: {
        modelValue: {
            type: String,
            default: "base"
        }
    },
    emits: {
        "update:modelValue": (payload: string) => {
            return Object.keys(BannerPatternList).includes(payload);
        }
    },
    data() {
        return { BannerPatternList };
    },
    methods: {
        onClickPattern(pattern: string) {
            this.$emit("update:modelValue", pattern);
        }
    }
});
</script>

<style lang="scss" scoped>
$pattern-width: $pixel-unit * 10;

.pattern-picker {
    display: flex;
    flex-wrap: wrap;

    width: $pattern-width * 8;

    .pattern {
        position: relative;

        width: $pattern-width;
        height: $pattern-width * 2;

        > canvas {
            width: 100%;
        }
        .over {
            position: absolute;
            top: 0;
            left: 0;
        }
    }
}
</style>
