<script setup>
import { ref, watch } from "vue";

const props = defineProps({
    user: Object,
    index: Number,
});

let isReady = ref(props.user.status === "ready");
watch(
    () => props.user.status,
    (newStatus) => {
        isReady.value = newStatus === "ready";
    },
);
</script>

<template>
    <!-- https://daisyui.com/components/indicator/ -->
    <tr>
        <td>{{ index + 1 }}</td>
        <td>{{ user.name }}</td>
        <td>
            <input
                type="checkbox"
                class="toggle toggle-success cursor-default"
                v-model="isReady"
                @click.prevent
            />
        </td>
    </tr>
</template>

<style scoped lang="scss"></style>
