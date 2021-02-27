<template>
    <div class="page-blocks">
        <div class="title">
            <h1>{{ $i18n.t("mcstudio.page.blocks") }}</h1>
            <img src="@/assets/images/icons/blocks.png" class="icon">
        </div>
        <div class="widget-layout">
            <app-button
                v-for="link in LinkList"
                :key="link"
                :to="{ name: `blocks-${link}` }"
                class="widget"
            >
                <span class="icon">
                    <img
                        :src="require(`@/assets/images/icons/${link}.png`)"
                        :alt="$i18n.t(`mcstudio.page.blocks.${link}`)"
                    >
                </span>
                <span class="name">{{ $i18n.t(`mcstudio.page.blocks.${link}`) }}</span>
            </app-button>
        </div>
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
$widget-icon-size: 96px;

.page-blocks {
    padding: 32px 0;

    .title {
        display: flex;
        align-items: center;

        margin: {
            bottom: 24px;
        };
        padding-left: 32px;

        h1 {
            margin-right: 8px;
            font-size: $font-size-xl;
            font-weight: bold;
        }
        .icon {
            height: 64px;
        }
    }
}

.widget-layout {
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(auto-fill, $widget-icon-size + 16px);
    gap: 16px;

    margin: 0 32px;
}
.widget {
    display: flex;
    flex-direction: column;
    align-items: center;

    border-radius: 16px;

    &:hover .icon,
    &.keyboard-mode:focus .icon {
        background-color: rgba(#fff, 0.1);
    }
    &.keyboard-mode:focus .icon::after {
        border-color: $color-focus;
    }

    .icon {
        display: flex;
        position: relative;

        margin-bottom: 8px;
        padding: 8px;

        border-radius: 16px;
        background-color: rgba(#fff, 0.05);

        transition: background-color 0.1s;

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
        img {
            width: $widget-icon-size;
            height: $widget-icon-size;
        }
    }
}
</style>
