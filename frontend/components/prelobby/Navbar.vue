<template>
    <!-- TODO!!!! Documentation ist höher als die anderen !!!!!!!!!! -->

    <nav
        class="relative px-4 py-4 flex justify-center items-center h-16 lg:gap-48 md:gap-28"
    >
        <router-link
            to="#"
            class="text-3xl font-bold leading-none hidden md:block w-32"
        >
        </router-link>
        <ul class="flex items-center gap-6">
            <li>
                <router-link
                    to="/"
                    class="text-sm hover:text-primary transition-colors duration-80"
                    >Home</router-link
                >
            </li>
            <Documentation />
            <ThemeDropdown class="block md:hidden" />
            <li>
                <router-link
                    to="#"
                    class="text-sm hover:text-primary transition-colors duration-80"
                    >Settings</router-link
                >
            </li>
        </ul>
        <ThemeDropdown class="hidden md:block ml-6 md:ml-0" />
        <Sidebar />
    </nav>
</template>

<script>
import { defineComponent } from "vue";
import ThemeDropdown from "~/components/ThemeDropdown.vue";
import InvitePlayers from "~/components/prelobby/InvitePlayers.vue";

export default defineComponent({
    components: { InvitePlayers, ThemeDropdown },
});
</script>
