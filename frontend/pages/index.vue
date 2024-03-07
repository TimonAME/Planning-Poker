<template>
    <div class="absolute inset-0 -z-10 h-full w-full">
        <!-- dotted background from: https://bg.ibelick.com/ -->
        <!-- Punkte im Hintergrund: bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] -->
        <div
            class="flex flex-col justify-between h-screen overflow-hidden sm:mx-0 mx-4"
        >
            <Navbar />
            <div
                class="flex sm:flex-row flex-col justify-center items-center w-full lg:gap-32 md:gap-24 sm:gap-16 gap-4"
                
            >
                <SVGImage />
                <MainText />
            </div>
            <div class="flex justify-center">
                <Untertext />
            </div>
            <div></div>
        </div>
    </div>
</template>

<script setup>
import Untertext from "../components/homepage/Untertext.vue";
import MainText from "../components/homepage/MainText.vue";
import Navbar from "../components/homepage/Navbar.vue";
import SVGImage from "../components/homepage/SVGImage.vue";
</script>