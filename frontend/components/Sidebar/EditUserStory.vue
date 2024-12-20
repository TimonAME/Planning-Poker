<template>
    <dialog id="my_modal_100" class="modal transition-none">
        <div class="modal-box">
            <form method="dialog" @submit.prevent="closeModal">
                <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
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
                </div>
            </label>
            <div class="label">
                <span class="label-text">Description</span>
            </div>
            <RichTextEditor
                @update:content="handleEditorContent"
                :existingDescription="userStoryDescription"
            />
            <div class="flex justify-end">
                <button class="btn btn-primary mt-3" @click="editUserStory">
                    Edit
                </button>
            </div>
        </div>
        <form method="dialog" class="modal-backdrop" @submit.prevent="closeModal">
            <button>close</button>
        </form>
    </dialog>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { required } from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';
import { useUserStoryStore } from '~/stores/userstory';
import RichTextEditor from '~/components/Sidebar/RichTextEditor.vue';

const props = defineProps({
    userStory: {
        type: Object,
        required: true,
    },
    index: Number,
    originalIndex: Number,
});

const emit = defineEmits(['close']);

const userStoryTitle = ref(props.userStory.title);
const userStoryDescription = ref(props.userStory.description);

const userStoryStore = useUserStoryStore();

const onEscapePress = (event) => {
    if (event.key === 'Escape') {
        closeModal();
    }
};

onMounted(() => {
    my_modal_100.showModal();
    window.addEventListener('keydown', onEscapePress);
});

onUnmounted(() => {
    window.removeEventListener('keydown', onEscapePress);
});

const handleEditorContent = (htmlContent) => {
    userStoryDescription.value = htmlContent;
};

const rules = {
    userStoryTitle: { required },
    userStoryDescription: {},
};

const v$ = useVuelidate(rules, { userStoryTitle, userStoryDescription });

const editUserStory = () => {
    v$.value.$touch();
    if (!v$.value.$error) {
        const editedUserStory = {
            title: userStoryTitle.value,
            description: userStoryDescription.value,
            voted: props.userStory.voted,
            size: props.userStory.size,
        };

        userStoryStore.editUserStory(props.originalIndex, editedUserStory);
        closeModal();
    }
};

const closeModal = () => {
    emit('close');
};
</script>
