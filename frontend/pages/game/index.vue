<template>
    <div class="absolute inset-0 -z-10 h-full w-full">
        <div
            class="flex flex-col justify-start h-screen overflow-hidden sm:mx-0 mx-4"
        >
            <Navbar class="z-20" />
            <LobbyName class="z-20" />

            <div
                class="relative z-10 flex flex-col items-center justify-between flex-grow gap-16 mt-16 mb-5"
            >
                <div class="flex flex-col items-center">
                    <h1
                        class="text-2xl font-bold text-gray-800 mb-2"
                        v-if="firstUserStory"
                    >
                        {{ firstUserStory.title }}
                    </h1>
                    <h1 class="text-2xl font-bold text-gray-800 mb-2" v-else>
                        Add new User Stories
                    </h1>
                    <p
                        class="text-base text-gray-600 leading-relaxed"
                        v-if="firstUserStory"
                    >
                        {{ firstUserStory.description }}
                    </p>
                </div>
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
import { computed } from "vue";

import { useUserStoryStore } from "~/stores/userstory";
const userStoryStore = useUserStoryStore();
const userStories = ref(userStoryStore.userStories);
const firstUserStory = computed(() => userStories.value[0]);

let fibonacciNumbers = ref([0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]);
let selectedCard = ref(null);

const handleCardClick = (number) => {
    // Trigger your function for later use here
    // console.log(`Card with number ${number} was clicked`);

    selectedCard.value = number;
};
</script>
