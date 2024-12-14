<script setup>
import User from "~/components/game/User.vue";

//useUserStore:
import { useUserStore } from "~/stores/user.js";
const userStore = useUserStore();
const userList = ref(userStore.userList);

watch(
    () => userStore.userList,
    (newList) => {
        userList.value = newList;
    },
);

//
// ****** TEMPORARY CODE ******
// only for demonstation purposes
let fibonacciNumbers = [0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
let intervalId = null;
// Function to set a random user to ready
const setRandomUserReady = () => {
    // if all users exept the first one are ready, skip the function
    if (userList.value.slice(1).every((user) => user.status === "ready")) {
        return;
    }

    // Get all users who are not ready and are not user 0
    const notReadyUsers = userList.value.filter(
        (user, index) => user.status !== "ready" && index !== 0,
    );
    // If all users are ready, clear the interval
    // DISABLED FOR TESTIG PORPUSES
    /*
    if (notReadyUsers.length === 0) {
        clearInterval(intervalId);
        return;
    }
   */
    // Select a random user
    const randomUser =
        notReadyUsers[Math.floor(Math.random() * notReadyUsers.length)];

    // Set the user status to ready
    userStore.setUserStatus(randomUser, "ready");

    // Vote for a random card
    randomUser.selectedCard =
        fibonacciNumbers[Math.floor(Math.random() * fibonacciNumbers.length)];
};
// Start the interval after the component is mounted
onMounted(() => {
    intervalId = setInterval(setRandomUserReady, 1000); // 2000 ms = 2 seconds
});
// Clear the interval when the component is unmounted
onUnmounted(() => {
    clearInterval(intervalId);
});
</script>

<template>
    <!-- https://daisyui.com/components/table/ -->
    <div class="fixed bottom-0 left-0 ml-3 mb-3">
        <!-- TODO: max höhe dynamisch machen -->
        <div class="overflow-x-auto max-h-96">
            <table class="table table-sm table-zebra table-pin-rows">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Voted</th>
                    </tr>
                </thead>
                <tbody>
                    <User
                        v-for="(user, index) in userList"
                        :key="index"
                        :index="index"
                        :user="user"
                    />
                </tbody>
            </table>
        </div>
    </div>
</template>
