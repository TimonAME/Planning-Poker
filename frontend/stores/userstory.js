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
            // neue Aktion zum Löschen einer User Story
            this.userStories.splice(index, 1);
        },
        moveUserStory(from, to ) {
            // neue Aktion zum Verschieben einer User Story
            const [removed] = this.userStories.splice(from, 1);
            this.userStories.splice(to, 0, removed);
        }
    },
    persist: true,
});
