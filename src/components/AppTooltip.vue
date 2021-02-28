<template>
    <div :class="getClassList">
        <slot/>
    </div>
</template>

<script lang="ts">
import { ClassList } from "@/vue-global";
import { defineComponent } from "vue";

const DirectionList = ["up", "right", "down", "left"];
const AlignList = ["start", "center", "end"];

export default defineComponent({
    props: {
        dir: {
            type: String,
            default: "down",
            validator(dir: string) {
                return DirectionList.includes(dir);
            }
        },
        align: {
            type: String,
            default: "center",
            validator(align: string) {
                return AlignList.includes(align);
            }
        },
        gap: {
            type: String,
            default: "8px"
        }
    },
    computed: {
        getClassList(): ClassList {
            return ["app-tooltip", this.dir, this.align, {
                "keyboard-mode": this.$a11y.isKeyboardMode()
            }];
        }
    }
});
</script>

<style lang="scss" scoped>
.app-tooltip {
    --offset: 0px;

    opacity: 0;

    position: absolute;
    z-index: 1;

    padding: 2px 8px;

    border-radius: 4px;
    background-color: rgba(#000, 0.8);

    word-break: keep-all;

    transition: opacity 0.1s, top 0.1s, bottom 0.1s, right 0.1s, left 0.1s;

    pointer-events: none;

    &.up {
        bottom: calc(100% + var(--offset));
    }
    &.right {
        left: calc(100% + var(--offset));
    }
    &.down {
        top: calc(100% + var(--offset));
    }
    &.left {
        right: calc(100% + var(--offset));
    }

    &.start {
        &.up,
        &.down {
            left: 0;
        }
        &.left,
        &.right {
            top: 0
        }
    }
    &.center {
        &.up,
        &.down {
            left: 50%;
            transform: translateX(-50%);
        }
        &.left,
        &.right {
            top: 50%;
            transform: translateY(-50%);
        }
    }
    &.end {
        &.up,
        &.down {
            left: 100%;
            transform: translateX(-100%);
        }
        &.left,
        &.right {
            top: 100%;
            transform: translateY(-100%);
        }
    }
}

:hover > .app-tooltip,
:focus > .app-tooltip.keyboard-mode {
    --offset: v-bind(gap);
    opacity: 1;
}
</style>
