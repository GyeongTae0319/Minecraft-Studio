<template>
    <button :class="getClassList"><slot/></button>
</template>

<script lang="ts">
import { ClassList } from "@/vue-global";
import { defineComponent } from "vue";

export default defineComponent({
    computed: {
        getClassList() {
            return ["app-button", {
                "keyboard-mode": this.$a11y.isKeyboardMode()
            }] as ClassList;
        }
    }
});
</script>

<style lang="scss" scoped>
button {
    cursor: pointer;
}
</style>
