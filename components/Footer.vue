<script setup lang="ts">
import {useRouter} from 'nuxt/app';

const router = useRouter();
</script>
<template>
    <nav
        class="flex justify-between items-center max-w-[988px] py-[22px] m-auto sm:px-4"
    >
        <dl class="flex">
            <dt class="text-base text-gray50 mr-[10px]">서비스 문의:</dt>
            <dd class="text-base text-gray50">threepick.contact@gmail.com</dd>
        </dl>
        <dl class="flex">
            <dt class="underline text-base text-gray50 mr-[60px]">
                서비스 이용약관
            </dt>
            <dt class="underline text-base text-gray50">개인정보 처리방침</dt>
        </dl>
    </nav>
</template>
