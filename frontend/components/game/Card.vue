<script setup>
const props = defineProps({
    number: {
        type: [Number, String],
        required: true,
    },
    blocked: {
        type: Boolean,
        default: false,
    },
});

const handleClick = () => {
    emit("cardClicked", props.number);
};

const emit = defineEmits(["cardClicked"]);
</script>

<template>
    <button class="btn btn-lg" @click="handleClick" :disabled="blocked">
        {{ number }}
    </button>
</template>
