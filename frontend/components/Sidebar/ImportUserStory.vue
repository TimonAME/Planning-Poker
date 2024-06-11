<template>
    <button class="btn btn-outline btn-success" @click="onFileInputClick">
        Import
    </button>
    <input
        type="file"
        ref="fileInput"
        @change="onFileChange"
        style="display: none"
    />
</template>

<script setup>
import { ref } from "vue";
import { useUserStoryStore } from "@/stores/userStory";

const fileInput = ref(null);

const onFileInputClick = () => {
    fileInput.value.click();
};

const onFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
        const lines = e.target.result.split("\n");
        const userStoryStore = useUserStoryStore();

        // Skip the header row
        for (let i = 1; i < lines.length - 1; i++) {
            let [title, description] = lines[i].split(";");

            // Remove the double quotes from the beginning and end of the title and description
            /*title = title.slice(1, -1);
            description = description.slice(1, -1);*/

            const userStory = {
                title,
                description,
                voted: false,
                size: null,
            };
            userStoryStore.addUserStory(userStory);
        }
    };

    reader.readAsText(file);
};
</script>
