<template>
    <!-- TODO: Overlay darf nicht mit Esc geschlossen werden -->
    <dialog id="my_modal_7" class="modal">
        <div class="modal-box">
            <label class="form-control w-full">
                <div class="label">
                    <span class="label-text">Username</span>
                </div>
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
                        <div class="error-msg text-sm ml-1 mt-1 text-red-600">
                            {{ error.$message }}
                        </div>
                    </div>
                </div>
            </label>
            <div class="flex justify-end">
                <button class="btn btn-primary mt-3" @click="enterName">
                    Submit
                </button>
            </div>
        </div>
    </dialog>
</template>

<script setup>
import { required } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";

onMounted(() => {
    my_modal_7.showModal();
});

const username = ref("");

const rules = {
    username: { required },
};

const v$ = useVuelidate(rules, { username });

const enterName = () => {
    v$.value.$touch();
    if (!v$.value.$error) {
        my_modal_7.close();
    }
};
</script>

<style lang="scss" scoped></style>
