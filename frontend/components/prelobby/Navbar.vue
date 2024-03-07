<template>
    <nav
        class="relative px-4 py-4 flex justify-center items-center h-16 lg:gap-48 md:gap-28"
    >
        <router-link
            to="#"
            class="text-3xl font-bold leading-none hidden md:block w-32"
        >
        </router-link>
        <ul class="flex items-center gap-6">
            <li>
                <router-link
                    to="/"
                    class="text-sm hover:text-primary transition-colors duration-80"
                    >Home</router-link
                >
            </li>
            <!--
      <li class="text-gray-300">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" class="w-4 h-4 current-fill" viewBox="0 0 24 24">
          <path d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
        </svg>
      </li>
      -->
            <Documentation />
            <!--
      <li class="text-gray-300">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" class="w-4 h-4 current-fill" viewBox="0 0 24 24">
          <path d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
        </svg>
      </li>
      -->
            <li>
                <router-link
                    to="#"
                    class="text-sm hover:text-primary transition-colors duration-80"
                    >Settings</router-link
                >
            </li>
        </ul>
        <div class="dropdown">
            <div tabindex="0" role="button" class="btn m-1">
                Theme
                <svg
                    width="12px"
                    height="12px"
                    class="h-2 w-2 fill-current opacity-60 inline-block"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 2048 2048"
                >
                    <path
                        d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"
                    ></path>
                </svg>
            </div>
            <ul
                tabindex="0"
                class="dropdown-content bg-base-200 text-base-content rounded-box top-px h-[28.6rem] max-h-[calc(100vh-10rem)] w-56 overflow-y-auto border border-white/5 shadow-2xl outline outline-1 outline-black/5 mt-16"
            >
                <li>
                    <input
                        type="radio"
                        name="theme-dropdown"
                        class="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                        aria-label="Light"
                        value="light"
                    />
                </li>
                <li>
                    <input
                        type="radio"
                        name="theme-dropdown"
                        class="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                        aria-label="Dark"
                        value="dark"
                    />
                </li>
                <li>
                    <input
                        type="radio"
                        name="theme-dropdown"
                        class="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                        aria-label="Retro"
                        value="retro"
                    />
                </li>
                <li>
                    <input
                        type="radio"
                        name="theme-dropdown"
                        class="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                        aria-label="Cyberpunk"
                        value="cyberpunk"
                    />
                </li>
                <li>
                    <input
                        type="radio"
                        name="theme-dropdown"
                        class="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                        aria-label="Valentine"
                        value="valentine"
                    />
                </li>
                <li>
                    <input
                        type="radio"
                        name="theme-dropdown"
                        class="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                        aria-label="Aqua"
                        value="aqua"
                    />
                </li>
                <li>
                    <input
                        type="radio"
                        name="theme-dropdown"
                        class="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                        aria-label="Emerald"
                        value="emerald"
                    />
                </li>
                <li>
                    <input
                        type="radio"
                        name="theme-dropdown"
                        class="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                        aria-label="Synthwave"
                        value="synthwave"
                    />
                </li>
                <li>
                    <input
                        type="radio"
                        name="theme-dropdown"
                        class="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                        aria-label="Pastel"
                        value="pastel"
                    />
                </li>
                <li>
                    <input
                        type="radio"
                        name="theme-dropdown"
                        class="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                        aria-label="Wireframe"
                        value="wireframe"
                    />
                </li>
                <li>
                    <input
                        type="radio"
                        name="theme-dropdown"
                        class="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                        aria-label="Black"
                        value="black"
                    />
                </li>
                <li>
                    <input
                        type="radio"
                        name="theme-dropdown"
                        class="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                        aria-label="Luxury"
                        value="luxury"
                    />
                </li>
                <li>
                    <input
                        type="radio"
                        name="theme-dropdown"
                        class="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                        aria-label="Dracula"
                        value="dracula"
                    />
                </li>
                <li>
                    <input
                        type="radio"
                        name="theme-dropdown"
                        class="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                        aria-label="Business"
                        value="business"
                    />
                </li>
                <li>
                    <input
                        type="radio"
                        name="theme-dropdown"
                        class="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                        aria-label="Lemonade"
                        value="lemonade"
                    />
                </li>
                <li>
                    <input
                        type="radio"
                        name="theme-dropdown"
                        class="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                        aria-label="Night"
                        value="night"
                    />
                </li>
                <li>
                    <input
                        type="radio"
                        name="theme-dropdown"
                        class="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                        aria-label="Winter"
                        value="winter"
                    />
                </li>
                <li>
                    <input
                        type="radio"
                        name="theme-dropdown"
                        class="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                        aria-label="Coffee"
                        value="coffee"
                    />
                </li>
                <li>
                    <input
                        type="radio"
                        name="theme-dropdown"
                        class="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                        aria-label="Sunset"
                        value="sunset"
                    />
                </li>
            </ul>
        </div>
        <div class="fixed right-0 top-0 m-2">
            <button @click="open = !open" class="btn">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    class="w-6 h-6 current-fill"
                    viewBox="0 0 24 24"
                >
                    <path
                        d="M4 6h16M4 12h16m-7 6h7"
                    ></path>
                </svg>
            </button>
            <div :class="{ 'translate-x-full': !open }" class="fixed right-0 top-0 h-full w-96 bg-gray-200 transform transition-transform duration-200 ease-in-out">
                <section class="absolute inset-y-0 right-0 max-w-full flex">
                    <div class="h-full flex flex-col py-6 bg-white shadow-xl">
                        <!-- Sidebar Header -->
                        <div class="flex items-center justify-between px-4">
                        <h2 class="text-xl font-semibold text-black">Search</h2>
                        <button @click="open = false" class="text-gray-500 hover:text-gray-700">
                            <span class="sr-only">Close</span>
                            <svg class="h-6 w-6" x-description="Heroicon name: x" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                        </div>
                        <!-- Search Input -->
                        <div class="mt-4 px-4">
                        <input type="text" placeholder="Search post here" class="w-full p-2 border border-gray-300 rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300">
                        </div>
                        <div class="mt-4 px-4">
                        <p class="ml-2 text-gray-400">Results</p>
                        </div>
                        <!-- Sidebar Content -->
                        <div class="mt-4 px-4 h-full overflow-auto">
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <!-- Card 1 -->
                            <div class="bg-gray-50 hover:bg-gray-100 p-4 cursor-pointer rounded-md border border-gray-300 transition-colors duration-300">
                            <h3 class="text-lg font-semibold text-black mb-2">Card 1</h3>
                            <p class="text-gray-600">Content for card 1.</p>
                            </div>
                            <!-- Card 2 -->
                            <div class="bg-gray-50 hover:bg-gray-100 p-4 cursor-pointer rounded-md border border-gray-300 transition-colors duration-300">
                            <h3 class="text-lg font-semibold text-black mb-2">Card 2</h3>
                            <p class="text-gray-600">Content for card 2.</p>
                            </div>
                            <!-- Card 3 -->
                            <div class="bg-gray-50 hover:bg-gray-100 p-4 cursor-pointer rounded-md border border-gray-300 transition-colors duration-300">
                            <h3 class="text-lg font-semibold text-black mb-2">Card 3</h3>
                            <p class="text-gray-600">Content for card 3.</p>
                            </div>
                            <!-- Card 4 -->
                            <div class="bg-gray-50 hover:bg-gray-100 p-4 cursor-pointer rounded-md border border-gray-300 transition-colors duration-300">
                            <h3 class="text-lg font-semibold text-black mb-2">Card 4</h3>
                            <p class="text-gray-600">Content for card 4.</p>
                            </div>
                            <!-- Card 5 -->
                            <div class="bg-gray-50 hover:bg-gray-100 p-4 cursor-pointer rounded-md border border-gray-300 transition-colors duration-300">
                            <h3 class="text-lg font-semibold text-black mb-2">Card 5</h3>
                            <p class="text-gray-600">Content for card 5.</p>
                            </div>
                            <!-- Card 6 -->
                            <div class="bg-gray-50 hover:bg-gray-100 p-4 cursor-pointer rounded-md border border-gray-300 transition-colors duration-300">
                            <h3 class="text-lg font-semibold text-black mb-2">Card 6</h3>
                            <p class="text-gray-600">Content for card 6.</p>
                            </div>
                            <!-- Card 7 -->
                            <div class="bg-gray-50 hover:bg-gray-100 p-4 cursor-pointer rounded-md border border-gray-300 transition-colors duration-300">
                            <h3 class="text-lg font-semibold text-black mb-2">Card 7</h3>
                            <p class="text-gray-600">Content for card 7.</p>
                            </div>
                            <!-- Card 8 -->
                            <div class="bg-gray-50 hover:bg-gray-100 p-4 cursor-pointer rounded-md border border-gray-300 transition-colors duration-300">
                            <h3 class="text-lg font-semibold text-black mb-2">Card 8</h3>
                            <p class="text-gray-600">Content for card 8.</p>
                            </div>
                            <!-- Card 9 -->
                            <div class="bg-gray-50 hover:bg-gray-100 p-4 cursor-pointer rounded-md border border-gray-300 transition-colors duration-300">
                            <h3 class="text-lg font-semibold text-black mb-2">Card 9</h3>
                            <p class="text-gray-600">Content for card 9.</p>
                            </div>
                            <!-- Card 10 -->
                            <div class="bg-gray-50 hover:bg-gray-100 p-4 cursor-pointer rounded-md border border-gray-300 transition-colors duration-300">
                            <h3 class="text-lg font-semibold text-black mb-2">Card 10</h3>
                            <p class="text-gray-600">Content for card 10.</p>
                            </div>
                            <!-- Card 11 -->
                            <div class="bg-gray-50 hover:bg-gray-100 p-4 cursor-pointer rounded-md border border-gray-300 transition-colors duration-300">
                            <h3 class="text-lg font-semibold text-black mb-2">Card 11</h3>
                            <p class="text-gray-600">Content for card 11.</p>
                            </div>
                            <!-- Card 12 -->
                            <div class="bg-gray-50 hover:bg-gray-100 p-4 cursor-pointer rounded-md border border-gray-300 transition-colors duration-300">
                            <h3 class="text-lg font-semibold text-black mb-2">Card 12</h3>
                            <p class="text-gray-600">Content for card 12.</p>
                            </div>
                            <!-- Add more cards as needed -->
                        </div>
                        </div>
                        <!-- Sidebar Footer -->
                        <div class="mt-6 px-4">
                        <button class="flex justify-center items-center bg-black text-white rounded-md text-sm p-2 gap-1">
                            <svg width="1rem" height="1rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3 7C3 6.44772 3.44772 6 4 6H20C20.5523 6 21 6.44772 21 7C21 7.55228 20.5523 8 20 8H4C3.44772 8 3 7.55228 3 7ZM6 12C6 11.4477 6.44772 11 7 11H17C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13H7C6.44772 13 6 12.5523 6 12ZM9 17C9 16.4477 9.44772 16 10 16H14C14.5523 16 15 16.4477 15 17C15 17.5523 14.5523 18 14 18H10C9.44772 18 9 17.5523 9 17Z" fill="currentColor"></path>
                            </g>
                            </svg> Filters </button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </nav>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    const open = ref(false)
    return { open }
  }
}
</script>