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
                class="range"
                step="25"
            />
            <div class="w-full flex justify-between text-xs px-2">
                <span>15</span>
                <span>30</span>
                <span>60</span>
                <span>120</span>
                <span>240</span>
            </div>
        </div>
    </div>
</template>

<script setup>
const emit = defineEmits(["update-timer-value"]);

let enableTimer = ref(false);
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

watch([enableTimer, timerValue], () => {
    let mappedTimerValue = null;
    if (enableTimer.value) {
        mappedTimerValue = mapRangeToTimerValue(timerValue.value);
    }
    emit("update-timer-value", {
        enableTimer: enableTimer.value,
        timerValue: mappedTimerValue,
    });
    console.log(mappedTimerValue);
});
</script>

<style lang="scss" scoped></style>
