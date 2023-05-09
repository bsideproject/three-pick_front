<script setup lang="ts">
import {storeToRefs} from 'pinia';
import {onMounted} from 'vue';
import {useRouter} from 'vue-router';

import {getUserInfoApi, getRetrospectApi, getDayGoalsApi} from '~/apis';
import {useAuthStore} from '~/stores/AuthStore';
import {useUserInfoStore} from '~~/stores/UserInfoStore';

const router = useRouter();

const userInfoStore = useUserInfoStore();
const {userInfo} = storeToRefs(userInfoStore);

onMounted(async () => {
    const {accessTokenCookie, accountIdCookie} = useAuthStore();
    if (!accessTokenCookie) {
        router.push('/login');
    }

    const today = new Date().toISOString().substring(0, 10);

    getUserInfoApi(accountIdCookie);
    getDayGoalsApi(accountIdCookie, today);
    getRetrospectApi(accountIdCookie, today);
});
</script>

<template>
    <div>
        <div class="w-full flex justify-center shadow-md sm:px-4">
            <div
                class="max-w-[988px] flex-1 flex flex-row justify-between py-10 text-2xl"
            >
                <span class="font-bold"
                    >{{ `안녕하세요, ${userInfo && userInfo.nickName}님` }}
                </span>
                <span class="font-bold">2023년 4월 9일</span>
            </div>
        </div>
        <div class="w-full flex justify-center mt-5 mb-11">
            <div
                class="max-w-[988px] flex-1 flex flex-row justify-center gap-5"
            >
                <div class="w-2/5 flex flex-col">
                    <month-goal />
                    <hour-value />
                </div>

                <div class="w-3/5 flex flex-col shadow-md rounded px-8 py-9">
                    <day-goal />
                    <retrospect />
                </div>
            </div>
        </div>
    </div>
</template>
