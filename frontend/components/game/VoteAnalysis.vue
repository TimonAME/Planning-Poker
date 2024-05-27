<template>
    <h3 class="font-bold text-lg">Vote Analysis</h3>
    <div class="flex justify-between">
        <p class="py-4">This is the result of the vote!</p>

        <select class="select select-bordered" v-model="finalCard">
            <option disabled selected>Final Answer</option>
            <option v-for="card in votingSystem" :key="card" :value="card">
                {{ card }}
            </option>
        </select>
    </div>

    <v-chart class="chart" :option="option" autoresize />
</template>

<script setup>
import "echarts";
import VChart from "vue-echarts";
import { ref, watch, computed } from "vue";
import { useLobbyStore } from "~/stores/lobby";
import { useUserStore } from "~/stores/user";

const lobbyStore = useLobbyStore();
const userStore = useUserStore();

// Add emit function
const emit = defineEmits(["update-final-card"]);

let finalCard = ref(null);

// TODO: votingSystem should not be hardcoded; it should come from the store
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
const cardCounts = computed(() => {
    const counts = {};
    selectedCards.value.forEach((card) => {
        counts[card] = (counts[card] || 0) + 1;
    });
    return votingSystem.map((card) => counts[card] || 0);
});

// Initialize chart option
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

// Watch for changes in cardCounts and update the chart data
watch(
    cardCounts,
    (newCounts) => {
        option.value.series[0].data = newCounts;
    },
    { immediate: true },
);

// Watch for changes in finalCard and emit an event when it changes
watch(
    () => finalCard.value,
    (newCard) => {
        emit("update-final-card", newCard);
    },
);
</script>

<style scoped>
.chart {
    height: 300px;
}
</style>
