<template>
    <div
        class="md:w-1/2 sm:w-2/3 w-full mx-2 mt-8 flex flex-wrap justify-center items-center"
    >
        <!-- Loop through users and display them -->
        <div
            v-for="(user, index) in users"
            :key="index"
            class="avatar placeholder m-1"
        >
            <div
                class="relative bg-neutral text-neutral-content rounded-full w-24"
                @mouseover="toggleOpacity(index, true)"
                @mouseleave="toggleOpacity(index, false)"
            >
                <span
                    class="absolute p-6 text-md opacity-0 transition-opacity"
                    :class="{ 'opacity-100': hoveredIndex === index }"
                    >{{ user.name }}</span
                >
                <span
                    class="absolute p-6 text-3xl transition-opacity"
                    :class="{ 'opacity-0': hoveredIndex === index }"
                    >{{ user.initial }}</span
                >
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const users = ref([
    { id: 1, name: "John Doe", initial: "J" },
    { id: 2, name: "Alice Smith", initial: "A" },
    { id: 3, name: "Bob Johnson", initial: "B" },
    { id: 3, name: "Bob Johnson", initial: "B" },
    { id: 1, name: "John Doe", initial: "J" },
    { id: 2, name: "Alice Smith", initial: "A" },
    { id: 3, name: "Bob Johnson", initial: "B" },
    { id: 3, name: "Bob Johnson", initial: "B" },
    { id: 3, name: "Bob Johnson", initial: "B" },
    { id: 3, name: "Bob Johnson", initial: "B" },
    { id: 3, name: "Bob Johnson", initial: "B" },
    { id: 3, name: "Bob Johnson", initial: "B" },
    { id: 3, name: "Bob Johnson", initial: "B" },
]);

const hoveredIndex = ref(null);

function toggleOpacity(index, isHovered) {
    if (isHovered) {
        hoveredIndex.value = index;
    } else {
        hoveredIndex.value = null;
    }
}
</script>

<style scoped lang="scss"></style>
