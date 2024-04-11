<template>
    <button class="btn btn-outline btn-info" onclick="my_modal_1.showModal()">
        Manual
    </button>
    <dialog id="my_modal_1" class="modal">
        <div class="modal-box">
            <form method="dialog">
                <button
                    class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                >
                    ✕
                </button>
            </form>
            <h3 class="font-bold text-lg">Add new UserStory</h3>
            <label class="form-control w-full">
                <div class="label">
                    <span class="label-text">User Story Title</span>
                </div>
                <input
                    type="text"
                    placeholder="Type here"
                    class="input input-bordered w-full"
                    v-model="userStoryTitle"
                />
            </label>
            <label class="form-control">
                <div class="label">
                    <span class="label-text">User Story Description</span>
                </div>
                <textarea
                    class="textarea textarea-bordered h-24"
                    placeholder="Type here"
                    v-model="userStoryDescription"
                ></textarea>
            </label>
            <div class="flex justify-end">
                <button class="btn btn-primary mt-3" @click="addUserStory">
                    Add
                </button>
            </div>
        </div>
        <form method="dialog" class="modal-backdrop">
            <button>close</button>
        </form>
    </dialog>
</template>
<script setup>
const emit = defineEmits(["new-user-story"]);

// Define reactive variables for the user story title and description
const userStoryTitle = ref("");
const userStoryDescription = ref("");

const addUserStory = () => {
    // Log the title and description to the console
    console.log("Title:", userStoryTitle.value);
    console.log("Description:", userStoryDescription.value);

    // Emit a custom event with the new user story
    emit("new-user-story", {
        title: userStoryTitle.value,
        description: userStoryDescription.value,
    });

    // Clear the input fields
    userStoryTitle.value = "";
    userStoryDescription.value = "";
};
</script>
