<template>
    <Transition>
        <ImportCSV v-if="showCSV" @close="showCSV = false"/>
    </Transition>
    <div class="dropdown" ref="dropdown">
        <div tabindex="0" role="button" class="btn btn-outline btn-success" @click="isOpen = !isOpen">Import</div>
        <Transition>
        <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 mt-1" v-show="isOpen">
            <li><a @click="showCSV = true">Import from CSV</a></li>
            <li><a>Import from Jira</a></li>
        </ul>
        </Transition>
    </div>
</template>

<script setup>
import {ref, onMounted, onUnmounted} from 'vue';
import ImportCSV from "~/components/Sidebar/Imports/ImportCSV.vue";

const isOpen = ref(false);
const dropdown = ref(null);
const showCSV = ref(false);

const handleClickOutside = (event) => {
    if (dropdown.value && !dropdown.value.contains(event.target)) {
        isOpen.value = false;
    }
};

onMounted(() => {
    window.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
    window.removeEventListener('click', handleClickOutside);
});
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
    transition: opacity 150ms ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>