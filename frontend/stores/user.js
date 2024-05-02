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
        // Remove a user from the list
        removeUser(user) {
            const index = this.userList.indexOf(user);
            this.userList.splice(index, 1);
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
