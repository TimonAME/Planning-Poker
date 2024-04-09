<template>
    <div class="fixed right-0 sm:top-0 top-14 m-2">
        <div class="drawer drawer-end">
            <input id="sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                <!-- Page content here -->
                <label for="sidebar" class="drawer-button btn"
                    ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        stroke="currentColor"
                        class="w-6 h-6 current-fill"
                        viewBox="0 0 24 24"
                    >
                        <path d="M4 6h16M4 12h16m-7 6h7"></path></svg
                ></label>
            </div>
            <div class="drawer-side">
                <label
                    for="sidebar"
                    aria-label="close sidebar"
                    class="drawer-overlay"
                ></label>
                <ul
                    class="menu p-4 w-80 min-h-full bg-base-200 text-base-content"
                >
                    <!-- Sidebar Header -->
                    <div class="flex items-center justify-between px-4">
                        <div class="flex gap-4">
                            <button class="btn btn-outline btn-success">
                                Import
                            </button>
                            <button class="btn btn-outline btn-error">
                                Export
                            </button>
                        </div>
                        <button
                            @click="open = false"
                            class="text-gray-500 hover:text-gray-700"
                        >
                            <span class="sr-only">Close</span>
                            <svg
                                class="h-6 w-6"
                                x-description="Heroicon name: x"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M6 18L18 6M6 6l12 12"
                                ></path>
                            </svg>
                        </button>
                    </div>
                    <!-- Search Input -->
                    <div class="mt-5 px-4">
                        <input
                            type="text"
                            placeholder="Search..."
                            class="w-full p-2 bg-base-300 border border-transparent rounded-md focus:border-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary transition-colors duration-300"
                        />
                    </div>
                    <div class="mt-4 px-4">
                        <p class="ml-2 text-base-content">User Stories:</p>
                    </div>
                    <!-- Sidebar Content -->
                    <div class="mt-4 px-4 h-full overflow-auto">
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <!-- Card 1 -->
                            <div
                                class="bg-base-300 hover:bg-neutral p-4 cursor-pointer rounded-md shadow-md transition-colors duration-300"
                            >
                                <h3 class="text-lg font-bold text-primary mb-2">
                                    1. User Story
                                </h3>
                                <p
                                    class="text-base-content overflow-y-auto max-h-24"
                                >
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Maiores id corporis
                                    nesciunt corrupti expedita nemo numquam
                                    illo, tempora animi voluptates incidunt
                                    mollitia aperiam laborum vel. Molestias iure
                                    deleniti fuga. Vero.
                                </p>
                            </div>
                            <!-- Add more cards as needed -->
                        </div>
                    </div>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from "vue";

export default {
    setup() {
        const open = ref(false);
        return { open };
    },
};
</script>

<style scoped>
.sidebar {
    box-shadow: -25px 0 20px -20px rgba(0, 0, 0, 0.45);
}
</style>
