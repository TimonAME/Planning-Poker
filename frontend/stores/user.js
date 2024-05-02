import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
    state: () => ({
        userList: [], // Array of users
    }),
    actions: {
        // Add a user to the list
        addUser(user) {
            this.userList.push(user);
        },
        deleteAllUsers() {
            this.userList = [];
        },
        setUserStatus(user, status) {
            user.status = status;
        },
    },
    persist: true,
});
