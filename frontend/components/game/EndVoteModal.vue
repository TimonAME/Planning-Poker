<template>
    <div class="modal" role="dialog" id="endVote">
        <div class="modal-box">
            <div v-if="!allReady">
                <h3 class="font-bold text-lg">STOP</h3>
                <p class="py-4">Not all users are ready!</p>
            </div>
            <div v-else>
                <VoteAnalysis />
            </div>

            <div class="modal-action">
                <a v-if="!allReady" href="#" class="btn">Wait!</a>
                <a v-if="!allReady" @click="skipReady()" class="btn">Next -></a>
                <a v-if="allReady" href="#" class="btn">Next Vote</a>
            </div>
        </div>
    </div>
</template>

<script setup>
import VoteAnalysis from "~/components/game/VoteAnalysis.vue";
import { defineProps, defineEmits } from "vue";

const props = defineProps({
    allReady: Boolean,
});

const emit = defineEmits(["update-all-ready"]);

const skipReady = () => {
    if (!props.allReady) {
        emit("update-all-ready", true);
    }
};
</script>
