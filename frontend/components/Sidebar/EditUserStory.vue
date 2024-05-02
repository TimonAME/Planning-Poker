<template>
    <!-- TODO: wenn das modal geschlossen wird, scheint es ganz kurz über der sidebar auf -->
    <button @click="showModal">
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z"
                stroke="#000000"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13"
                stroke="#000000"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    </button>
    <dialog :id="`my_modal_${index + 100}`" class="modal transition-none">
        <div class="modal-box">
            <form method="dialog">
                <button
                    class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                >
                    ✕
                </button>
            </form>
            <h3 class="font-bold text-lg">Edit User Story</h3>
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
                <button class="btn btn-primary mt-3" @click="editUserStory">
                    Edit
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
import { required } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import { useUserStoryStore } from "~/stores/userstory.js";

const props = defineProps({
    userStory: {
        type: Object,
        required: true,
    },
    index: Number,
});

const index = ref(props.index);

const currentUserStory = props.userStory;
const userStoryStore = useUserStoryStore();

const modalId = ref(`my_modal_${props.index + 100}`);

function showModal() {
    index.value = userStoryStore.userStories.indexOf(props.userStory);
    userStoryTitle.value = userStoryStore.userStories[index.value].title;

    userStoryDescription.value =
        userStoryStore.userStories[index.value].description;

    const modal = document.getElementById(modalId.value);
    if (modal) modal.showModal();
}

const userStoryTitle = ref(currentUserStory.title);
const userStoryDescription = ref(currentUserStory.description);

const rules = {
    userStoryTitle: { required },
    userStoryDescription: {},
};

const v$ = useVuelidate(rules, { userStoryTitle, userStoryDescription });

const editUserStory = () => {
    v$.value.$touch();
    if (!v$.value.$error) {
        // Create a new User Story object
        const editedUserStory = {
            title: userStoryTitle.value,
            description: userStoryDescription.value,
        };

        // Add the edited User Story to the store
        userStoryStore.editUserStory(props.index, editedUserStory);

        const modal = document.getElementById(modalId.value);
        if (modal) modal.close();
    }
};
</script>
