<template>
    <!-- TODO: Fade-In transition klappt nicht -->
    <!-- TODO: Progressbar für die Länge des Alerts -->

    <transition name="fade">
        <div
            role="alert"
            class="alert alert-success linkSuccess alertPopup z-50 fixed top-2"
            v-if="props.success"
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
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
            </svg>
            <span>Link successfully copied!</span>
        </div>
    </transition>
</template>
<script setup>
const props = defineProps({
    success: Boolean,
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
