<template>
    <input
        type="text"
        placeholder="Search..."
        class="w-full p-2 bg-base-300 border border-transparent rounded-md focus:border-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary transition-colors duration-300 mb-2"
        v-model="searchTerm"
    />
</template>

<script setup>
import { ref, watch } from "vue";
import { useUserStoryStore } from "~/stores/userstory";

const searchTerm = ref("");

const emit = defineEmits(["update:searchTerm"]);

//TODO: maybe debouncen

watch(searchTerm, (newVal) => {
    newVal = newVal.toLowerCase();
    //console.log(newVal);
    emit("update:searchTerm", newVal);
});
</script>
