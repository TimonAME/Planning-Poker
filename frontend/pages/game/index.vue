<template>
    <div class="absolute inset-0 -z-10 w-full">
        <div
            class="flex flex-col justify-start h-screen overflow-hidden sm:mx-0 mx-4"
        >
            <Navbar class="z-20" />
            <LobbyName class="z-10 sm:z-20" />

            <div
                class="relative z-10 flex flex-col items-center justify-between flex-grow gap-1 sm:gap-4 mt-16 mb-5"
            >
                <div
                    class="flex flex-col items-center max-h-full p-4 w-3/4 flex-shrink"
                >
                    <h1
                        class="text-2xl font-bold text-primary mb-2"
                        v-if="firstUserStory"
                    >
                        {{ firstUserStory.title }}
                    </h1>
                    <h1 class="text-2xl font-bold text-gray-800 mb-2" v-else>
                        Add new User Stories
                    </h1>
                    <!-- TODO: höhe der Description dynamischer machen (wegen verschieden Bildschirm größen) -->
                    <p
                        class="text-base text-base-content leading-relaxed break-words overflow-y-auto max-h-44"
                        v-html="styledDescription"
                    ></p>
                </div>
                <Board :selectedCard="selectedCard" />
                <div class="flex justify-center sm:gap-4 gap-1 w-2/3">
                    <button
                        class="btn sm:btn-wide w-1/2 sm:btn-sm md:btn-md lg:btn-lg"
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
                            class="btn btn-active sm:btn-wide sm:btn-sm md:btn-md lg:btn-lg"
                            @click="tryEndVote()"
                            :class="readyButton ? 'btn-success' : 'btn-neutral'"
                            :disabled="!readyButton"
                        >
                            End Vote
                        </button>
                    </a>
                </div>
                <div
                    class="flex justify-center sm:space-x-4 space-x-1 card-container flex-wrap"
                >
                    <Card
                        v-for="number in votingSystem"
                        :key="number"
                        :number="number"
                        :blocked="
                            readyButton ||
                            !firstUserStory ||
                            lobbyStore.votingInProgress
                        "
                        @cardClicked="handleCardClick"
                    />
                </div>
            </div>
            <NameTable class="z-20 cursor-default md:block hidden" />
            <EndVoteModal
                :allReady="allReady"
                @update-all-ready="
                    allReady = $event;
                    readyButton = false;
                    selectedCard = null;
                    lobbyStore.votingInProgress = true;
                "
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

// Ausgewähltes Voting System
let votingSystem = lobbyStore.votingSystem;

const userStoryStore = useUserStoryStore();
const userStories = ref(userStoryStore.userStories);

// if userStory on first position is voted=true, then dont show it
const firstUserStory = computed(() => {
    return userStories.value.find((userStory) => !userStory.voted);
});

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

const styledDescription = computed(() => {
    let htmlContent;
    // if description is empty, return empty string
    if (!firstUserStory.value) {
        htmlContent = "";
    } else {
        htmlContent = firstUserStory.value.description;
    }

    htmlContent = htmlContent.replace(
        /<h1>/g,
        '<h1 class="text-xl font-bold mt-2 mb-4">',
    );

    htmlContent = htmlContent.replace(/<ul>/g, '<ul class="list-disc pl-5">');

    htmlContent = htmlContent.replace(/<li>/g, '<li class="mb-1">');

    htmlContent = htmlContent.replace(
        /<h2>/g,
        '<h2 class="text-lg font-bold mt-2 mb-4">',
    );

    htmlContent = htmlContent.replace(/<p>/g, '<p class="break-all">');

    return htmlContent;
});
</script>
