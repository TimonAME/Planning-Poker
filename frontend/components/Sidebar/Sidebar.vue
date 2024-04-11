<template>
    <div class="fixed right-0 sm:top-0 top-14 m-2">
        <button @click="open = !open" class="btn">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                class="w-6 h-6 current-fill"
                viewBox="0 0 24 24"
            >
                <path d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
        </button>
        <div
            :class="{ 'translate-x-full': !open }"
            class="fixed right-0 top-0 h-full w-96 transform transition-transform duration-200 ease-in-out shadow-xl"
            ref="sidebar"
        >
            <div
                class="resize-handle"
                @mousedown="startResize"
                style="
                    cursor: ew-resize;
                    width: 5px;
                    height: 100%;
                    position: absolute;
                    left: 0;
                    z-index: 50;
                "
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    width="24"
                    height="24"
                    style="
                        transform: rotate(90deg);
                        position: absolute;
                        bottom: 0;
                    "
                >
                    <path d="M10 20L20 20L20 10" stroke="#222222" />
                    <path d="M12 17L17 17L17 12" stroke="#222222" />
                </svg>
            </div>
            <section class="absolute inset-y-0 right-0 w-full flex">
                <div class="h-full flex flex-col py-6 bg-base-200 w-full">
                    <!-- Sidebar Header -->
                    <div class="flex items-center justify-between px-4">
                        <div class="flex gap-4">
                            <ImportUserStory />
                            <ExportUserStory />
                            <ManualUserStory @new-user-story="addUserStory" />
                        </div>
                        <button
                            @click="open = false"
                            class="text-gray-500 hover:text-gray-700"
                        >
                            <span class="sr-only">Close</span>
                            <svg
                                class="h-6 w-6"
                                x-description="Heroicon name: x"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M6 18L18 6M6 6l12 12"
                                ></path>
                            </svg>
                        </button>
                    </div>
                    <!-- Search Input -->
                    <div class="mt-5 px-4">
                        <input
                            type="text"
                            placeholder="Search..."
                            class="w-full p-2 bg-base-300 border border-transparent rounded-md focus:border-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary transition-colors duration-300"
                        />
                    </div>
                    <div class="mt-4 px-4">
                        <p class="ml-2 text-base-content">User Stories:</p>
                    </div>
                    <!-- Sidebar Content -->
                    <div class="mt-4 px-4 h-full overflow-auto">
                        <div class="grid sm:grid-cols-2 grid-cols-2 gap-4">
                            <UserStory
                                v-for="(userStory, index) in userStories"
                                :key="index"
                                :userStory="userStory"
                            />
                        </div>
                    </div>

                    <!-- Sidebar Footer -->
                    <SidebarFooter />
                </div>
            </section>
        </div>
    </div>
</template>

<script setup>
import ManualUserStory from "~/components/Sidebar/ManualUserStory.vue";
import ExportUserStory from "~/components/Sidebar/ExportUserStory.vue";
import ImportUserStory from "~/components/Sidebar/ImportUserStory.vue";

const userStories = ref([]);

const addUserStory = (newUserStory) => {
    userStories.value.push(newUserStory);
};

import { onMounted, onUnmounted, ref } from "vue";
import UserStory from "~/components/Sidebar/UserStory.vue";
import SidebarFooter from "~/components/Sidebar/SidebarFooter.vue";

const open = ref(false);
const sidebar = ref(null);

const minWidth = 330; // Minimum width of the sidebar in pixels
const maxWidth = 800; // Maximum width of the sidebar in pixels

let isResizing = false;
let startX = 0;
let startWidth = 0;

const startResize = (event) => {
    isResizing = true;
    startX = event.pageX;
    startWidth = sidebar.value.offsetWidth;
};

const doResize = (event) => {
    if (!isResizing) return;
    let newWidth = startWidth - (event.pageX - startX);
    if (newWidth < minWidth) newWidth = minWidth;
    if (newWidth > maxWidth) newWidth = maxWidth;
    sidebar.value.style.width = `${newWidth}px`;
};

const stopResize = () => {
    isResizing = false;
};

onMounted(() => {
    document.addEventListener("mousemove", doResize);
    document.addEventListener("mouseup", stopResize);
});

onUnmounted(() => {
    document.removeEventListener("mousemove", doResize);
    document.removeEventListener("mouseup", stopResize);
});
</script>
