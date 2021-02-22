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
$widget-icon-size: 64px;

.page-blocks {
    padding: 32px 0;

    .title {
        display: flex;
        align-items: center;

        margin: {
            bottom: 24px;
        };
        padding-left: 24px;

        h1 {
            margin-right: 8px;
            font-size: $font-size-l;
            font-weight: bold;
        }
        .icon {
            height: 48px;
        }
    }
}

.widget-layout {
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(auto-fill, $widget-icon-size + 16px);
    gap: 8px;

    margin: 0 32px;
}
.widget {
    display: flex;
    flex-direction: column;
    align-items: center;

    &:hover .icon {
        background-color: rgba(#fff, 0.1);
    }

    .icon {
        display: flex;

        margin-bottom: 4px;
        padding: 8px;

        border-radius: 8px;
        background-color: rgba(#fff, 0.05);

        transition: background-color 0.1s;

        img {
            width: $widget-icon-size;
            height: $widget-icon-size;
        }
    }
    .name {
        font-size: $font-size-xs;
    }
}
</style>
