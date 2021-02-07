<template>
    <div id="error">
        <h1>{{ $i18n.t("mcstudio.404") }}</h1>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "PageError"
});
</script>

<style lang="scss" scoped></style>
