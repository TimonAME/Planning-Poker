<template>
    <!--
    <button class="btn btn-outline btn-error" @click="exportFunction">
        Export
    </button>
-->
    <div class="dropdown dropdown-end z-50">
        <button
            class="btn btn-outline btn-error"
            @click="toggleDropdown(false)"
            tabindex="0"
            role="button"
        >
            Export
        </button>
        <div
            tabindex="0"
            class="dropdown-content z-[1] card card-compact w-64 p-2 shadow bg-base-100 text-primary-content mt-1"
            v-show="dropdownOpen"
        >
            <div class="card-body">
                <h3 class="card-title text-error">
                    Select what you want in your export!
                </h3>
                <div class="form-control">
                    <label class="label cursor-pointer">
                        <span class="label-text">User Stories</span>
                        <input
                            type="checkbox"
                            checked="checked"
                            class="checkbox"
                            v-model="exportUserStories"
                        />
                    </label>
                    <label class="label cursor-pointer">
                        <span class="label-text">User-List</span>
                        <input
                            type="checkbox"
                            class="checkbox"
                            v-model="exportUserList"
                        />
                    </label>
                </div>
                <button class="btn btn-neutral" @click="exportFunction">
                    Export
                </button>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from "vue";
import { useUserStoryStore } from "@/stores/userStory";
import { useLobbyStore } from "~/stores/lobby.js";
import { useUserStore } from "~/stores/user.js";

const userStoryStore = useUserStoryStore();
const userStories = userStoryStore.userStories;
const userStore = useUserStore();

const exportUserStories = ref(true);
const exportUserList = ref(false);

const removeHtmlTags = (str) => {
    if (typeof str !== "string") {
        str = String(str);
    }
    return str.replace(/<[^>]*>/g, "");
};

const exportFunction = () => {
    if (!exportUserStories.value && !exportUserList.value) {
        return;
    }

    let csvContent = "";
    // Export User Stories
    if (exportUserStories.value && userStories.length > 0) {
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
    }

    // Export User List
    if (exportUserList.value) {
        if (exportUserStories.value) {
            csvContent += "\n";
        }
        const userList = userStore.userList;
        if (userList.length > 0) {
            userList.forEach((user, index) => {
                if (index === 0) {
                    // Add header row
                    csvContent += "Username\n";
                }
                let row = `"${user.name}"`;
                csvContent += row + "\n";
            });
        }
    }

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

    toggleDropdown(true);
};

const dropdownOpen = ref(true);
const toggleDropdown = (overwrite) => {
    if (overwrite) {
        dropdownOpen.value = !dropdownOpen.value;
    } else {
        dropdownOpen.value = true;
    }
};
</script>
