<template>
    <!-- TODO: nicht für jede user story ein modal erstellen, sondern ein einziges modal, das dann mit den daten der user story gefüllt wird -->
    <dialog :id="modalId" class="modal transition-none">
        <div class="modal-box">
            <form method="dialog">
                <button
                    class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                >
                    ✕
                </button>
            </form>
            <h3 class="font-bold text-lg">{{ props.userStory.title }}</h3>
            <p class="py-4" v-html="styledDescription"></p>
        </div>
        <form method="dialog" class="modal-backdrop">
            <button>close</button>
        </form>
    </dialog>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
    userStory: {
        type: Object,
        required: true,
    },
    index: Number,
});

const styledDescription = computed(() => {
    let htmlContent = props.userStory.description;

    // Applying styles to <h1> tags
    htmlContent = htmlContent.replace(
        /<h1>/g,
        '<h1 class="text-xl font-bold text-primary mt-2 mb-4">',
    );

    // Applying styles to <ul> tags
    htmlContent = htmlContent.replace(/<ul>/g, '<ul class="list-disc pl-5">');

    // Applying styles to <li> tags
    htmlContent = htmlContent.replace(/<li>/g, '<li class="mb-1">');

    return htmlContent;
});

const modalId = ref(`my_modal_${props.index + 10000}`);

function showModal() {
    const modal = document.getElementById(modalId.value);
    if (modal) modal.showModal();
}
</script>
