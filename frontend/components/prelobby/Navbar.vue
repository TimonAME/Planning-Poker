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
    </nav>
</template>

<script setup></script>
