<script setup lang="ts">
import {onMounted} from 'vue';

import KakaoLogin from '../assets/svg/KakaoLoginButton.svg?component';
import ThreePick from '../assets/svg/ThreePick.svg?component';
import ThreePickLogo from '../assets/svg/ThreePickLogo.svg?component';

import {useAuthStore} from '~/stores/AuthStore';

const kakaoUrl = `http://101.101.219.14:8080/oauth2/authorization/kakao`;

onMounted(() => {
    const {accessToken} = useAuthStore();
    console.log('로그인 완료.', accessToken);
});
</script>
<template>
    <div class="test">
        <div class="max-w-[484px]">
            <section class="Logo">
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

<style lang="scss" scoped>
.test {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 112px;
}

.Logo {
    margin-bottom: 95px;
}
</style>
