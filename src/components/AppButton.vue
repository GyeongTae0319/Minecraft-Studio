<template>
    <component
        :is="getTagName"
        v-bind="getAttr"
        :class="getClassList"
    >
        <slot/>
    </component>
</template>

<script lang="ts">
import { ClassList } from "@/vue-global";
import { defineComponent } from "vue";

export default defineComponent({
    props: {
        to: {
            type: [String, Object],
            default: ""
        },
        href: {
            type: String,
            default: ""
        }
    },
    computed: {
        getAttr(): Object {
            let result = {};

            switch (this.getTagName) {
                case "router-link":
                    Object.assign(result, {
                        "to": this.to
                    });
                    break;
                case "a":
                    Object.assign(result, {
                        "href": this.href,
                        "rel": "noopener noreferrer",
                        "target": "_blank"
                    });
                    break;
            }

            return result;
        },
        getTagName(): "router-link" | "a" | "button" {
            if (this.to !== "") return "router-link";
            else if (this.href !== "") return "a";
            else return "button";
        },
        getClassList(): ClassList {
            return ["app-button", {
                "keyboard-mode": this.$a11y.isKeyboardMode()
            }];
        }
    }
});
</script>

<style lang="scss" scoped>
.app-button {
    position: relative;
    cursor: pointer;

    &.keyboard-mode:focus::after {
        content: "";

        position: absolute;
        top: 0;
        left: 0;

        width: 100%;
        height: 100%;

        border: 4px solid $color-focus;
        border-radius: inherit;
    }
}
</style>
