<template>
    <label class="form-control w-full">
        <div class="label">
            <span class="label-text">Who can manage user stories</span>
        </div>
        <select class="select select-bordered">
            <option selected>Me</option>
            <option>Everyone</option>
        </select>
    </label>
    <div class="form-control mt-2">
        <label class="label cursor-pointer">
            <span class="label-text">Enable Timer</span>
            <input type="checkbox" class="toggle" v-model="enableTimer" />
        </label>
        <div v-if="enableTimer">
            <input
                type="range"
                min="0"
                max="100"
                v-model="timerValue"
                class="range transition-all duration-500 ease-in-out"
                step="25"
                :class="{ 'range-success': firstSelected }"
            />
            <div class="w-full flex justify-between text-xs px-2">
                <span>15s</span>
                <span>30s</span>
                <span>60s</span>
                <span>120s</span>
                <span>240s</span>
            </div>

            <div>
                OR
                <input
                    type="number"
                    placeholder="Enter timer value in seconds"
                    class="input input-bordered w-auto mt-2 ml-2 transition-all duration-500 ease-in-out"
                    v-model="manualTimerValue"
                    :class="{ 'text-success shadow-lg': !firstSelected }"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
const emit = defineEmits(["update-timer-value"]);

let enableTimer = ref(false);
let manualTimerValue = ref(null);
let timerValue = ref(50);

// Function to map range input values to timer values
const mapRangeToTimerValue = (value) => {
    value = Number(value);
    switch (value) {
        case 0:
            return 15;
        case 25:
            return 30;
        case 50:
            return 60;
        case 75:
            return 120;
        case 100:
            return 240;
    }
};
let mappedTimerValue = null;
let firstSelected = true;
watch([enableTimer, timerValue], () => {
    if (enableTimer.value) {
        mappedTimerValue = mapRangeToTimerValue(timerValue.value);
        emit("update-timer-value", {
            enableTimer: enableTimer.value,
            timerValue: mappedTimerValue,
        });
        firstSelected = true;
        console.log(mappedTimerValue);
    }
});
watch([enableTimer, manualTimerValue], () => {
    if (
        enableTimer.value &&
        manualTimerValue.value !== null &&
        manualTimerValue.value !== 0
    ) {
        mappedTimerValue = manualTimerValue.value;
        emit("update-timer-value", {
            enableTimer: enableTimer.value,
            timerValue: mappedTimerValue,
        });
        firstSelected = false;
        console.log(mappedTimerValue);
    }
});
</script>

<style lang="scss" scoped></style>
