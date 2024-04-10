<template>
    <ReturnToHome />
    <nav
        class="relative px-4 py-4 flex justify-center items-center h-16 lg:gap-48 md:gap-28"
    >
        <router-link
            to="#"
            class="text-3xl font-bold leading-none hidden md:block w-32"
        >
        </router-link>
        <ul class="flex items-center gap-6" style="margin-right: 15px">
            <li>
                <button
                    class="text-sm hover:text-primary transition-colors duration-80"
                    @click="returnToHomepage"
                >
                    Home
                </button>
            </li>
            <li>
                <Documentation />
            </li>
            <li>
                <router-link
                    to="#"
                    class="text-sm hover:text-primary transition-colors duration-80"
                    >Settings</router-link
                >
            </li>
            <ThemeDropdown class="block md:hidden" :small="true" />
        </ul>
        <ThemeDropdown class="hidden md:block ml-6 md:ml-0" :small="false" />
        <Sidebar />
    </nav>
</template>

<script setup>
import ThemeDropdown from "~/components/ThemeDropdown.vue";
import ReturnToHome from "~/components/prelobby_game/navbar/ReturnToHome.vue";

const returnToHomepage = () => {
    my_modal_1.showModal();
};
</script>
