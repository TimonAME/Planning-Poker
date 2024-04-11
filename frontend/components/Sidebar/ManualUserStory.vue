<template>
    <button class="btn btn-outline btn-info" onclick="my_modal_5.showModal()">
        Manual
    </button>
    <dialog id="my_modal_5" class="modal">
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
            <label class="form-control">
                <div class="label">
                    <span class="label-text">Description</span>
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
import { ref } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, minLength } from "@vuelidate/validators";

const router = useRouter();

const emit = defineEmits(["new-user-story"]);

const userStoryTitle = ref("");
const userStoryDescription = ref("");

const rules = {
    userStoryTitle: { required, $autoDirty: true },
    userStoryDescription: {},
};

const v$ = useVuelidate(rules, { userStoryTitle, userStoryDescription });

const addUserStory = () => {
    v$.value.$touch();
    if (!v$.value.$error) {
        // Log the title and description to the console
        console.log("Title:", userStoryTitle.value);
        console.log("Description:", userStoryDescription.value);

        userStoryTitle.value = "Name und Beschreibung anzeigen";
        userStoryDescription.value =
            "Als User möchte ich den Lobby-Namen und die Lobby-Beschreibung in der Pre-Lobby sehen können, damit ich die Sitzung korrekt zuordnen kann.";

        // Emit a custom event with the new user story
        emit("new-user-story", {
            title: userStoryTitle.value,
            description: userStoryDescription.value,
        });

        // Clear the input fields
        userStoryTitle.value = "";
        userStoryDescription.value = "";
    }
};
</script>
