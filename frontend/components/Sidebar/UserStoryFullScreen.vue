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
            <p class="py-4">{{ props.userStory.description }}</p>
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

const modalId = ref(`my_modal_${props.index + 10000}`);

function showModal() {
    const modal = document.getElementById(modalId.value);
    if (modal) modal.showModal();
}
</script>
