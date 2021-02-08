<template>
    <app-button :to="to" class="item-button">
        <img
            :src="require(`@/assets/images/icons/${item}.png`)"
            :alt="`${$i18n.t(`mcstudio.page.${item}`)} 아이콘`"
        >
        <span class="name">{{ $i18n.t(`mcstudio.page.${item}`) }}</span>
    </app-button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    props: {
        to: {
            type: [String, Object],
            default: () => { return { name: "home" }; }
        },
        item: {
            type: String,
            required: true
        }
    }
});
</script>

<style lang="scss" scoped>
.item-button {
    display: flex;
    align-items: center;

    width: 100%;
    padding: 8px;

    white-space: nowrap;

    &:hover,
    &.keyboard-mode:focus {
        background-color: rgba(#fff, 0.05);
    }

    img {
        margin-right: 8px;
    }
}
</style>
