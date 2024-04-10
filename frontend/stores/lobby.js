import { defineStore } from "pinia";

export const useLobbyStore = defineStore("lobby", {
    state: () => ({
        lobbyName: "",
        lobbyDescription: "",
    }),
    actions: {
        setLobbyDetails(name, description) {
            this.lobbyName = name;
            this.lobbyDescription = description;
        },
    },
    persist: true,
});
