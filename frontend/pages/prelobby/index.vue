<template>
    <div
        class="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"
    >
        <!-- dotted background from: https://bg.ibelick.com/ -->
        <div class="flex flex-col justify-between overflow-hidden">
            <Navbar />
        </div>
        <div class="flex flex-row justify-start ml-10">
            <DropdownMenu />
        </div>
        <div class="flex flex-row justify-center">
            <StartGame />
        </div>
    </div>
</template>

<script setup>
import Navbar from "~/components/prelobby/Navbar.vue";
import DropdownMenu from "~/components/prelobby/DropdownMenu.vue";
import StartGame from "~/components/prelobby/StartGame.vue";
</script>

<style lang="scss" scoped></style>
