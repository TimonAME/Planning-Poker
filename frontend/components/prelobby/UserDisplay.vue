<template>
    <div
        class="md:w-1/2 sm:w-2/3 w-full mx-2 mt-8 flex flex-wrap justify-center items-center"
    >
        <!-- Loop through users and display them -->
        <transition-group name="list">
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
                        >{{ user.name[0] }}</span
                    >
                </div>
            </div>
        </transition-group>
    </div>
</template>

<script setup>
import { ref } from "vue";

const users = ref([{ id: 1, name: "Lobby Admin" }]);

const hoveredIndex = ref(null);

function toggleOpacity(index, isHovered) {
    if (isHovered) {
        hoveredIndex.value = index;
    } else {
        hoveredIndex.value = null;
    }
}
onMounted(() => {
    setInterval(() => {
        if (users.value.length < 20) {
            users.value.push({
                id: users.value.length + 1,
                name: Math.random().toString(36).substring(7),
            });
        }
    }, 1000);
});
</script>

<style>
.list-enter-active,
.list-leave-active {
    transition: all 0.5s;
}
.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: scale(0.5);
}
</style>
