<template>
    <button
        class="text-sm hover:text-primary transition-colors duration-80"
        onclick="my_modal_3.showModal()"
    >
        Documentation
    </button>
    <dialog id="my_modal_3" class="modal">
        <div class="modal-box w-11/12 max-w-5xl">
            <form method="dialog">
                <button
                    class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                >
                    ✕
                </button>
            </form>
            <h3 class="font-bold text-lg">Documentation</h3>
            <p class="py-4">
              <div class="my-4">
                <h1 class="font-bold text-md">How to start a game:</h1>
                <a class="text-sm ml-1">yarak</a>
              </div>
              <div class="my-4">
                <h1 class="font-bold text-md">Insert new UserStories:</h1>
                <a class="text-sm ml-1">yarak</a>
              </div>
              <div class="my-4">
                <h1 class="font-bold text-md">Share the infitation link:</h1>
                <a class="text-sm ml-1">yarak</a>
              </div>
            </p>
        </div>
        <form method="dialog" class="modal-backdrop">
            <button>close</button>
        </form>
    </dialog>
</template>

<script setup>
</script>

<style lang="scss" scoped></style>
