<template>
    <!-- TODO: bessere settings fürs reinpasten -->
    <button class="btn btn-outline btn-info" onclick="my_modal_5.showModal()">
        Manual
    </button>
    <dialog id="my_modal_5" class="modal transition-none">
        <div class="modal-box">
            <form method="dialog">
                <button
                    class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                >
                    ✕
                </button>
            </form>
            <h3 class="font-bold text-lg">Add new User Story</h3>
            <label class="form-control w-full">
                <div class="label">
                    <span class="label-text">Title</span>
                </div>
                <div :class="{ error: v$.userStoryTitle.$errors.length }">
                    <input
                        type="text"
                        placeholder="Type here"
                        class="input input-bordered w-full"
                        v-model="userStoryTitle"
                    />
                    <!--
                    <div
                        class="input-errors"
                        v-for="error of v$.userStoryTitle.$errors"
                        :key="error.$uid"
                    >
                        <div class="error-msg text-sm ml-1 mt-1 text-red-600">
                            {{ error.$message }}
                        </div>
                    </div>
                    -->
                </div>
            </label>
            <div class="label">
                <span class="label-text">Description</span>
            </div>
            <RichTextEditor @update:content="handleEditorContent" :resetTrigger="resetCounter" />
            <div class="flex justify-end">
                <button class="btn btn-primary mt-3" @click="addTheUserStory">
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
import { ref } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, minLength } from "@vuelidate/validators";
import { useUserStoryStore } from "~/stores/userstory.js";
import RichTextEditor from "~/components/Sidebar/RichTextEditor.vue";

const userStoryStore = useUserStoryStore();
const router = useRouter();
const emit = defineEmits(["new-user-story"]);

const userStoryTitle = ref("");
const userStoryDescription = ref("");
const resetCounter = ref(false);

const rules = {
    userStoryTitle: { required },
    userStoryDescription: {},
};

const v$ = useVuelidate(rules, { userStoryTitle, userStoryDescription });

const handleEditorContent = (htmlContent) => {
    userStoryDescription.value = htmlContent;  // Update the userStoryDescription with the HTML from the editor
};

const addTheUserStory = () => {
    v$.value.$touch();
    if (!v$.value.$error) {
        // Create a new User Story object
        const newUserStory = {
            title: userStoryTitle.value,
            description: userStoryDescription.value,
        };

        // Add the new User Story to the store
        userStoryStore.addUserStory(newUserStory);

        // Clear the input fields
        userStoryTitle.value = "";
        userStoryDescription.value = "";
        resetCounter.value = !resetCounter.value  // Reset the RichTextEditor
    }
};
</script>
