import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
    state: () => ({
        userList: [], // Array of users
    }),
    actions: {
        // Add a user with name, status and admin
        addUser(name, status, admin) {
            this.userList.push({ name, status, admin });
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
