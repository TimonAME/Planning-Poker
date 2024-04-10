<template>
    <div class="absolute inset-0 -z-10 h-full w-full">
        <!-- dotted background from: https://bg.ibelick.com/ -->
        <!-- Punkte im Hintergrund: bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] -->
        <div
            class="flex flex-col justify-start h-screen overflow-hidden sm:mx-0 mx-4"
        >
            <Navbar class="z-20" />
            <DropdownMenu class="z-20" />

            <div
                class="relative z-10 flex flex-col justify-center items-center mt-5"
            >
                <div class="mockup-window border bg-base-300 w-1/2 mt-44">
                    <div class="flex justify-center px-4 py-16 bg-base-200">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Navbar from "~/components/prelobby_game/navbar/Navbar.vue";
import DropdownMenu from "~/components/prelobby/LobbyName.vue";
</script>

<style lang="scss" scoped></style>
