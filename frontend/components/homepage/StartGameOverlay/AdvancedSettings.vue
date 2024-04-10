<template>
    <label class="form-control w-full">
        <div class="label">
            <span class="label-text">Who can manage user stories</span>
        </div>
        <select class="select select-bordered">
            <option selected>Me</option>
            <option>Everyone</option>
        </select>
    </label>
    <div class="form-control mt-2">
        <label class="label cursor-pointer">
            <span class="label-text">Test toggle 1</span>
            <input type="checkbox" class="toggle" checked />
        </label>
    </div>
    <div class="form-control">
        <label class="label cursor-pointer">
            <span class="label-text">Test toggle 2</span>
            <input type="checkbox" class="toggle" />
        </label>
    </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
