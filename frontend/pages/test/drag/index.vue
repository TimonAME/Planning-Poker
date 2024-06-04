<template>
    <div class="p-4 max-w-md mx-auto">
        <draggable
            v-model="items"
            handle=".handle"
            class="space-y-2"
            @end="onEnd"
        >
            <template #item="{ element: item }">
                <div
                    class="item flex items-center p-4 bg-white rounded-lg shadow-md"
                >
                    <div class="handle cursor-move mr-4">
                        <svg
                            class="w-6 h-6 text-gray-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 8h16M4 16h16"
                            ></path>
                        </svg>
                    </div>
                    <div class="title text-lg font-semibold">
                        {{ item.title }}
                    </div>
                </div>
            </template>
        </draggable>
    </div>
</template>

<script setup>
import { ref } from "vue";
import draggable from "vuedraggable";
import { useUserStoryStore } from "~/stores/userstory.js";

const userStoryStore = useUserStoryStore();
const items = ref(userStoryStore.userStories);

const onEnd = (event) => {
    userStoryStore.moveUserStory(event.oldIndex, event.newIndex);
};

console.log(userStoryStore.userStories);
</script>

<style>
/* TailwindCSS is assumed to be imported globally in your project. */
</style>
