import { defineStore } from "pinia";

export const useLobbyStore = defineStore("lobby", {
    state: () => ({
        lobbyName: "",
        lobbyDescription: "",
        name: "",
    }),
    actions: {
        setLobbyDetails(name, description) {
            this.lobbyName = name;
            this.lobbyDescription = description;
        },
    },
    persist: true,
});
