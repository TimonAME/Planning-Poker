<template>
    <nav
        class="relative px-4 py-4 flex justify-center items-center h-16 lg:gap-48 md:gap-28"
    >
        <router-link
            to="#"
            class="flex items-center justify-center leading-none md:block w-32"
        >
            <!--
            <svg
                id="Layer_1"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 403.86 410.07"
                class="h-8 w-8 fill-current"
            >
                <path
                    d="M224.79,408.63c-29.06,3.71-56.91.11-84.11-8.98-35.86-11.98-66.79-31.65-91.1-60.79-25.51-30.57-41.81-65.53-47.38-105.17-4.35-30.95-2.36-61.53,7.17-91.33,11.09-34.68,30.37-64.33,57.43-88.72C92.35,30.6,121.66,13.98,155.2,6.01c56.55-13.44,109.56-4.53,157.75,28.43,49.1,33.58,79.41,80.05,88.32,138.81,8.58,56.6-4.15,108.94-38.8,155.11-33.62,44.81-78.77,70.69-133.74,79.94-1.15.19-2.32.19-3.94.32M269.53,366.63c1.22-.53,2.48-.99,3.66-1.6,58.03-29.66,92.9-75.77,100.11-141.37,3.73-33.93-1.52-66.56-16.6-97.15C324.35,60.91,249.06,15.34,165.83,33.08c-38.45,8.2-70.29,27.94-95.51,58.07-34.97,41.78-47.12,90.08-38.3,143.32,7.57,45.7,29.68,83.36,67.05,111.48,1.65,1.24,3.23,3.63,5.58,2.39,2.27-1.19,1.45-3.87,1.47-5.96.07-9-.22-18.01.13-26.99.18-4.72-1.38-8.05-4.52-11.51-37.63-41.44-49.07-89.67-32.53-142.75,15.12-48.53,48.48-80.41,98.14-93.56,49.97-13.23,94.63-.91,130.86,34.55,42.13,41.23,53.35,92.61,36.34,148.66-21.08,69.45-94.96,110.76-165.6,94.62-4.34-.99-5.9-2.86-5.86-7.41.23-27.16.15-54.32.21-81.48,0-1.42-.47-3.05,1.32-4.13,3.15.41,5.61,2.56,8.39,3.95,23.63,11.86,46.72,11.27,69.32-2.72,35.7-22.1,37.59-70.73,17.96-96.29-18.21-23.72-42.85-32.38-71.73-26.51-28.48,5.79-51,28.22-54.12,59.75-.86,8.69.06,17.29.02,25.94-.15,41.31-.31,82.62-.57,123.94-.14,21.96,6.56,30.8,27.88,36.14.48.12.98.2,1.47.3,36.23,7.68,71.49,4.93,106.3-10.25Z"
                />
                <path
                    d="M232.49,168.15c11.54,12.38,15.29,26.37,9.67,42.14-6,16.83-18.59,25.91-36.16,26.77-21.1,1.03-41.78-14.25-42.76-37.75-.97-23.16,16.96-42.17,39.62-42.58,11.45-.21,21.27,3,29.63,11.42Z"
                />
            </svg>
            -->
            <SVGImage_SW class="w-1/3" />
        </router-link>
        <ul class="flex items-center gap-6" style="margin-right: 15px">
            <li>
                <router-link
                    to="#"
                    class="text-sm font-bold hover:text-primary transition-colors duration-80"
                    >Home</router-link
                >
            </li>
            <li>
                <Documentation />
            </li>
            <li>
                <!--
                <router-link
                    to="#"
                    class="text-sm hover:text-primary transition-colors duration-80"
                    >Settings</router-link
                >
                -->
                <Settings />
            </li>
            <ThemeDropdown class="block md:hidden" :small="true" />
        </ul>
        <ThemeDropdown class="hidden md:block ml-6 md:ml-0" :small="false" />
    </nav>
</template>

<script setup>
import ThemeDropdown from "~/components/ThemeDropdown.vue";
import SVGImage from "~/components/homepage/SVGImage.vue";
import SVGImage_SW from "~/components/homepage/SVGImage_Nav.vue";
</script>

<style scoped></style>
