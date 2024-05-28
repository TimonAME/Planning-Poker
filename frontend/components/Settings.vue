<template>
    <button
        class="text-sm hover:text-primary transition-colors duration-80"
        onclick="settings_modal.showModal()"
    >
        Settings
    </button>
    <dialog id="settings_modal" class="modal">
        <div class="modal-box w-11/12 max-w-5xl">
            <form method="dialog">
                <button
                    class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                >
                    ✕
                </button>
            </form>
            <h3 class="font-bold text-lg">Settings</h3>
            <p class="py-4">
                <input
                    type="range"
                    min="0"
                    max="100"
                    value="70"
                    class="range range-lg"
                />
            </p>
        </div>
        <form method="dialog" class="modal-backdrop">
            <button>close</button>
        </form>
    </dialog>
</template>

<script setup></script>

<style lang="scss" scoped></style>
