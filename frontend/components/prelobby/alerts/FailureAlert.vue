<template>
    <transition name="fade">
        <div
            role="alert"
            class="alert alert-error linkSuccess alertPopup z-50 fixed top-2"
            v-if="failed"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="stroke-current shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
            </svg>
            <span>Failed to copy link!</span>
        </div>
    </transition>
</template>
<script setup>
defineProps({
    failed: Boolean,
});
</script>
<style>
.alertPopup {
    max-height: calc(100vh - 5em);
    grid-column-start: 1;
    grid-row-start: 1;
    width: 91.666667%;
    max-width: 32rem;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
