<template>
    <div class="dropdown">
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
            class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
        >
            <li v-for="(theme, index) in themes" :key="index">
                <a @click="setTheme(theme.value)">
                    {{ theme.label }}
                </a>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { useCookie } from "nuxt/app";

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

const selectedTheme = useCookie("selectedTheme");

selectedTheme.value = null;

const setTheme = (theme) => {
    selectedTheme.value = theme;
    document.documentElement.className = theme;
};
</script>
