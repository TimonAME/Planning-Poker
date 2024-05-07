<template>
    <h3 class="font-bold text-lg">Vote Analysis</h3>
    <p class="py-4">This is the result of the vote!</p>
    <v-chart class="chart" :option="option" autoresize />
</template>

<script setup>
//TODO: chart wird nicht neu geladen wenn eine andere Karte ausgewählt wird

import "echarts";
import VChart from "vue-echarts";
import { ref } from "vue";
import { useLobbyStore } from "~/stores/lobby";
import { useUserStore } from "~/stores/user";
import { computed, defineProps } from "vue";

const lobbyStore = useLobbyStore();
const userStore = useUserStore();

// TODO: votingSystem sollte nicht hardcoded sein -> die Arrays sollten aus dem Store kommen
let fibonacciNumbers = [0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
let tShirtSizes = ["XS", "S", "M", "L", "XL", "XXL"];
let powersOfTwo = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512];

let votingSystem = fibonacciNumbers;
if (lobbyStore.votingSystem === "Fibonacci") {
    votingSystem = fibonacciNumbers;
} else if (lobbyStore.votingSystem === "T-shirts") {
    votingSystem = tShirtSizes;
} else if (lobbyStore.votingSystem === "Powers of 2") {
    votingSystem = powersOfTwo;
}

// Get selected cards of all users
const selectedCards = computed(() =>
    userStore.userList.map((user) => user.selectedCard),
);

// Count how often each card was selected
const cardCounts = ref(
    computed(() => {
        const counts = {};
        selectedCards.value.forEach((card) => {
            counts[card] = (counts[card] || 0) + 1;
        });
        return votingSystem.map((card) => counts[card] || 0);
    }),
);

const option = ref({
    tooltip: {
        trigger: "item",
        formatter: "{b} : {c}",
    },
    xAxis: {
        type: "category",
        data: votingSystem,
    },
    yAxis: {
        type: "value",
    },
    series: [
        {
            data: cardCounts.value,
            type: "bar",
        },
    ],
});
</script>

<style scoped>
.chart {
    height: 300px;
}
</style>
