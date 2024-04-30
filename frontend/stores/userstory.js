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
        editUserStory(index, userStory) {
            this.userStories.splice(index, 1, userStory);
        },
        moveUserStory(from, to) {
            // neue Aktion zum Verschieben einer User Story
            const [removed] = this.userStories.splice(from, 1);
            this.userStories.splice(to, 0, removed);
        },
        searchUserStory(searchTerm) {
            // neue Aktion zum Suchen einer User Story
            return this.userStories.filter((userStory) =>
                userStory.title.toLowerCase().includes(searchTerm),
            );
        },
    },
    persist: true,
});
