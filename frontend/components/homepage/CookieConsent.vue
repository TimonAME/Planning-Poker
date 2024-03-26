<template>
    <div v-if="showModal" class="modal modal-open">
        <div class="modal-box">
            <h3 class="font-bold text-lg">Allow Cookies?</h3>
            <p class="py-4">
                We use cookies to enhance your experience. Please choose whether
                you want to accept cookies.
            </p>
            <div class="modal-action">
                <button class="btn btn-primary" @click="acceptCookies">
                    Accept
                </button>
                <button class="btn" @click="declineCookies">Decline</button>
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
    const cookiesAccepted = useCookie("cookiesAccepted", {
        maxAge: 60 * 60 * 24, // 1 Tag,
    });

    cookiesAccepted.value = "true";
};

const declineCookies = () => {
    localStorage.setItem("cookiesAccepted", "false");
    showModal.value = false;
};
</script>
