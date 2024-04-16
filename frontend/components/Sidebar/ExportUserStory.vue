<template>
    <button class="btn btn-outline btn-error" @click="exportFunction">
        Export
    </button>
</template>
<script setup>
const exportFunction = () => {
    console.log("Exporting User Story");
    // Add your export logic here
};
</script>
