<template>
    <Transition name="full">
        <UserStoryFullScreen
            :userStory="props.userStory"
            v-if="showUserStoryFullscreen"
            @close="showUserStoryFullscreen = false"
            class="h-screen w-screen"
        />
    </Transition>
    <Transition name="edit">
        <EditUserStory
            :userStory="userStory"
            :index="props.index"
            :originalIndex="props.originalIndex"
            v-if="showEditUserStory"
            @close="showEditUserStory = false"
            class=""
        />
    </Transition>
    <div class="bg-base-300 hover:opacity-100 opacity-75 cursor-pointer rounded-md shadow-md transition-all duration-200 flex justify-between min-w-52">
        <div @click="showUserStoryFullscreen = true" class="py-4 pl-4 w-full">
            <h3 class="text-xl font-bold text-primary mb-2 break-all">
                {{ props.userStory.title }}
            </h3>
            <p class="overflow-y-auto max-h-24 break-words" v-html="styledDescription"></p>
        </div>
        <div class="indicator flex flex-col justify-between gap-1 ml-6 pr-4 py-4">
            <div class="dropdown dropdown-end">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="relative top-0 right-0"
                    fill="none"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    tabindex="0"
                    role="button"
                    @click="toggleDropdown(false)"
                >
                    <path
                        d="M18 12H18.01M12 12H12.01M6 12H6.01M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12ZM19 12C19 12.5523 18.5523 13 18 13C17.4477 13 17 12.5523 17 12C17 11.4477 17.4477 11 18 11C18.5523 11 19 11.4477 19 12ZM7 12C7 12.5523 6.55228 13 6 13C5.44772 13 5 12.5523 5 12C5 11.4477 5.44772 11 6 11C6.55228 11 7 11.4477 7 12Z"
                        stroke="oklch(var(--bc))"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
                <ul
                    tabindex="0"
                    class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                    v-show="dropdownOpen"
                >
                    <li><a @click="move(0)">Move To Top</a></li>
                    <li><a @click="move(1)">Move To Bottom</a></li>
                </ul>
            </div>
            <button>
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    @click="showEditUserStory = true"
                >
                    <path
                        d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z"
                        stroke="oklch(var(--bc))"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13"
                        stroke="oklch(var(--bc))"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            </button>
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
                    stroke="oklch(var(--bc))"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M14 12V17"
                    stroke="oklch(var(--bc))"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M4 7H20"
                    stroke="oklch(var(--bc))"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10"
                    stroke="oklch(var(--bc))"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
                    stroke="oklch(var(--bc))"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
            <span class="indicator-item indicator-start badge badge-secondary" v-if="votedSize !== null">{{ votedSize }}</span>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useUserStoryStore } from '~/stores/userstory';
import EditUserStory from '~/components/Sidebar/EditUserStory.vue';
import UserStoryFullScreen from '~/components/Sidebar/UserStoryFullScreen.vue';

const userStoryStore = useUserStoryStore();
const props = defineProps({
    userStory: {
        type: Object,
        required: true,
    },
    index: Number,
    originalIndex: Number,
});

const showUserStoryFullscreen = ref(false);
const showEditUserStory = ref(false);

const votedSize = computed(() => {
    if (props.userStory.voted) {
        return props.userStory.size;
    }
    return null;
});

const deleteUserStory = () => {
    userStoryStore.deleteUserStory(props.originalIndex);
};

const styledDescription = computed(() => {
    let htmlContent = props.userStory.description;

    if (htmlContent) {
        htmlContent = htmlContent.replace(
            /<h1>/g,
            '<h1 class="text-xl font-bold mt-2 mb-4">',
        );
        htmlContent = htmlContent.replace(
            /<ul>/g,
            '<ul class="list-disc pl-5">',
        );
        htmlContent = htmlContent.replace(/<li>/g, '<li class="mb-1">');
        htmlContent = htmlContent.replace(
            /<h2>/g,
            '<h2 class="text-lg font-bold mt-2 mb-4">',
        );
        htmlContent = htmlContent.replace(/<p>/g, '<p class="break-all">');
    }

    return htmlContent;
});

const dropdownOpen = ref(true);
const toggleDropdown = (overwrite) => {
    if (overwrite) {
        dropdownOpen.value = !dropdownOpen.value;
    } else {
        dropdownOpen.value = true;
    }
};

const move = (location) => {
    const index = userStoryStore.userStories.indexOf(props.userStory);
    if (location === 1) {
        location = userStoryStore.userStories.length - 1;
    }
    userStoryStore.moveUserStory(index, location);
    toggleDropdown(true);
};
</script>

<style scoped>
.full-enter-active,
.full-leave-active {
    transition: opacity 150ms ease;
}

.full-enter-from,
.full-leave-to {
    opacity: 0;
}

.edit-enter-active {
    transition: opacity 150ms ease;
}

.edit-enter-from {
    opacity: 0;
}

.edit-enter-to {
    opacity: 1;
}

.edit-leave-active {
    transition: opacity 0ms;
}
</style>
