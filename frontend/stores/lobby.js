import { defineStore } from "pinia";

export const useLobbyStore = defineStore("lobby", {
    state: () => ({
        lobbyName: "",
        lobbyDescription: "",
        name: "",
        votingSystem: "",
    }),
    actions: {
        setLobbyDetails(name, description, votingSystem) {
            this.lobbyName = name;
            this.lobbyDescription = description;
            this.votingSystem = votingSystem;
        },
    },
    persist: true,
});
