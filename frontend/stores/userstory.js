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
    },
    persist: true,
});
