<template>
    <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
            <h2 class="card-title">Selected Card:</h2>
            <!-- Display the value of the selected card -->
            <div
                v-if="selectedCard !== null"
                class="card-actions justify-center mt-4"
            >
                <button class="btn btn-primary btn-lg no-animation">
                    {{ selectedCard }}
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    selectedCard: {
        type: Number,
        default: null,
    },
});
</script>
