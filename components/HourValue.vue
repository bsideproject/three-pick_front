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
                <div class="flex-1 flex">
                    <nuxt-icon name="main/RewardIcon" class="my-auto mr-2" />
                    한 시간의 가치
                </div>
                <div class="text-purple7">100,000원</div>
            </span>
            <div class="text-sm text-gray60">남은 수정 횟수: 2회</div>
            <!-- <span
                v-if="userInfo && !userInfo.timeValue"
                class="text-gray60 text-sm pb-4"
            >
                목표 달성 시 해당 가치로 환산해 드려요.
            </span> -->
            <!--  v-if="userInfo && userInfo.timeValue > 0" -->
            <div
                class="border-y border-dashed border-gray50 py-[63.46px] mt-[27.47px] flex"
            >
                <div class="flex flex-col flex-1 items-center">
                    <div class="text-[95px]">🥐</div>
                    <div class="text-base font-bold">
                        스테이크만큼 벌었어요!
                    </div>
                </div>
                <div class="flex flex-col pl-7 flex-1">
                    <div class="flex flex-col">
                        <div class="text-sm">달성 금액</div>
                        <div class="text-2xl font-bold mt-4">2,400,000원</div>
                    </div>
                    <div class="flex flex-col mt-8">
                        <div class="text-sm">달성 예정 금액</div>
                        <div class="text-2xl text-orange font-bold mt-4">
                            2,400,000원
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex mt-[27.46px]">
                <div class="flex-1 text-base font-bold my-auto">
                    목표 달성 현황
                </div>
                <div class="flex flex-row gap-2">
                    <nuxt-icon name="main/GoalIcon3" filled class="goal-icon" />
                    <nuxt-icon name="main/GoalIcon2" filled class="goal-icon" />
                    <nuxt-icon name="main/GoalIcon1" filled class="goal-icon" />
                </div>
            </div>
            <!-- <template v-else>
                <create-form-button
                    class="text-base"
                    :formType="'HourValueForm'"
                >
                    + 한 시간의 가치 설정하기
                </create-form-button>
            </template> -->
        </div>
    </div>
</template>

<style>
.goal-icon > svg {
    width: 36px;
    height: 36px;
    gap: 8px;
}
</style>
