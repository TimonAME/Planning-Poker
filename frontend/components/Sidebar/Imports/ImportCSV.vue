<template>
        <dialog id="my_modal_101" class="modal" @submit.prevent="closeModal">
            <div class="modal-box">
                <h3 class="font-bold text-lg">Hello!</h3>
                <p class="py-4">
                    Press ESC key or click the button below to close
                </p>
                <div class="modal-action">
                    <form method="dialog">
                        <button class="btn">Close</button>
                    </form>
                </div>
            </div>
            <form method="dialog" class="modal-backdrop" @submit.prevent="closeModal">
                <button>close</button>
            </form>
        </dialog>
</template>

<script setup>

const emit = defineEmits(["close"]);

const onEscapePress = (event) => {
    if (event.key === "Escape") {
        closeModal();
    }
};

onMounted(() => {
    my_modal_101.showModal();
    window.addEventListener("keydown", onEscapePress);
});

onUnmounted(() => {
    window.removeEventListener("keydown", onEscapePress);
});

const closeModal = () => {
    emit("close");
};
</script>
