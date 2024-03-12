<template>
    <div class="absolute inset-0 -z-10 h-full w-full">
        <!-- dotted background from: https://bg.ibelick.com/ -->
        <!-- Punkte im Hintergrund: bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] -->
        <div
            class="flex flex-col justify-start h-screen overflow-hidden sm:mx-0 mx-4"
        >
            <Navbar class="z-20" />
            <DropdownMenu class="z-20" />
            <div class="flex flex-col justify-center items-center h-screen">
                <router-link to="/" class="link link-primary">Home</router-link>
            </div>
        </div>
    </div>
</template>

<script setup>
import DropdownMenu from "~/components/prelobby/Lobbyname.vue";
import Navbar from "~/components/prelobby/Navbar.vue";
</script>

<style lang="scss" scoped></style>
