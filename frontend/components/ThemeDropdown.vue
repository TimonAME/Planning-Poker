<template>
    <div class="dropdown">
        <div tabindex="0" role="button" class="btn m-1">
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
            class="dropdown-content bg-base-200 text-base-content rounded-box top-px h-[28.6rem] max-h-[calc(100vh-10rem)] w-56 overflow-y-auto border border-white/5 shadow-2xl outline outline-1 outline-black/5 mt-16"
        >
            <li v-for="(theme, index) in themes" :key="index">
                <input
                    type="radio"
                    name="theme-dropdown"
                    class="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                    :aria-label="theme.label"
                    :value="theme.value"
                    v-model="selectedTheme"
                    @change="saveTheme"
                />
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

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

const selectedTheme = ref();

function saveTheme() {
    if (typeof window !== "undefined") {
        localStorage.setItem("selectedTheme", selectedTheme.value);
    }
}

onMounted(() => {
    if (typeof window !== "undefined") {
        const storedTheme = localStorage.getItem("selectedTheme");
        if (storedTheme) {
            selectedTheme.value = storedTheme;
        }
    }
});
</script>
