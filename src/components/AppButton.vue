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
                        "to": this.$i18n.path(this.to)
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

    &.keyboard-mode:focus .overlay {
        display: block;
    }
}
</style>
