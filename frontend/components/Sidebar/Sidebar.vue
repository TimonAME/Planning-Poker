<template>
    <Transition>
        <ManualUserStory
            v-if="showManualUserStory"
            @close="showManualUserStory = false"
        />
    </Transition>
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
                            <button
                                class="btn btn-outline btn-info"
                                @click="showManualUserStory = true"
                            >
                                Manual
                            </button>
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
                        <Searchbar @update:searchTerm="searchTerm = $event" />
                    </div>
                    <!--
                    <div class="mt-4 px-4">
                        <p class="ml-2 text-base-content">User Stories:</p>
                    </div>
                    -->
                    <!-- Sidebar Content -->
                    <div class="h-fit overflow-auto mb-10">
                        <div class="collapse collapse-plus bg-base-200">
                            <input
                                type="radio"
                                name="my-accordion-3"
                                checked="checked"
                            />
                            <div class="collapse-title text-m font-medium">
                                Unvoted Stories
                            </div>
                            <div class="collapse-content -mt-3">
                                <div class="mt-3 h-full">
                                    <draggable
                                        v-model="unvotedUserStories"
                                        tag="ul"
                                        class="space-y-2"
                                        @start="drag = true"
                                        @end="onEndUnvoted"
                                        :component-data="{
                                            type: 'transition-group',
                                            name: !drag ? 'flip-list' : null,
                                        }"
                                        v-bind="dragOptions"
                                        :item-key="''"
                                    >
                                        <template
                                            #item="{
                                                element: userStory,
                                                index,
                                            }"
                                            :key="index"
                                        >
                                            <li
                                                class="list-group-item"
                                                :key="index"
                                            >
                                                <i
                                                    :class="
                                                        userStory.fixed
                                                            ? 'fa fa-anchor'
                                                            : 'glyphicon glyphicon-pushpin'
                                                    "
                                                    @click="
                                                        userStory.fixed =
                                                            !userStory.fixed
                                                    "
                                                    aria-hidden="true"
                                                ></i>
                                                <UserStory
                                                    :key="index"
                                                    :index="index"
                                                    :originalIndex="
                                                        userStory.originalIndex
                                                    "
                                                    :userStory="userStory"
                                                />
                                            </li>
                                        </template>
                                    </draggable>
                                </div>
                            </div>
                        </div>
                        <div class="collapse collapse-plus bg-base-200">
                            <input type="radio" name="my-accordion-3" />
                            <div class="collapse-title text-m font-medium">
                                Voted Stories
                            </div>
                            <div class="collapse-content -mt-3">
                                <div class="mt-3 h-full">
                                    <draggable
                                        v-model="votedUserStories"
                                        tag="ul"
                                        class="space-y-2"
                                        @start="drag = true"
                                        @end="onEndVoted"
                                        :component-data="{
                                            type: 'transition-group',
                                            name: !drag ? 'flip-list' : null,
                                        }"
                                        v-bind="dragOptions"
                                        :item-key="''"
                                    >
                                        <template
                                            #item="{
                                                element: userStory,
                                                index,
                                            }"
                                        >
                                            <li class="list-group-item">
                                                <i
                                                    :class="
                                                        userStory.fixed
                                                            ? 'fa fa-anchor'
                                                            : 'glyphicon glyphicon-pushpin'
                                                    "
                                                    @click="
                                                        userStory.fixed =
                                                            !userStory.fixed
                                                    "
                                                    aria-hidden="true"
                                                ></i>
                                                <UserStory
                                                    :key="index"
                                                    :index="index"
                                                    :originalIndex="
                                                        userStory.originalIndex
                                                    "
                                                    :userStory="userStory"
                                                />
                                            </li>
                                        </template>
                                    </draggable>
                                </div>
                            </div>
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

import { useUserStoryStore } from "~/stores/userstory";
import { onMounted, onUnmounted, ref, computed } from "vue";
import UserStory from "~/components/Sidebar/UserStory.vue";
import SidebarFooter from "~/components/Sidebar/SidebarFooter.vue";
import Searchbar from "~/components/Sidebar/Searchbar.vue";
import draggable from "vuedraggable";
import { useUserStore } from "~/stores/user.js";

const userStoryStore = useUserStoryStore();
const userStore = useUserStore();

const searchTerm = ref("");
const showManualUserStory = ref(false);

const drag = ref(false);

const dragOptions = ref({
    animation: 200,
    group: "description",
    disabled: false,
    ghostClass: "ghost",
});

const onEndUnvoted = (event) => {
    drag.value = false;
    const oldIndex = userStoryStore.userStories.findIndex(
        (us) =>
            us.originalIndex ===
            unvotedUserStories.value[event.oldIndex].originalIndex,
    );
    const newIndex =
        event.newIndex === unvotedUserStories.value.length
            ? userStoryStore.userStories.length
            : userStoryStore.userStories.findIndex(
                  (us) =>
                      us.originalIndex ===
                      unvotedUserStories.value[event.newIndex].originalIndex,
              );
    console.log("oldIndex: " + oldIndex + " newIndex: " + newIndex);
    if (newIndex === 0) {
        // make Users unready
        // reset vote of each user
        userStore.userList.forEach((user) => {
            user.status = "not ready";
            user.selectedCard = null;
        });

        // TODO: selectedCard = null (from game index.vue)
    }
    userStoryStore.moveUserStory(oldIndex, newIndex);
};

const onEndVoted = (event) => {
    const oldIndex = userStoryStore.userStories.findIndex(
        (us) =>
            us.originalIndex ===
            votedUserStories.value[event.oldIndex].originalIndex,
    );
    const newIndex =
        event.newIndex === votedUserStories.value.length
            ? userStoryStore.userStories.length
            : userStoryStore.userStories.findIndex(
                  (us) =>
                      us.originalIndex ===
                      votedUserStories.value[event.newIndex].originalIndex,
              );
    userStoryStore.moveUserStory(oldIndex, newIndex);
};

const filteredUserStories = computed(() => {
    return searchTerm.value
        ? userStoryStore.userStories.filter((u, index) => {
              u.originalIndex = index; // Speichern des Original-Index
              return u.title
                  .toLowerCase()
                  .includes(searchTerm.value.toLowerCase());
          })
        : userStoryStore.userStories.map((u, index) => {
              u.originalIndex = index; // Speichern des Original-Index
              return u;
          });
});

const unvotedUserStories = computed(() => {
    return filteredUserStories.value.filter((u) => !u.voted);
});

const votedUserStories = computed(() => {
    return filteredUserStories.value.filter((u) => u.voted);
});

const open = ref(false);
const sidebar = ref(null);

const minWidth = 330;
const maxWidth = 800;
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

<style scoped>
/* TODO: daisyui transitions nehmen */
.v-enter-active {
    transition: opacity 150ms ease;
}

.v-enter-from {
    opacity: 0;
}

.v-enter-to {
    opacity: 1;
}

.v-leave-active {
    transition: opacity 0ms;
}

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
