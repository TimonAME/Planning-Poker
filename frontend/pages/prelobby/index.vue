<template>
    <div class="absolute inset-0 -z-10 h-full w-full">
        <!-- dotted background from: https://bg.ibelick.com/ -->
        <!-- Punkte im Hintergrund: bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] -->
        <div
            class="flex flex-col justify-start h-screen overflow-hidden sm:mx-0 mx-4"
        >
            <Navbar />
            <div class="flex flex-row justify-start">
                <DropdownMenu />
            </div>
            <div class="flex flex-col justify-center items-center mt-5">
                <StartGame />
            </div>
        </div>
    </div>
</template>

<script setup>
import Navbar from "~/components/prelobby/Navbar.vue";
import DropdownMenu from "~/components/prelobby/Lobbyname.vue";
import StartGame from "~/components/prelobby/StartGame.vue";
</script>

<style lang="scss" scoped></style>
