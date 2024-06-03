<template>
    <button class="btn btn-outline btn-error" @click="exportFunction">
        Export
    </button>
</template>
<script setup>
import { ref } from "vue";
import { useUserStoryStore } from "@/stores/userStory";
import { useLobbyStore } from "~/stores/lobby.js";

const removeHtmlTags = (str) => {
    if (typeof str !== "string") {
        str = String(str);
    }
    return str.replace(/<[^>]*>/g, "");
};

const exportFunction = () => {
    const userStoryStore = useUserStoryStore();
    const userStories = userStoryStore.userStories;

    if (userStories.length === 0) {
        console.log("No user stories to export");
        return;
    }

    let csvContent = "";
    userStories.forEach((userStory, index) => {
        // Exclude 'voted' attribute and change 'size' to 'not voted' if null
        let filteredUserStory = {};
        for (let key in userStory) {
            if (key !== "voted" && key !== "originalIndex") {
                if (key === "size" && userStory[key] === null) {
                    filteredUserStory[key] = "not voted";
                } else {
                    filteredUserStory[key] = userStory[key];
                }
            }
        }

        if (index === 0) {
            // Add header row
            csvContent += "Title;Description;StoryPoints\n";
        }
        let row = Object.values(filteredUserStory)
            .map((value) => `"${removeHtmlTags(value)}"`)
            .join(";");
        csvContent += row + "\n";
    });

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);

    // Format the date
    const date = new Date();
    const formattedDate = date
        .toLocaleString("en-GB")
        .replace(/[:]/g, "")
        .replace(/[/]/g, "-");

    link.setAttribute(
        "download",
        useLobbyStore().lobbyName + "-" + formattedDate + ".csv",
    );
    document.body.appendChild(link);
    link.click();
};
</script>
