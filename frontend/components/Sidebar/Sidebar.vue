<template>
  <div class="fixed right-0 sm:top-0 top-14 m-2">
    <button @click="open = !open" class="btn">
      <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          class="w-6 h-6 current-fill"
          viewBox="0 0 24 24"
      >
        <path d="M4 6h16M4 12h16m-7 6h7"></path>
      </svg>
    </button>
    <div
        :class="{ 'translate-x-full': !open }"
        class="sidebar fixed right-0 top-0 h-full w-96 transform transition-transform duration-200 ease-in-out"
    >
      <section class="absolute inset-y-0 right-0 w-full flex">
        <div class="h-full flex flex-col py-6 bg-base-200">
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
          <!-- Sidebar Footer -->
          <!--
          <div class="mt-6 px-4">
              <button
                  class="flex justify-center items-center bg-black text-white rounded-md text-sm p-2 gap-1"
              >
                  <svg
                      width="1rem"
                      height="1rem"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                  >
                      <g
                          id="SVGRepo_bgCarrier"
                          stroke-width="0"
                      ></g>
                      <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                          <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M3 7C3 6.44772 3.44772 6 4 6H20C20.5523 6 21 6.44772 21 7C21 7.55228 20.5523 8 20 8H4C3.44772 8 3 7.55228 3 7ZM6 12C6 11.4477 6.44772 11 7 11H17C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13H7C6.44772 13 6 12.5523 6 12ZM9 17C9 16.4477 9.44772 16 10 16H14C14.5523 16 15 16.4477 15 17C15 17.5523 14.5523 18 14 18H10C9.44772 18 9 17.5523 9 17Z"
                              fill="currentColor"
                          ></path>
                      </g>
                  </svg>
                  Filters
              </button>
          </div>
          -->
        </div>
      </section>
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
