<script setup lang="ts">
import { useLobbyStore } from "~/stores/lobby";

const lobbyStore = useLobbyStore();

const props = defineProps<{
    resetTimestamp: number;
}>();

watch(
    () => props.resetTimestamp,
    () => {
        console.log("reset");
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
</script>

<template>
    <div class="fixed top-20 left-8" v-if="useCountdown">
        <span
            class="countdown font-mono text-6xl"
            :class="{ 'text-error': overtime }"
        >
            <span :style="`--value:${countdownMin}`"></span>:
            <span :style="`--value:${countdownSec}`"></span>
        </span>
    </div>
</template>

<style scoped lang="scss"></style>
