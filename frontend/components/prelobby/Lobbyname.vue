<template>
    <div
        class="flex flex-col items-start absolute sm:top-3 top-16 left-8"
        ref="dropdownRef"
    >
        <div class="flex flex-row">
            <button
                ref="lobbyNameRef"
                class="text-3xl font-bold mr-2 cursor-default select-none"
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
        <div>
            <div
                v-if="isOpen || isHovered"
                class="modal-box -ml-3 bg-base-200"
                :style="{
                    width: lobbyNameWidth + 'px',
                    top: lobbyNameHeight + 'px',
                    left: '0px',
                }"
            >
                <div
                    class=""
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                >
                    <p class="text-sm -mb-3 -mx-2 -mt-4">
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

let Lobbyname = "ame.me";

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
    if (lobbyNameRef.value.offsetWidth < 247) {
        lobbyNameWidth.value = 269;
    } else {
        lobbyNameWidth.value = lobbyNameRef.value.offsetWidth + 22;
    }
    lobbyNameHeight.value = lobbyNameRef.value.offsetHeight;
});
</script>
