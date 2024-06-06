<script setup lang="ts">
import { useLobbyStore } from "~/stores/lobby";

const lobbyStore = useLobbyStore();

const props = defineProps<{
    resetTimestamp: number;
}>();

watch(
    () => props.resetTimestamp,
    () => {
        //console.log("reset");
        if (interval) {
            clearInterval(interval);
        }
        firstCheck();
    },
);

// execute first check on mount
onMounted(() => {
    firstCheck();
});

let useCountdown = ref(false);
let countdown = ref(0);
let countdownMin = ref(0);
let countdownSec = ref(0);
let overtime = ref(false);
let interval: any = null;

const firstCheck = () => {
    console.log(lobbyStore.timerValue);
    if (lobbyStore.timerValue !== null) {
        useCountdown.value = true;
        countdown.value = lobbyStore.timerValue;
        overtime.value = false;
        startCountdown();
    }
};

const startCountdown = () => {
    interval = setInterval(() => {
        countdown.value -= 1;
        countdownMin.value = Math.floor(countdown.value / 60);
        countdownSec.value = countdown.value % 60;
        if (countdown.value === 0) {
            overtime.value = true;
            clearInterval(interval);
        }
    }, 1000);
};

let paused = ref(false);
const pauseTimer = () => {
    //pause or unpause timer
    if (interval) {
        clearInterval(interval);
        interval = null;
        paused.value = true;
    } else {
        startCountdown();
        paused.value = false;
    }
};
</script>

<template>
    <div
        class="fixed top-20 left-8 cursor-pointer"
        v-if="useCountdown"
        @click="pauseTimer"
    >
        <div class="indicator">
            <span
                class="indicator-item badge badge-primary transition-opacity"
                :class="{ 'opacity-0': !paused }"
                >paused</span
            >
            <span
                class="countdown font-mono text-6xl transition-colors duration-500 ease-in-out"
                :class="{ 'text-error': overtime }"
            >
                <span :style="`--value:${countdownMin}`"></span>:
                <span :style="`--value:${countdownSec}`"></span>
            </span>
        </div>
    </div>
</template>

<style scoped lang="scss"></style>
