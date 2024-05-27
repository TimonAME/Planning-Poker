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
                <button v-if="!allReady" href="#" class="btn">Wait!</button>
                <button v-if="!allReady" @click="skipReady()" class="btn">
                    Next ->
                </button>
                <button
                    v-if="allReady"
                    @click="nextVote()"
                    href="#"
                    class="btn"
                    :disabled="finalCard === null"
                >
                    Next Vote
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import VoteAnalysis from "~/components/game/VoteAnalysis.vue";
import { defineProps, defineEmits } from "vue";
import { useUserStoryStore } from "~/stores/userstory"; // Import the userStoryStore

const props = defineProps({
    allReady: Boolean,
});

const emit = defineEmits(["update-all-ready"]);

const userStoryStore = useUserStoryStore(); // Initialize the userStoryStore

const skipReady = () => {
    if (!props.allReady) {
        emit("update-all-ready", true);
    }
};

let finalCard = ref(null); // Initialize the finalCard
const nextVote = () => {
    //TODO: Modal does not close when pressing next vote
    //TODO: Save the selected card to the userStoryStore
    //TODO: Handle Userstorys

    // Save the selected card to the userStoryStore
    if (finalCard.value !== null) {
        userStoryStore.addUserStory({
            title: finalCard.value,
            description: "",
        });
        //finalCard.value = null; // Reset the selected card
    }
};
</script>
