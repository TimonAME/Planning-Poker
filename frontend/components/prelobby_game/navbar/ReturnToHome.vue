<template>
    <dialog id="my_modal_1" class="modal">
        <div class="modal-box">
            <h3 class="font-bold text-lg">Return to homepage</h3>
            <p class="py-2">
                Are you sure you want to return to the homepage? Please note
                that by proceeding with this action, you will leave the lobby
                and return to the homepage. Do you wish to continue?
            </p>
            <div class="modal-action mt-2">
                <form method="dialog">
                    <router-link to="/" class="btn btn-primary mr-5"
                        >Confirm</router-link
                    >
                    <button class="btn">Close</button>
                </form>
            </div>
        </div>
    </dialog>
</template>

<script setup></script>

<style lang="scss" scoped></style>
