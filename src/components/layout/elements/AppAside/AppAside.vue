<template>
    <aside :class="getClassList">
        <div class="group-aside">
            <div class="list">
                <!-- <group-button></group-button> -->
                <group-button
                    v-for="(group, index) in GroupList"
                    :key="`${index}_${group}`"
                    :group="group"
                    :class="{ 'selected': selected === group }"
                    @click="setSelected(group)"
                />
            </div>
        </div>
        <div :class="getItemAsideClassList">
            <div class="list">
                <item-button
                    v-for="(item, index) in GroupItemList[selected]"
                    :tabindex="showItemList ? 0 : -1"
                    :key="`${index}_${item}`"
                    :item="item"
                    :to="{ name: `${selected}-${item}` }"
                />
            </div>
        </div>
    </aside>
</template>

<script lang="ts">
import { ClassList } from "@/vue-global";
import { defineComponent } from "vue";
// Components
import GroupButton from "./GroupButton.vue";
import ItemButton from "./ItemButton.vue";

const GroupList = ["blocks"];
const GroupItemList = {
    "blocks": ["banner"]
};

export default defineComponent({
    name: "AppAside",
    components: {
        GroupButton,
        ItemButton
    },
    setup() {
        return {
            GroupList,
            GroupItemList
        };
    },
    data() {
        return {
            secondary: false,
            selected: "none",
            showItemList: false
        };
    },
    computed: {
        getClassList(): ClassList {
            return ["app-aside", {
                "secondary": this.showItemList,
                "show-item-list": this.showItemList
            }];
        },
        getItemAsideClassList(): ClassList {
            return ["item-aside", {
                "show": this.showItemList
            }];
        }
    },
    methods: {
        setSelected(select: string) {
            if (this.showItemList && this.selected === select) {
                this.showItemList = false;
            } else {
                this.selected = select;
                this.showItemList = true;
            }
        }
    }
});
</script>

<style lang="scss" scoped>
.app-aside {
    $item-size: 48px;
    $item-list-width: 240px;

    display: flex;

    position: sticky;
    top: 0;

    flex: 0 0 64px;
    height: 100vh;

    transition: flex-basis 0.25s;

    &.show-item-list {
        flex-basis: 64px + $item-list-width;
    }

    .group-aside {
        flex: 0 0 64px;
        height: 100%;
        padding: (64px - $item-size) / 2;

        @include block-background("gray_concrete");

        .list {
            display: grid;
            grid-column: $item-size;
            grid-auto-rows: $item-size;
            gap: (64px - $item-size) / 2;
        }
    }
    .item-aside {
        flex: 1 0 0;
        width: 0;
        height: 100%;
        overflow: hidden;

        @include block-background("gray_concrete");
        background-color: rgba(#000, 0.1);
    }
}
</style>
