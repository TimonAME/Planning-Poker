import { defineStore } from "pinia";

export const useUserStoryStore = defineStore("userstory", {
    state: () => ({
        userStories: [], // neues Array für User Stories
    }),
    actions: {
        addUserStory(userStory) {
            // neue Aktion zum Hinzufügen einer User Story
            this.userStories.push(userStory);
        },
        deleteUserStory(index) {
            // neue Aktion zum Löschen einer User Story lol
            this.userStories.splice(index, 1);
        },
    },
    persist: true,
});
