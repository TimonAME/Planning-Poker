// stores/lobby.js
import { defineStore } from "pinia";

export const useLobbyStore = defineStore("lobby", {
    state: () => ({
        lobbyName: "",
        description: "",
    }),
    actions: {
        setLobbyDetails(name, description) {
            this.lobbyName = name;
            this.description = description;
        },
    },
});
