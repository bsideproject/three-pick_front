<script lang="ts">
import {defineComponent, computed, ref} from 'vue';

import KakaoLogin from '~/assets/svg/KakaoLoginButton.svg?component';
import ThreePick from '~/assets/svg/ThreePick.svg?component';
import ThreePickLogo from '~/assets/svg/ThreePickLogo.svg?component';
import {baseURL} from '~/composables';

const kakaoUrl = `${baseURL}/oauth2/authorization/kakao`;

export default defineComponent({
    name: 'LoginPage',
    components: {KakaoLogin, ThreePick, ThreePickLogo},
    setup(props) {
        const userEmailInput = ref<string>('');
        const userPasswordInput = ref<string>('');

        const test = (params: string) => {
            userEmailInput.value = params;
        };

        const testPassword = (params: string) => {
            userPasswordInput.value = params;
        };

        const loginButtonActivated = computed(
            () =>
                userEmailInput.value.length > 0 &&
                userPasswordInput.value.length > 0,
        );

        return {
            kakaoUrl,
            test,
            testPassword,
            userEmailInput,
            userPasswordInput,
            loginButtonActivated,
        };
    },
});
</script>
<template>
    <div class="flex flex-col justify-center items-center mt-[112px]">
        <div class="max-w-[484px] mb-[260px]">
            <section class="mb-[95px]">
                <ThreePickLogo />
            </section>
            <header class="text-2xl font-bold mb-2 text-center">
                매일 딱 3가지만!
            </header>
            <ThreePick class="mb-[80px] mx-auto" />
            <a :href="kakaoUrl">
                <KakaoLogin />
            </a>
            <horizontal-rule class="py-[20px]">또는</horizontal-rule>
            <basic-input
                v-model="userEmailInput"
                class="mb-[10px]"
                :value="userEmailInput"
                :required="true"
                variant="email"
                @input.self="test"
            />
            <basic-input
                variant="password"
                :value="userPasswordInput"
                :required="true"
                @input.self="testPassword"
            />
            <basic-button
                :theme="'primary'"
                class="mt-[20px]"
                :disabled="!loginButtonActivated"
                >로그인하기</basic-button
            >
            <section class="flex justify-between mt-[20px]">
                <div>이메일 저장하기 섹션</div>
                <div>
                    <NuxtLink
                        class="font-medium underline text-base ml-[44px]"
                        to="/find-password"
                        >비밀번호 찾기</NuxtLink
                    >
                    <NuxtLink
                        class="font-medium underline text-base ml-[44px]"
                        to="/join"
                        >회원가입</NuxtLink
                    >
                </div>
            </section>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
