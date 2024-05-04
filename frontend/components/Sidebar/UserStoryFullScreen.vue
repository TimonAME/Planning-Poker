<template>
    <dialog id="my_modal_1000" class="modal transition-none">
        <div class="modal-box">
            <form method="dialog" @submit.prevent="closeModal">
                <button
                    class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                >
                    ✕
                </button>
            </form>
            <h3 class="font-bold text-2xl text-primary">
                {{ props.userStory.title }}
            </h3>
            <p class="py-4" v-html="styledDescription"></p>
        </div>
        <form
            method="dialog"
            class="modal-backdrop"
            @submit.prevent="closeModal"
        >
            <button>close</button>
        </form>
    </dialog>
</template>

<script setup>
const props = defineProps({
    userStory: {
        type: Object,
        required: true,
    },
});

const emit = defineEmits(["close"]);

const onEscapePress = (event) => {
    if (event.key === "Escape") {
        closeModal();
    }
};

onMounted(() => {
    my_modal_1000.showModal();
    window.addEventListener("keydown", onEscapePress);
});

onUnmounted(() => {
    window.removeEventListener("keydown", onEscapePress);
});

const styledDescription = computed(() => {
    let htmlContent = props.userStory.description;

    htmlContent = htmlContent.replace(
        /<h1>/g,
        '<h1 class="text-2xl font-bold mt-2 mb-4">',
    );
    htmlContent = htmlContent.replace(/<ul>/g, '<ul class="list-disc pl-5">');
    htmlContent = htmlContent.replace(/<li>/g, '<li class="mb-1">');
    htmlContent = htmlContent.replace(
        /<h2>/g,
        '<h2 class="text-lg font-bold mt-2 mb-4">',
    );

    return htmlContent;
});

const closeModal = () => {
    emit("close"); // Emitting the close event
};
</script>
