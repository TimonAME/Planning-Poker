<template>
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
            <li>
                <router-link
                    to="#"
                    class="text-sm hover:text-primary transition-colors duration-80"
                    >Settings</router-link
                >
            </li>
        </ul>
        <ThemeDropdown />
        <Sidebar />
    </nav>
</template>

<script>
import Sidebar from '../Sidebar/Sidebar.vue';


</script>
