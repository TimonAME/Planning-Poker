<template>
    <div class="flex flex-col justify-center">
        <div class="flex justify-center w-screen mt-10">
            <progress class="progress w-56" :value="value" max="100">
                <span>0%</span>
            </progress>
        </div>
        <div class="flex justify-center mt-3">
            <button class="btn" @click="progressBar">Click me!</button>
            <button class="btn ml-3" @click="reset">Reset</button>
        </div>
    </div>
</template>

<script setup>
let value = ref(0);
function progressBar() {
    let i = 0;
    let interval = setInterval(() => {
        i++;
        value.value = i;
        if (i === 100) {
            clearInterval(interval);
        }
    }, 50);
}

function reset() {
    value.value = 0;
}
</script>
