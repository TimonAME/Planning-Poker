<script setup lang="ts">
// TODO: timer muss noch resetted werden
// TODO: timer muss resetted werden wenn erste userstory sich ändert

const props = defineProps<{
    reset: boolean;
}>();

import { useLobbyStore } from "~/stores/lobby";

const lobbyStore = useLobbyStore();

let useCountdown = ref(false);
let countdown = ref(0);
let countdownMin = ref(0);
let countdownSec = ref(0);
let overtime = ref(false);

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
    const interval = setInterval(() => {
        countdown.value -= 1;
        countdownMin.value = Math.floor(countdown.value / 60);
        countdownSec.value = countdown.value % 60;
        if (countdown.value === 0) {
            overtime.value = true;
            clearInterval(interval);
        }
    }, 1000);
};

// execute first check on mount
onMounted(() => {
    firstCheck();
});

// Reset countdown if reset value changes
watch(
    () => props.reset,
    () => {
        if (newVal !== oldVal) {
            console.log("reset");
            firstCheck();
        }
    },
);
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
