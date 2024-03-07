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
            <!--
      <li class="text-gray-300">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" class="w-4 h-4 current-fill" viewBox="0 0 24 24">
          <path d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
        </svg>
      </li>
      -->
            <Documentation />
            <!--
      <li class="text-gray-300">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" class="w-4 h-4 current-fill" viewBox="0 0 24 24">
          <path d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
        </svg>
      </li>
      -->
            <li>
                <router-link
                    to="#"
                    class="text-sm hover:text-primary transition-colors duration-80"
                    >Settings</router-link
                >
            </li>
        </ul>
        <ThemeDropdown />
    </nav>
</template>

<script setup>
import ThemeDropdown from "~/components/ThemeDropdown.vue";
</script>
