<template>
    <div
        class="flex flex-col items-start absolute top-3 left-8"
        ref="dropdownRef"
    >
        <button
            ref="lobbyNameRef"
            class="text-4xl font-bold text-primary mr-4 cursor-default select-none"
            @mouseenter="setIsHovered(true)"
            @mouseleave="setIsHovered(false)"
        >
            Lobbyname
        </button>
        <div class="relative inline-block text-left">
            <button
                type="button"
                class="inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none transition-colors duration-200"
                :class="{ 'bg-indigo-300 text-white': isOpen }"
                id="options-menu"
                aria-haspopup="true"
                aria-expanded="true"
                @click="toggleDropdown"
            >
                <svg
                    class="h-5 w-5"
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

            <div
                v-if="isOpen || isHovered"
                class="origin-top-right absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
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
                    <p class="text-sm text-gray-700">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
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

const toggleDropdown = () => {
    isOpen.value = !isOpen.value;
};

const handleClickOutside = (event) => {
    if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
        isOpen.value = false;
    }
};

const setIsHovered = (value) => {
    isHovered.value = value;
};

onMounted(() => {
    document.addEventListener("mousedown", handleClickOutside);
    lobbyNameWidth.value = lobbyNameRef.value.offsetWidth;
    lobbyNameHeight.value = lobbyNameRef.value.offsetHeight;
});
</script>
