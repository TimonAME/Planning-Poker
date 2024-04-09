<template>
    <!-- TODO: Overlay mit Lobbynamen und Beschreibung -->
    <dialog id="my_modal_5" class="modal">
        <div class="modal-box">
            <form method="dialog">
                <button
                    class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                >
                    ✕
                </button>
            </form>
            <h3 class="font-bold text-lg">Game Settings</h3>
            <label class="form-control w-full">
                <div class="label">
                    <span class="label-text">Lobby Name</span>
                </div>
                <input
                    type="text"
                    placeholder="Type here"
                    class="input input-bordered w-full"
                />
            </label>
            <label class="form-control">
                <div class="label">
                    <span class="label-text">Lobby Description</span>
                </div>
                <textarea
                    class="textarea textarea-bordered h-24"
                    placeholder="Type here"
                ></textarea>
            </label>
            <div class="flex justify-end">
                <!-- Flexbox Container mit Inhalt rechts -->
                <router-link to="/prelobby">
                    <button class="btn btn-primary mt-3">Start Game</button>
                </router-link>
            </div>
        </div>
    </dialog>
</template>

<script setup></script>

<style lang="scss" scoped></style>
