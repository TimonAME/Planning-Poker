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
            <h3 class="font-bold text-2xl text-primary">
                {{ props.userStory.title }}
            </h3>
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

const modalId = ref(`my_modal_${props.index + 10000}`);

function showModal() {
    const modal = document.getElementById(modalId.value);
    if (modal) modal.showModal();
}
</script>
