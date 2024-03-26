<template>
    <div v-if="showModal" class="modal modal-open">
        <div class="modal-box">
            <h3 class="font-bold text-lg">Cookies zulassen?</h3>
            <p class="py-4">
                Wir verwenden Cookies, um Ihr Erlebnis zu verbessern. Bitte
                wählen Sie, ob Sie Cookies akzeptieren möchten.
            </p>
            <div class="modal-action">
                <button class="btn btn-primary" @click="acceptCookies">
                    Akzeptieren
                </button>
                <button class="btn" @click="declineCookies">Ablehnen</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

const showModal = ref(false);

onMounted(() => {
    const isAccepted = localStorage.getItem("cookiesAccepted");
    showModal.value = !isAccepted;
});

const acceptCookies = () => {
    localStorage.setItem("cookiesAccepted", "true");
    showModal.value = false;
};

const declineCookies = () => {
    localStorage.setItem("cookiesAccepted", "false");
    showModal.value = false;
};
</script>
