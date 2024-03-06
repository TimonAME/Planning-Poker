<template>
    <div
        class="flex flex-col items-start absolute top-3 left-8"
        ref="dropdownRef"
    >
        <div class="flex flex-row">
            <button
                ref="lobbyNameRef"
                class="text-4xl font-bold mr-2 cursor-default select-none"
                @mouseenter="setIsHovered(true)"
                @mouseleave="setIsHovered(false)"
            >
                {{ Lobbyname }}
            </button>
            <button
                type="button"
                class="inline-flex justify-center rounded-md px-2 py-2 text-sm font-medium focus:outline-none transition-colors duration-200"
                id="options-menu"
                aria-haspopup="true"
                aria-expanded="true"
                @click="toggleDropdown"
                style="border: none"
            >
                <svg
                    class="h-5 w-5 hover:text-indigo-500"
                    :class="{ 'text-indigo-500': isOpen }"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                >
                    <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                    />
                </svg>
            </button>
        </div>
        <div class="">
            <div
                v-if="isOpen || isHovered"
                class="origin-top-right absolute right-0 mt-2 rounded-md shadow-lg ring-1 ring-black ring-opacity-5"
                :style="{
                    width: lobbyNameWidth + 'px',
                    top: lobbyNameHeight + 'px',
                    left: '0px',
                }"
            >
                <div
                    class="py-1 px-4"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                >
                    <p class="text-sm">
                        Diese Lobby gehört AME.me. Wir stimmen heute über unsere
                        User-Storys ab. Viel Spaß!
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const isOpen = ref(false);
const isHovered = ref(false);
const dropdownRef = ref(null);
const lobbyNameRef = ref(null);
const lobbyNameWidth = ref(0);
const lobbyNameHeight = ref(0);

let Lobbyname = "SCRUM Planning Poker";

const toggleDropdown = () => {
    isOpen.value = !isOpen.value;
};

/*
Dropdown schließen, wenn außerhalb geklickt wird

const handleClickOutside = (event) => {
    if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
        isOpen.value = false;
    }
};
 */

const setIsHovered = (value) => {
    isHovered.value = value;
};

onMounted(() => {
    //document.addEventListener("mousedown", handleClickOutside);
    lobbyNameWidth.value = lobbyNameRef.value.offsetWidth;
    lobbyNameHeight.value = lobbyNameRef.value.offsetHeight;
});
</script>
