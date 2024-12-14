<template>
    <div
        class="md:w-1/2 sm:w-2/3 w-full mx-2 mt-8 flex flex-wrap justify-center items-center"
    >
        <!-- Loop through users and display them -->
        <transition-group name="list" v-if="users.length">
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
                        >{{ getInitials(user.name) }}
                    </span>
                </div>
            </div>
        </transition-group>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useUserStore } from "~/stores/user.js";

const userStore = useUserStore();

const users = ref(userStore.userList);
watch(
    () => userStore.userList,
    (newList) => {
        users.value = newList;
    },
);

const hoveredIndex = ref(null);

function toggleOpacity(index, isHovered) {
    if (isHovered) {
        hoveredIndex.value = index;
    } else {
        hoveredIndex.value = null;
    }
}
function getInitials(name) {
    if (name === "" || typeof name !== "string") return "";

    let ret = "";
    name = name.split(" ");
    if (name.length === 1) {
        ret += name[0][0].toUpperCase();
        return ret;
    } else {
        ret += name[0][0].toUpperCase() + name[1][0].toUpperCase();
        return ret;
    }
}

// ****** TEMPORARY CODE ******
// only for demonstation purposes
//
// zum hinzufügen von Usern
//
// wenn erster eintrag in users gemacht wurde dann starte interval
let intervalId = null;
onMounted(() => {
    intervalId = setInterval(() => {
        if (users.value.length > 0) {
            clearInterval(intervalId);
            intervalId = setInterval(() => {
                if (users.value.length < 7) {
                    userStore.addUser(
                        "User " + (users.value.length + 1),
                        "not ready",
                        false,
                    );
                }
            }, 500);
        }
    }, 200);
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
