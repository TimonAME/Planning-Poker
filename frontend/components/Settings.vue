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
            <h2 class="text-md">Rate this Website:</h2>
            <input
                type="range"
                min="0"
                max="100"
                value="50"
                class="range range-lg"
                step="25"
            />
            <div class="w-full flex justify-between text-xs px-2">
                <span>0</span>
                <span>2,5</span>
                <span>5</span>
                <span>7,5</span>
                <span>10</span>
            </div>
        </div>
        <form method="dialog" class="modal-backdrop">
            <button>close</button>
        </form>
    </dialog>
</template>

<script setup></script>

<style lang="scss" scoped></style>
