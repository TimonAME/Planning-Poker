<template>
    <StartGameOverlay />
    <div class="flex flex-col sm:w-1/3">
        <div class="flex justify-center items-center text-left w-full">
            <div>
                <h1 class="text-sm font-mono uppercase mb-4">
                    Scrum planning poker for agile teams
                </h1>
                <h2 class="lg:text-7xl md:text-6xl text-4xl font-bold mb-4">
                    Planning Poker
                </h2>
                <p class="text-sm">
                    The Planning Poker tool allows teams to estimate the effort
                    for tasks by using special cards collectively.
                </p>
                <button
                    class="mt-5 btn btn-primary flex items-center justify-center w-2/3"
                    @click="createLobby"
                >
                    Create Lobby
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import StartGameOverlay from "~/components/homepage/StartGameOverlay.vue";

const createLobby = () => {
    console.log("Create Lobby");
    my_modal_5.showModal();
};
</script>

<style scoped>
/* Add your scoped styles here */
</style>
