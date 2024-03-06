<template>
    <div class="flex flex-col sm:w-1/3">
        <div class="flex justify-center items-center text-left w-full">
            <div>
                <h1 class="text-sm font-mono uppercase mb-4 text-primary">
                    Scrum planning poker for agile teams
                </h1>
                <h2
                    class="lg:text-7xl md:text-6xl text-4xl font-bold mb-4 text-primary"
                >
                    Planning Poker
                </h2>
                <p class="text-sm text-primary">
                    The Planning Poker tool allows teams to estimate the effort
                    for tasks by using special cards collectively.
                </p>
                <router-link
                    class="inline-block py-2 px-6 mt-5 bg-button hover:bg-buttonhover text-sm text-white font-bold rounded-xl transition duration-200"
                    to="/prelobby"
                >
                    Start Game
                </router-link>
            </div>
        </div>
    </div>
</template>

<script setup></script>

<style scoped>
/* Add your scoped styles here */
</style>
