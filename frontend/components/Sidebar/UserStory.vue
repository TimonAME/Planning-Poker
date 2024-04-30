<template>
    <div
        class="bg-base-300 hover:opacity-100 opacity-75 p-4 cursor-pointer rounded-md shadow-md transition-all duration-200 flex"
    >
        <div>
            <h3 class="text-lg font-bold text-primary mb-2 break-words">
                {{ userStory.title }}
            </h3>
            <p class="text-base-content overflow-y-auto max-h-24 break-words">
                {{ userStory.description }}
            </p>
        </div>
        <div class="flex flex-col justify-between gap-1 ml-1">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="relative top-0 right-0"
                fill="none"
                width="24"
                height="24"
                viewBox="0 0 24 24"
            >
                <path
                    d="M18 12H18.01M12 12H12.01M6 12H6.01M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12ZM19 12C19 12.5523 18.5523 13 18 13C17.4477 13 17 12.5523 17 12C17 11.4477 17.4477 11 18 11C18.5523 11 19 11.4477 19 12ZM7 12C7 12.5523 6.55228 13 6 13C5.44772 13 5 12.5523 5 12C5 11.4477 5.44772 11 6 11C6.55228 11 7 11.4477 7 12Z"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
            <!-- TODO: bei den svgs einen hover effect einbauen -->
            <EditUserStory :userStory="userStory" :index="props.index" />
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                @click="deleteUserStory"
            >
                <path
                    d="M10 12V17"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M14 12V17"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M4 7H20"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
        </div>
    </div>
</template>

<script setup>
import { useUserStoryStore } from "~/stores/userstory";
import EditUserStory from "~/components/Sidebar/EditUserStory.vue";

const userStoryStore = useUserStoryStore();
const props = defineProps({
    userStory: {
        type: Object,
        required: true,
    },
    index: Number,
});

const deleteUserStory = () => {
    // get index of user story
    const index = userStoryStore.userStories.indexOf(props.userStory);
    userStoryStore.deleteUserStory(index);
};
</script>
