<template>
    <app-button class="group-button">
        <img
            :src="require(`@/assets/images/icons/${group}.png`)"
            :alt="`${$i18n.t(`mcstudio.page.group.${group}`)} 그룹 아이콘`"
        >
        <span class="tag">{{ $i18n.t(`mcstudio.page.group.${group}`) }}</span>
    </app-button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    props: {
        group: {
            type: String,
            required: true
        }
    }
});
</script>

<style lang="scss" scoped>
@mixin hover {
    background-color: rgba(#fff, 0.1);

    .tag {
        opacity: 1;
        transform: translate(4px, -50%);
    }
}

.group-button {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    border-radius: 8px;
    background-color: rgba(#fff, 0.05);

    transition: background-color 0.05s;

    &:hover {
        @include hover;
    }
    &.keyboard-mode:focus {
        @include hover;

        &::after {
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

    .tag {
        opacity: 0;

        position: absolute;
        top: 50%;
        left: 100%;

        padding: 2px 8px;

        border-radius: 4px;
        background-color: rgba(#000, 0.5);

        word-break: keep-all;

        transform: translate(-4px, -50%);
        transition: opacity 0.1s, transform 0.1s;

        pointer-events: none;
    }
}
</style>
