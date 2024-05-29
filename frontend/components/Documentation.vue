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
                <h1 class="font-bold text-md">How to Start a Planning Poker Game</h1>
                <a class="text-sm ">Create a Lobby: Click the "Create Lobby" button on our homepage. Enter a lobby name and an optional description, and customize the voting system to your preference. Once done, press "Start Game."</a>
              </div>
              <div class="my-4">
                <h1 class="font-bold text-md">Customize Your Experience with Themes</h1>
                <a class="text-sm ">Select a Theme: Enhance your experience by clicking the Theme dropdown at the top of our page. Choose from a variety of themes to personalize your game.</a>
              </div>
              <div class="my-4">
                <h1 class="font-bold text-md">Invite New Players</h1>
                <a class="text-sm ">Invite Players: After creating a lobby, click the "Invite Players" button. Share the lobby link or display a QR code to invite others to join the game.</a>
              </div>
              <div class="my-4">
                <h1 class="font-bold text-md">Manage User Stories</h1>
                <a class="text-sm ">Add New User Stories: Open the sidebar by clicking the button at the top right corner. Here you can view and manage all user stories. Add new user stories manually by clicking the "Manual" button and entering the title and description, or import them using a CSV file.</a>
              </div>
              <div class="my-4">
                <h1 class="font-bold text-md">Export User Stories</h1>
                <a class="text-sm ">Save User Stories: To save all user stories, click the "Export" button in the sidebar to download a CSV file containing all the user stories.</a>
              </div>
              <!--
              <div class="my-4">
                <h1 class="font-bold text-md"></h1>
                <a class="text-sm ml-1"></a>
              </div>
              -->
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
