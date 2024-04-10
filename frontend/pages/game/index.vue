<template>
    <div class="absolute inset-0 -z-10 h-full w-full">
        <!-- dotted background from: https://bg.ibelick.com/ -->
        <!-- Punkte im Hintergrund: bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] -->
        <div
            class="flex flex-col justify-start h-screen overflow-hidden sm:mx-0 mx-4"
        >
            <Navbar class="z-20" />
            <LobbyName class="z-20" />

            <div
                class="relative z-10 flex flex-col items-center flex-grow gap-16 mt-16 mb-5"
            >
                <Board :selectedCard="selectedCard" />
                <div class="flex justify-center space-x-4">
                    <Card
                        v-for="number in fibonacciNumbers"
                        :key="number"
                        :number="number"
                        @cardClicked="handleCardClick"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import LobbyName from "~/components/prelobby/LobbyName.vue";
import Navbar from "~/components/prelobby_game/navbar/Navbar.vue";
import Board from "~/components/game/Board.vue";
import Card from "~/components/game/Card.vue";

let fibonacciNumbers = ref([0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]);
let selectedCard = ref(null);

const handleCardClick = (number) => {
    // Trigger your function for later use here
    // console.log(`Card with number ${number} was clicked`);

    selectedCard.value = number;
};
</script>
