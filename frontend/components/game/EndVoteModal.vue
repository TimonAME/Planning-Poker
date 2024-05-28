<template>
    <div class="modal" role="dialog" id="endVote">
        <div class="modal-box">
            <div v-if="!allReady">
                <h3 class="font-bold text-lg">STOP</h3>
                <p class="py-4">Not all users are ready!</p>
            </div>
            <div v-else>
                <VoteAnalysis @update-final-card="finalCard = $event" />
            </div>

            <div class="modal-action">
                <a v-if="!allReady" href="#" class="btn">Wait!</a>
                <a v-if="!allReady" @click="skipReady()" class="btn">
                    Next ->
                </a>
                <a
                    v-if="allReady"
                    @click="nextVote()"
                    href="#"
                    class="btn"
                    :class="{ 'btn-disabled': finalCard === null }"
                >
                    Next Vote
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
import VoteAnalysis from "~/components/game/VoteAnalysis.vue";
import { defineProps, defineEmits } from "vue";
import { useUserStoryStore } from "~/stores/userstory"; // Import the userStoryStore
import { useUserStore } from "~/stores/user.js";

const props = defineProps({
    allReady: Boolean,
});

const emit = defineEmits(["update-all-ready"]);

const userStoryStore = useUserStoryStore(); // Initialize the userStoryStore
const userStore = useUserStore(); // Initialize the userStore

const skipReady = () => {
    if (!props.allReady) {
        emit("update-all-ready", true);
    }
};

let finalCard = ref(null); // Initialize the finalCard
const nextVote = () => {
    if (finalCard.value !== null) {
        // Get the first user story
        const activeUserStory = userStoryStore.userStories.find(
            (userStory) => !userStory.voted,
        );

        // Set the voted attribute to true
        activeUserStory.voted = true;

        // Add a new attribute size and set its value to finalCard
        activeUserStory.size = finalCard.value;

        // Emit the update-all-ready event to move to the next vote
        emit("update-all-ready", false);
    }

    // Reset the finalCard
    finalCard.value = null;

    // make Users unready
    userStore.userList.forEach((user) => {
        user.status = "not ready";
    });
};
</script>
