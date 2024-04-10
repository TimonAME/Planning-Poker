<template>
    <!-- TODO: Errors sollen nicht reactive sein sondern nur beim submit angezeigt werden -->

    <dialog id="my_modal_5" class="modal">
        <div class="modal-box">
            <form method="dialog">
                <button
                    class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                >
                    ✕
                </button>
            </form>
            <h3 class="font-bold text-lg">Game Settings</h3>
            <label class="form-control w-full">
                <div class="label">
                    <span class="label-text">Lobby Name</span>
                </div>
                <div :class="{ error: v$.name.$errors.length }">
                    <input
                        type="text"
                        placeholder="Type here"
                        class="input input-bordered w-full"
                        v-model="name"
                    />
                    <div
                        class="input-errors"
                        v-for="error of v$.name.$errors"
                        :key="error.$uid"
                    >
                        <div class="error-msg text-sm ml-1 mt-1 text-red-600">
                            {{ error.$message }}
                        </div>
                    </div>
                </div>
            </label>
            <label class="form-control">
                <div class="label">
                    <span class="label-text">Lobby Description</span>
                </div>
                <textarea
                    class="textarea textarea-bordered h-24"
                    placeholder="Type here"
                    v-model="description"
                ></textarea>
            </label>
            <label class="form-control w-full">
                <div class="label">
                    <span class="label-text">Voting system</span>
                </div>
                <select class="select select-bordered">
                    <option selected>Fibonacci</option>
                    <option>T-shirts</option>
                    <option>Powers of 2</option>
                </select>
            </label>
            <button
                class="link link-primary mt-3 select-none"
                @click="advancedSettings = !advancedSettings"
            >
                Advanced settings...
            </button>
            <AdvancedSettings v-if="advancedSettings" />
            <div class="flex justify-end">
                <button class="btn btn-primary mt-3" @click="startGame">
                    Start Game
                </button>
            </div>
        </div>
    </dialog>
</template>

<script setup>
import { ref } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, minLength } from "@vuelidate/validators";
import AdvancedSettings from "~/components/homepage/StartGameOverlay/AdvancedSettings.vue";
import { useLobbyStore } from "~/stores/lobby";
import { useRouter } from "vue-router";

const router = useRouter();

const lobbyStore = useLobbyStore();
const advancedSettings = ref(false);
const name = ref("");
const description = ref("");

const rules = {
    name: { required, minLength: minLength(4), $autoDirty: true },
    description: {},
};

const v$ = useVuelidate(rules, { name, description });

const startGame = () => {
    v$.value.$touch();
    if (!v$.value.$error) {
        lobbyStore.setLobbyDetails(name.value, description.value);
        router.push("/prelobby");
    }
};
</script>

<style lang="scss" scoped></style>
