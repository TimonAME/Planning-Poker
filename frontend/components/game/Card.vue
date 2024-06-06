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
    <button
        class="btn sm:btn-sm md:btn-md lg:btn-lg mb-2"
        @click="handleClick"
        :disabled="blocked"
    >
        {{ number }}
    </button>
</template>
