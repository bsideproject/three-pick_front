<script setup lang="ts">
import {storeToRefs} from 'pinia';

import {useUserInfoStore} from '~~/stores/UserInfoStore';

const userInfoStore = useUserInfoStore();
const {userInfo} = storeToRefs(userInfoStore);
</script>

<template>
    <div class="w-full flex flex-col shadow-md rounded mt-5">
        <div class="w-full h-50 flex flex-col px-8 py-9">
            <span class="font-bold text-xl pb-2 flex">
                <nuxt-icon name="main/RewardIcon" class="my-auto mr-2" />
                한 시간의 가치를 설정해 주세요.
            </span>
            <span
                v-if="userInfo && !userInfo.timeValue"
                class="text-gray60 text-sm pb-4"
            >
                목표 달성 시 해당 가치로 환산해 드려요.
            </span>

            <template v-if="userInfo && userInfo.timeValue > 0">
                <div>{{ `${userInfo.timeValue}원` }}</div>
                <div>
                    {{ `남은 수정 횟수: ${userInfo.changeCount}` }}
                </div>
            </template>
            <template v-else>
                <create-form-button
                    class="text-base"
                    :formType="'HourValueForm'"
                >
                    + 한 시간의 가치 설정하기
                </create-form-button>
            </template>
        </div>
    </div>
</template>
