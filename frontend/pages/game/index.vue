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
                        class="text-2xl font-bold text-primary mb-2"
                        v-if="firstUserStory"
                    >
                        {{ firstUserStory.title }}
                    </h1>
                    <h1 class="text-2xl font-bold text-gray-800 mb-2" v-else>
                        Add new User Stories
                    </h1>
                    <p
                        class="text-base text-base-content leading-relaxed"
                        v-if="firstUserStory"
                    >
                        {{ firstUserStory.description }}
                    </p>
                </div>
                <Board :selectedCard="selectedCard" />
                <!-- TODO: Ready button = wenn gedruückt wird, dann wird der User auf ready gesetzt und Cards werden gelocked -->
                <div class="flex gap-4">
                    <button
                        class="btn btn-wide sm:btn-sm md:btn-md lg:btn-lg"
                        @click="
                            readyButton = !readyButton;
                            setStatus();
                        "
                        :class="readyButton ? 'btn-neutral' : 'btn-error'"
                        :disabled="selectedCard === null"
                    >
                        {{ readyButton ? "Not Ready" : "Ready" }}
                    </button>
                    <!-- TODO: Button nur anzeigen wenn man admin ist -->
                    <a :href="readyButton ? '#endVote' : null">
                        <button
                            class="btn btn-active btn-wide sm:btn-sm md:btn-md lg:btn-lg"
                            @click="tryEndVote()"
                            :class="readyButton ? 'btn-success' : 'btn-neutral'"
                            :disabled="!readyButton"
                        >
                            End Vote
                        </button>
                    </a>
                </div>
                <div class="flex justify-center space-x-4">
                    <Card
                        v-for="number in votingSystem"
                        :key="number"
                        :number="number"
                        :blocked="readyButton"
                        @cardClicked="handleCardClick"
                    />
                </div>
            </div>
            <NameTable class="z-20" />
            <EndVoteModal
                :allReady="allReady"
                @update-all-ready="allReady = $event"
            />
        </div>
    </div>
</template>

<script setup>
import LobbyName from "~/components/prelobby/LobbyName.vue";
import Navbar from "~/components/prelobby_game/navbar/Navbar.vue";
import Board from "~/components/game/Board.vue";
import Card from "~/components/game/Card.vue";
import NameTable from "~/components/game/NameTable.vue";
import { computed } from "vue";

import { useLobbyStore } from "~/stores/lobby";
import { useUserStoryStore } from "~/stores/userstory";
import { useUserStore } from "~/stores/user.js";
import EndVoteModal from "~/components/game/EndVoteModal.vue";

const lobbyStore = useLobbyStore();
const userStore = useUserStore();

// Kartenarten:
let fibonacciNumbers = ref([0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]);
let tShirtSizes = ref(["XS", "S", "M", "L", "XL", "XXL"]);
let powersOfTwo = ref([1, 2, 4, 8, 16, 32, 64, 128, 256, 512]);

// Ausgewähltes Voting System
let votingSystem = fibonacciNumbers;
if (lobbyStore.votingSystem === "Fibonacci") {
    votingSystem = fibonacciNumbers;
} else if (lobbyStore.votingSystem === "T-shirts") {
    votingSystem = tShirtSizes;
} else if (lobbyStore.votingSystem === "Powers of 2") {
    votingSystem = powersOfTwo;
}

const userStoryStore = useUserStoryStore();
const userStories = ref(userStoryStore.userStories);
const firstUserStory = computed(() => userStories.value[0]);

let selectedCard = ref(null);
const handleCardClick = (number) => {
    // Trigger your function for later use here
    // console.log(`Card with number ${number} was clicked`);

    selectedCard.value = number;
};

const readyButton = ref(false);

const setStatus = () => {
    const user = userStore.userList[0];
    if (readyButton.value) {
        userStore.setUserStatus(user, "ready");
        user.selectedCard = selectedCard.value;
    } else {
        userStore.setUserStatus(user, "not ready");
    }

    console.log(user.selectedCard);
};

let allReady = ref(true);
const tryEndVote = () => {
    allReady.value = true;

    // prüfen ob alle User ready sind
    userStore.userList.forEach((user) => {
        if (user.status !== "ready") {
            allReady.value = false;
        }
    });
};
</script>
