<template>
    <!-- TODO: Playercount -->

    <div class="absolute inset-0 -z-10 h-full w-full">
        <!-- dotted background from: https://bg.ibelick.com/ -->
        <!-- Punkte im Hintergrund: bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] -->
        <div
            class="flex flex-col justify-start h-screen overflow-hidden sm:mx-0 mx-4"
        >
            <!--<Username />-->
            <Navbar class="z-40" />
            <Lobbyname class="sm:z-50 z:30" />

            <div
                class="relative flex flex-col justify-center items-center mt-24 sm:mt-5"
            >
                <InvitePlayers />
                <UserDisplay />
            </div>
            <div
                class="relative z-10 flex flex-col justify-center items-center mt-5"
            >
                <StartGame />
            </div>
        </div>
    </div>
</template>

<script setup>
import Navbar from "~/components/prelobby_game/navbar/Navbar.vue";
import Lobbyname from "~/components/prelobby/LobbyName.vue";
import StartGame from "~/components/prelobby/StartGame.vue";
import UserDisplay from "~/components/prelobby/UserDisplay.vue";
import InvitePlayers from "~/components/prelobby/InvitePlayers.vue";
</script>

<style lang="scss" scoped></style>
