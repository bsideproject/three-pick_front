<script lang="ts">
import {defineComponent, computed, ref} from 'vue';

import {findPasswordApi} from '~/apis';
import ThreePickLogo from '~/assets/svg/ThreePickLogo.svg?component';

// eslint-disable-next-line no-undef
definePageMeta({
    layout: 'no-header',
});

export default defineComponent({
    name: 'LoginPage',
    components: {ThreePickLogo},
    setup(props) {
        const buttonText = ref<string>('임시 비밀번호 발급받기');

        const userEmailInput = ref<string>('');
        const emailInputValidationStatus = ref<boolean>(true);
        const userInputValidation = ref<string>('');

        const onInputEmail = (params: string) => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            userEmailInput.value = params;
            emailInputValidationStatus.value =
                emailRegex.test(params) && userEmailInput.value.length > 0;
        };

        const loginButtonActivated = computed(
            () =>
                userEmailInput.value.length > 0 &&
                emailInputValidationStatus.value,
        );

        const onGetTempPassword = async () => {
            const {error} = await findPasswordApi(userEmailInput.value);

            if (error.value) {
                console.error('임시 비밀번호 발급중 오류');
                error.value.data.code === 10000 &&
                    alert('존재하지 않는 이메일입니다.');
            } else {
                buttonText.value = '재전송하기';
            }
        };

        return {
            buttonText,
            userEmailInput,
            onInputEmail,
            userInputValidation,
            emailInputValidationStatus,
            loginButtonActivated,
            onGetTempPassword,
        };
    },
});
</script>
<template>
    <div class="flex justify-center items-center mt-[112px]">
        <div class="w-[484px] mb-[260px]">
            <section class="mb-[56px]">
                <ThreePickLogo />
            </section>
            <header class="text-2xl font-bold mb-2 text-center">
                비밀번호를 잊어버리셨나요?
            </header>
            <horizontal-rule class="py-[20px]" />
            <basic-input
                v-model="userEmailInput"
                :value="userEmailInput"
                :required="true"
                :validationState="emailInputValidationStatus ? '' : 'error'"
                variant="email"
                @input.self="onInputEmail"
            />
            <basic-button
                :theme="'primary'"
                class="mt-[20px]"
                :disabled="!loginButtonActivated"
                @onClick="onGetTempPassword"
                >{{ buttonText }}</basic-button
            >
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
