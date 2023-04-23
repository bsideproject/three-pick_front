<script setup lang="ts">
import {useRouter} from 'nuxt/app';

import ThreePickLogo from '~/assets/svg/ThreePickLogo.svg?component';

const router = useRouter();

const onClickLogo = () => {
    router.push('/');
};
</script>
<template>
    <nav>
        <ul
            class="flex items-center max-w-[988px] py-[25px] justify-between m-auto sm:px-4"
        >
            <ThreePickLogo class="cursor-pointer" @click="onClickLogo" />
            <div class="flex">
                <NuxtLink class="font-[500] text-base" to="/reward"
                    >리워드</NuxtLink
                >
                <NuxtLink class="ml-[60px] font-[500] text-base" to="/my"
                    >마이 페이지</NuxtLink
                >
            </div>
        </ul>
    </nav>
</template>
