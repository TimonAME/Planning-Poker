<template>
    <div class="row">
        <div class="col-2">
            <button class="btn btn-secondary button" @click="sort">
                To original order
            </button>
        </div>

        <div class="col-6">
            <h3>Transition</h3>
            <draggable
                class="list-group"
                tag="transition-group"
                :component-data="{
                    tag: 'ul',
                    type: 'transition-group',
                    name: !drag ? 'flip-list' : null,
                }"
                v-model="items"
                v-bind="dragOptions"
                @start="drag = true"
                @end="onEnd"
                item-key="order"
            >
                <template #item="{ element: item }">
                    <li class="list-group-item">
                        <i
                            :class="
                                item.fixed
                                    ? 'fa fa-anchor'
                                    : 'glyphicon glyphicon-pushpin'
                            "
                            @click="item.fixed = !item.fixed"
                            aria-hidden="true"
                        ></i>
                        {{ item.title }}
                    </li>
                </template>
            </draggable>
        </div>

        <rawDisplayer class="col-3" :value="items" title="List" />
    </div>
</template>

<script setup>
import { ref } from "vue";
import draggable from "vuedraggable";
import { useUserStoryStore } from "~/stores/userstory.js";

const userStoryStore = useUserStoryStore();
const items = ref(userStoryStore.userStories);
const drag = ref(false);

const onEnd = (event) => {
    drag.value = false;
    userStoryStore.moveUserStory(event.oldIndex, event.newIndex);
};

const sort = () => {
    items.value = items.value.sort((a, b) => a.order - b.order);
};

const dragOptions = ref({
    animation: 200,
    group: "description",
    disabled: false,
    ghostClass: "ghost",
});
</script>

<style>
.button {
    margin-top: 35px;
}

.flip-list-move {
    transition: transform 0.5s;
}

.no-move {
    transition: transform 0s;
}

.ghost {
    opacity: 0.5;
    background: #c8ebfb;
}

.list-group {
    min-height: 20px;
}

.list-group-item {
    cursor: move;
}

.list-group-item i {
    cursor: pointer;
}
</style>
