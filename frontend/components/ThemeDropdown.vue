<template>
    <!-- TODO: Wenn man auf das Dropdown klickt soll es auch wieder schließen -->

    <div class="dropdown">
        <div tabindex="0" role="button" class="btn m-1">
            Theme
            <svg
                width="12px"
                height="12px"
                class="h-2 w-2 fill-current opacity-60 inline-block"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 2048 2048"
                :class="{ hidden: props.small }"
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
                    @click="onThemeClick"
                />
            </li>
        </ul>
    </div>
</template>

<script setup>
const props = defineProps({
    small: Boolean,
});

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

let selectedTheme = ref(null);

function onThemeClick() {
    if (useCookie("cookiesAccepted").value === true) {
        selectedTheme = useCookie("selectedTheme", {
            maxAge: 60 * 60 * 24 * 365, // 1 Jahr
        });
    }
    selectedTheme.value = selectedTheme.value || null;
}

if (useCookie("cookiesAccepted").value === true) {
    selectedTheme = useCookie("selectedTheme", {
        maxAge: 60 * 60 * 24 * 365, // 1 Jahr
    });
}
selectedTheme.value = selectedTheme.value || null;
</script>
