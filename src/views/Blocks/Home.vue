<template>
    <div class="page-blocks">
        <app-button
            v-for="link in LinkList"
            :key="link"
            :to="{ name: `blocks-${link}` }"
            class="app-aside-button"
        >
            <img
                :src="require(`@/assets/images/icons/${link}.png`)"
                :alt="$i18n.t(`mcstudio.page.blocks.${link}`)"
            >
            <span class="tag">{{ $i18n.t(`mcstudio.page.blocks.${link}`) }}</span>
        </app-button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

const LinkList = ["banner"];

export default defineComponent({
    name: "PageBlocks",
    setup() {
        return {
            LinkList
        };
    }
});
</script>

<style lang="scss" scoped>

</style>
