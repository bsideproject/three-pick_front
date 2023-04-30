<script setup lang="ts">
import {useRouter} from 'nuxt/app';
import {computed, ref} from 'vue';

import {loginApi} from '~/apis';
import KakaoLogin from '~/assets/svg/KakaoLoginButton.svg?component';
import ThreePick from '~/assets/svg/ThreePick.svg?component';
import ThreePickLogo from '~/assets/svg/ThreePickLogo.svg?component';
import {baseURL} from '~/composables';
import {useAuthStore} from '~~/stores/AuthStore';

const kakaoUrl = `${baseURL}/oauth2/authorization/kakao`;

const userEmailInput = ref<string>('');
const userPasswordInput = ref<string>('');

const {setAccessToken, setRefreshToken, setAccountId} = useAuthStore();

const router = useRouter();

const onInputEmail = (params: string) => {
    userEmailInput.value = params;
};

const onInputPassword = (params: string) => {
    userPasswordInput.value = params;
};

const loginButtonActivated = computed(
    () => userEmailInput.value.length > 0 && userPasswordInput.value.length > 0,
);

const onClickLogin = async () => {
    const {data, error} = await loginApi(
        userEmailInput.value,
        userPasswordInput.value,
    );

    if (error.value) {
        console.error('로그인중 에러 발생');
    } else {
        data.value?.accessToken && setAccessToken(data.value?.accessToken);
        data.value?.refreshToken && setRefreshToken(data.value?.refreshToken);
        data.value?.accountId && setAccountId(data.value?.accountId);

        router.push('/');
    }
};
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
                @input.self="onInputEmail"
            />
            <basic-input
                variant="password"
                :value="userPasswordInput"
                :required="true"
                @input.self="onInputPassword"
            />
            <basic-button
                :theme="'primary'"
                class="mt-[20px]"
                :disabled="!loginButtonActivated"
                @onClick="onClickLogin"
                >로그인하기</basic-button
            >
            <section class="flex justify-end mt-[20px]">
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
