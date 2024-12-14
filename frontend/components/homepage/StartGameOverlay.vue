<template>
    <!-- TODO: Errors sollen nicht reactive sein sondern nur beim submit angezeigt werden -->
    <!-- TODO: In LobbyName und Description, wenn nach mind. 3 Zeichen Leerzeichen eingegeben, dann kommt Fehlermeldung -->
    <!-- content.js:2  Error: <svg> attribute viewBox: Expected number, "0 0 100% 4". -->
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
                <select class="select select-bordered" v-model="votingSystem">
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
            <AdvancedSettings
                v-if="advancedSettings"
                @update-timer-value="updateTimerValue"
            />
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
import { useUserStore } from "~/stores/user.js";

const router = useRouter();

const lobbyStore = useLobbyStore();
const advancedSettings = ref(false);

const userStore = useUserStore();

const name = ref("");
const description = ref("");
const votingSystem = ref("Fibonacci");

const rules = {
    name: { required, minLength: minLength(4) },
    description: {},
};

const v$ = useVuelidate(rules, { name, description });

// Kartenarten:
let fibonacciNumbers = ref([0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]);
let tShirtSizes = ref(["XS", "S", "M", "L", "XL", "XXL"]);
let powersOfTwo = ref([1, 2, 4, 8, 16, 32, 64, 128, 256, 512]);
const getVotingSystemArray = (system) => {
    switch (system) {
        case "Fibonacci":
            return fibonacciNumbers.value;
        case "T-shirts":
            return tShirtSizes.value;
        case "Powers of 2":
            return powersOfTwo.value;
        default:
            return [];
    }
};

const startGame = () => {
    v$.value.$touch();
    if (!v$.value.$error) {
        const selectedVotingSystemArray = getVotingSystemArray(
            votingSystem.value,
        );
        lobbyStore.setLobbyDetails(
            name.value,
            description.value,
            selectedVotingSystemArray,
        );

        if (!updatedTimer) {
            lobbyStore.timerValue = null;
        }

        userStore.deleteAllUsers();
        router.push("/prelobby/username-input");
    }
};

let updatedTimer = false;
const updateTimerValue = ({ enableTimer, timerValue }) => {
    if (enableTimer) {
        lobbyStore.timerValue = timerValue;
        updatedTimer = true;
    }
};
</script>

<style lang="scss" scoped></style>
