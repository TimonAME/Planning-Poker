<template>
    <input
        type="text"
        placeholder="Search..."
        class="w-full p-2 bg-base-300 border border-transparent rounded-md focus:border-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary transition-colors duration-300"
        v-model="search"
    />
</template>

<script setup>
import { ref, watch } from "vue";
import { useUserStoryStore } from "~/stores/userstory";

const search = ref("");
const searchUserStories = ref();

const userStoryStore = useUserStoryStore();

const emit = defineEmits(["update:searchUserStories"]);

//TODO: maybe debouncen

watch(search, (newVal) => {
    newVal = newVal.toLowerCase();
    //console.log(newVal);
    searchUserStories.value = userStoryStore.searchUserStory(newVal);
    emit("update:searchUserStories", searchUserStories.value);
});
</script>
