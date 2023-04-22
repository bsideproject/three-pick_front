<script setup lang="ts">
import {ref} from 'vue';

import ThreePickLogo from '~/assets/svg/ThreePickLogo.svg?component';

const userEmailInput = ref<string>('');
const userPasswordInput = ref<string>('');
const userPasswordCheckInput = ref<string>('');
const userNicknameInput = ref<string>('');

const emailVerifyButtonStatus = ref<boolean>(true);
const emailInputValidationStatus = ref<boolean>(true);
const passwordInputValidationStatus = ref<boolean>(true);
const passwordCheckValidationStatus = ref<boolean>(true);
const nicknameCheckValidationStatus = ref<boolean>(true);

const isEmailCodeInputVisible = ref<boolean>(false);
const verifyCode = ref<string>('');

const onInputEmail = (params: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    userEmailInput.value = params;
    emailVerifyButtonStatus.value = !emailRegex.test(params);
    emailInputValidationStatus.value =
        emailRegex.test(params) && userEmailInput.value.length > 0;
};

const onInputPassword = (params: string) => {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]{8,20}$/;
    userPasswordInput.value = params;
    passwordInputValidationStatus.value =
        passwordRegex.test(params) && userPasswordInput.value.length > 0;
};

const onInputPasswordCheck = (params: string) => {
    userPasswordCheckInput.value = params;
    passwordCheckValidationStatus.value =
        userPasswordCheckInput.value.length > 0 &&
        userPasswordInput.value === userPasswordCheckInput.value;
};

const onInputNickName = (params: string) => {
    const nicknameRegex =
        /^(?!.*[\s!@#$%^&*()+\-=\[\]{};':"\\|,.<>\/?])[^\s]{2,16}$/;
    userNicknameInput.value = params;
    nicknameCheckValidationStatus.value =
        nicknameRegex.test(params) && userNicknameInput.value.length > 0;
};

const onClickVerifyEmail = () =>
    (isEmailCodeInputVisible.value = !isEmailCodeInputVisible.value);

const onInputVerifyCode = (params: string) => {
    verifyCode.value = params;
};
</script>
<template>
    <div class="flex flex-col justify-center items-center mt-[112px]">
        <div class="w-[484px] mb-[260px]">
            <section class="mb-[56px]">
                <ThreePickLogo />
            </section>
            <div class="flex items-center justify-between">
                <header class="text-2xl font-bold mb-2">
                    이메일로 회원가입
                </header>
                <div class="font-medium text-sm flex">
                    <div class="relative text-error top-[2px] pr-[1px]">*</div>
                    은 필수 입력입니다.
                </div>
            </div>
            <horizontal-rule class="text-hr pt-6 pb-[32px]" />
            <basic-input
                v-model="userEmailInput"
                :value="userEmailInput"
                :required="true"
                variant="email"
                :validationState="emailInputValidationStatus ? '' : 'error'"
                :isDisabled="isEmailCodeInputVisible"
                @input.self="onInputEmail"
            />
            <basic-button
                v-if="!isEmailCodeInputVisible"
                class="mt-[16px] mb-[32px]"
                :disabled="emailVerifyButtonStatus"
                @onClick="onClickVerifyEmail"
                >이메일 인증하기</basic-button
            >
            <section
                v-else
                class="mt-4 mb-8 h-[176px] rounded bg-[#F0F0F0] p-6"
            >
                <h3 class="text-sm mb-4 text-purple font-semibold">
                    이메일로 전송된 확인코드 6자리를 입력해 주세요.
                </h3>
                <div class="flex justify-between items-center">
                    <basic-input
                        v-model="verifyCode"
                        :value="verifyCode"
                        class="w-full !h-12"
                        variant="text"
                        @input.self="onInputVerifyCode"
                    />
                    <basic-button class="ml-2 w-[88px]">인증하기</basic-button>
                </div>
                <div class="text-xs text-gray mt-[10px]">
                    확인코드는 최대 10분간만 유효해요.
                </div>
                <div class="font-medium text-xs underline mt-4">
                    이메일 재전송하기
                </div>
            </section>
            <basic-input
                variant="password"
                :value="userPasswordInput"
                :required="true"
                :validationState="passwordInputValidationStatus ? '' : 'error'"
                @input.self="onInputPassword"
            />
            <basic-input
                class="input-margin"
                variant="passwordConfirm"
                :value="userPasswordCheckInput"
                :required="true"
                :validationState="passwordCheckValidationStatus ? '' : 'error'"
                @input.self="onInputPasswordCheck"
            />
            <basic-input
                class="input-margin"
                variant="nickname"
                :value="userNicknameInput"
                :required="true"
                :validationState="nicknameCheckValidationStatus ? '' : 'error'"
                @input.self="onInputNickName"
            />
            <horizontal-rule class="text-gray py-[32px]" />
            <section class="flex justify-between my-[20px]">
                이용약관 컴포넌트
            </section>
            <basic-button class="mb-[32px]">회원가입하기</basic-button>
            <div class="flex justify-center font-medium text-sm text-gray">
                이미 계정이 있으신가요?
                <NuxtLink to="/login" class="ml-[10px] text-purple underline"
                    >로그인하기</NuxtLink
                >
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.input-margin {
    margin-top: 32px;
}

.test {
    border: 1px solid red;
}
</style>
