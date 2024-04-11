<template>
    <div
        class="bg-base-300 hover:opacity-100 opacity-75 p-4 cursor-pointer rounded-md shadow-md transition-all duration-200"
    >
        <h3 class="text-lg font-bold text-primary mb-2 break-words">
            {{ userStory.title }}
        </h3>
        <p class="text-base-content overflow-y-auto max-h-24 break-words">
            {{ userStory.description }}
        </p>
    </div>
</template>
<script setup>
// Define props for the UserStory component
const props = defineProps({
    userStory: {
        type: Object,
        required: true,
    },
});
</script>
