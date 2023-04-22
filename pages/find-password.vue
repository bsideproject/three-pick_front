<script lang="ts">
import {defineComponent, computed, ref} from 'vue';

import ThreePickLogo from '~/assets/svg/ThreePickLogo.svg?component';
import {baseURL} from '~/composables';

const kakaoUrl = `${baseURL}/oauth2/authorization/kakao`;

export default defineComponent({
    name: 'LoginPage',
    components: {ThreePickLogo},
    setup(props) {
        const userEmailInput = ref<string>('');
        const userInputValidation = ref<string>('');

        const test = (params: string) => {
            userEmailInput.value = params;
        };

        const loginButtonActivated = computed(
            () =>
                userEmailInput.value.length > 0 &&
                !userInputValidation.value.length,
        );

        const checkEmailFormat = (userInputEmail: string): void => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            userInputValidation.value = emailRegex.test(userInputEmail)
                ? ''
                : 'error';
        };

        return {
            kakaoUrl,
            test,
            userEmailInput,
            userInputValidation,
            loginButtonActivated,
            checkEmailFormat,
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
                :validationState="userInputValidation"
                variant="email"
                @input.self="test"
                @blur="checkEmailFormat"
            />
            <basic-button class="mt-[20px]" :disabled="!loginButtonActivated"
                >임시 비밀번호 발급받기</basic-button
            >
        </div>
    </div>
</template>

<style lang="scss" scoped>
.test {
    border: 1px solid red;
    width: 100%;
}
</style>
