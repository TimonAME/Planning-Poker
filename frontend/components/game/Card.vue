<script setup>
const props = defineProps({
    number: {
        type: Number,
        required: true,
    },
});

const handleClick = () => {
    emit("cardClicked", props.number);
};

const emit = defineEmits(["cardClicked"]);
</script>

<template>
    <button class="btn btn-lg" @click="handleClick">{{ number }}</button>
</template>
