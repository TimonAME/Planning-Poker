<template>
    <div v-if="loading" class="fullscreen-loader">
        <span class="loading loading-spinner text-primary"></span>
    </div>
    <div v-else class="dropdown">
        <div
            tabindex="0"
            role="button"
            class="md:btn m-1 text-sm underline md:no-underline"
        >
            Theme
            <svg
                width="12px"
                height="12px"
                class="h-2 w-2 fill-current opacity-60 inline-block"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 2048 2048"
            >
                <path
                    d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"
                ></path>
            </svg>
        </div>
        <ul
            tabindex="0"
            class="dropdown-content z-40 bg-base-200 text-base-content rounded-box top-px h-[28.6rem] max-h-[calc(100vh-10rem)] w-56 overflow-y-auto border border-white/5 shadow-2xl outline outline-1 outline-black/5 sm:mt-16 mt-8"
        >
            <li v-for="(theme, index) in themes" :key="index">
                <input
                    type="radio"
                    name="theme-dropdown"
                    class="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                    :aria-label="theme.label"
                    :value="theme.value"
                    v-model="selectedTheme"
                />
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref, watch, onMounted } from "vue";

const themes = [
    { label: "Light", value: "light" },
    { label: "Dark", value: "dark" },
    { label: "Retro", value: "retro" },
    { label: "Cyberpunk", value: "cyberpunk" },
    { label: "Valentine", value: "valentine" },
    { label: "Aqua", value: "aqua" },
    { label: "Emerald", value: "emerald" },
    { label: "Synthwave", value: "synthwave" },
    { label: "Pastel", value: "pastel" },
    { label: "Wireframe", value: "wireframe" },
    { label: "Black", value: "black" },
    { label: "Luxury", value: "luxury" },
    { label: "Dracula", value: "dracula" },
    { label: "Business", value: "business" },
    { label: "Lemonade", value: "lemonade" },
    { label: "Night", value: "night" },
    { label: "Winter", value: "winter" },
    { label: "Coffee", value: "coffee" },
    { label: "Sunset", value: "sunset" },
];

let selectedTheme;
const loading = ref(true);

onMounted(() => {
    if (typeof window !== "undefined") {
        const savedTheme = localStorage.getItem("selectedTheme");
        selectedTheme = ref(savedTheme || "light");
        loading.value = false; // Setzen Sie den Ladezustand auf false, wenn das gespeicherte Thema geladen wurde

        watch(selectedTheme, (newTheme) => {
            localStorage.setItem("selectedTheme", newTheme);
        });
    } else {
        selectedTheme = ref();
        loading.value = false;
    }
});
</script>

<style>
.fullscreen-loader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(29, 35, 42);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999; /* Stellen Sie sicher, dass der Loader über allem anderen liegt */
}
</style>
