<template>
    <!-- ThemeDropdown muss eingebunden werden damit Styles funktionieren -->
    <ThemeDropdown v-show="false" />

    <!-- TODO: Overlay darf nicht mit Esc geschlossen werden -->
    <dialog id="my_modal_7" class="modal">
        <div class="modal-box">
            <h3 class="font-bold text-lg mb-1">Username</h3>
            <form @submit.prevent="enterName">
                <label class="form-control w-full">
                    <div :class="{ error: v$.username.$errors.length }">
                        <input
                            type="text"
                            placeholder="Type here"
                            class="input input-bordered w-full"
                            v-model="username"
                        />
                        <div
                            class="input-errors"
                            v-for="error of v$.username.$errors"
                            :key="error.$uid"
                        >
                            <div
                                class="error-msg text-sm ml-1 mt-1 text-red-600"
                            >
                                {{ error.$message }}
                            </div>
                        </div>
                    </div>
                </label>
                <div class="flex justify-end">
                    <button
                        type="submit"
                        class="btn btn-primary mt-2"
                        @click="enterName"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    </dialog>
</template>

<script setup>
import { required, maxLength, minLength } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import { useUserStore } from "~/stores/user.js";
import { useRouter } from "vue-router";

const router = useRouter();

onMounted(() => {
    my_modal_7.showModal();
});

const username = ref("");

const rules = {
    username: { required, minLength: minLength(1), maxLength: maxLength(20) },
};

const v$ = useVuelidate(rules, { username });

const userStore = useUserStore();

const enterName = () => {
    v$.value.$touch();
    if (!v$.value.$error) {
        // Set the username in the user store
        // TODO: wenn nicht Lobbyersteller -> admin auf false setzen
        userStore.addUser(username.value, "not ready", true);
        router.push("/prelobby");
        my_modal_7.close();
    }
};
</script>

<style lang="scss" scoped></style>
