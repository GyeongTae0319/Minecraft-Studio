<template>
    <aside class="app-aside">
        <app-button
            v-for="link in LinkList"
            :key="link"
            :to="{ name: link }"
            class="app-aside-button"
        >
            <img
                :src="require(`@/assets/images/icons/${link}.png`)"
                :alt="$i18n.t(`mcstudio.page.${link}`)"
            >
            <app-tooltip dir="right">{{ $i18n.t(`mcstudio.page.${link}`) }}</app-tooltip>
        </app-button>
    </aside>
</template>

<script lang="ts">
import { defineComponent } from "vue";

const LinkList = ["blocks"];

export default defineComponent({
    name: "AppAside",
    setup() {
        return {
            LinkList
        };
    }
});
</script>

<style lang="scss" scoped>
$item-size: 48px;

.app-aside {
    display: flex;
    flex-direction: column;

    width: $aside-width;
    height: 100vh;
    padding: ($aside-width - $item-size) / 2;

    @include block-background("gray_concrete");
    background-color: rgba(#000, 0.1);
}

.app-aside-button {
    display: flex;
    position: relative;

    width: $item-size;
    height: $item-size;
    padding: 8px;

    border-radius: $item-size;
    background-color: rgba(#fff, 0.05);

    transition: border-radius 0.1s, background-color 0.1s;

    &.keyboard-mode {
        transition: background-color 0.1s;
    }

    &:hover,
    &.keyboard-mode:focus {
        border-radius: 16px;
        background-color: rgba(#fff, 0.1);

        &::before {
            width: 4px;
            height: 16px;
        }
    }
    &.keyboard-mode:focus::after {
        border-color: $color-focus;
    }
    &:active {
        background-color: rgba(#fff, 0.05);
    }

    &.router-link-active {
        &::before {
            width: 4px;
            height: 32px !important;
        }
    }

    > * {
        pointer-events: none;
    }
    &::before {
        content: "";

        position: absolute;
        top: 50%;
        left: -($aside-width - $item-size) / 2;

        width: 0;
        height: 0;

        background-color: rgba(#fff, 0.8);

        transform: translateY(-50%);
        transition: width 0.1s, height 0.1s;

        pointer-events: none;
    }
    &::after {
        content: "";

        position: absolute;
        top: 0;
        left: 0;

        width: 100%;
        height: 100%;

        border: $pixel-unit solid transparent;
        border-radius: inherit;

        pointer-events: none;
    }
}
</style>
