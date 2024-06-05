import { defineStore } from "pinia";

export const useLobbyStore = defineStore("lobby", {
    state: () => ({
        lobbyName: "",
        lobbyDescription: "",
        name: "",
        votingSystem: "",
        votingInProgress: false,
        timerValue: null,
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
