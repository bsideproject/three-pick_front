<script setup lang="ts">
import KakaoLogin from '~/assets/svg/KakaoLoginButton.svg?component';
import ThreePick from '~/assets/svg/ThreePick.svg?component';
import ThreePickLogo from '~/assets/svg/ThreePickLogo.svg?component';
import {baseURL} from '~/composables';

const kakaoUrl = `${baseURL}/oauth2/authorization/kakao`;
</script>
<template>
    <div class="flex flex-col justify-center items-center mt-[112px]">
        <div class="max-w-[484px]">
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
            <basic-button disabled>로그인</basic-button>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
