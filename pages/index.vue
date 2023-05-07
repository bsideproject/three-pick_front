<script setup lang="ts">
import {storeToRefs} from 'pinia';
import {ref, onMounted} from 'vue';
import {useRouter} from 'vue-router';

import {getRetrospectApi, getUserInfoApi} from '~/apis';
import {useAuthStore} from '~/stores/AuthStore';
import {useRetrospectStore} from '~/stores/RetrospectStore';
import {useUserInfoStore} from '~~/stores/UserInfoStore';

const onClickCreateGoal = () => {
    console.log('click!!!');
};
const onConfirmDayGoal = () => {
    console.log('day goal confirm');
};
const onCancelDayGoal = () => {
    console.log('day goal cancel');
};

const retrospectStore = useRetrospectStore();
const {retrospect} = storeToRefs(retrospectStore);
const isUpdate = ref(false);

const userInfoStore = useUserInfoStore();
const {userInfo} = storeToRefs(userInfoStore);

const router = useRouter();
onMounted(async () => {
    const {accessTokenCookie, accountIdCookie} = useAuthStore();
    if (!accessTokenCookie) {
        router.push('/login');
    }

    getUserInfoApi(accountIdCookie);
    getRetrospectApi(
        accountIdCookie,
        new Date().toISOString().substring(0, 10),
    );
});
</script>

<template>
    <div>
        <div class="w-full flex justify-center shadow-md sm:px-4">
            <div
                class="max-w-[988px] flex-1 flex flex-row justify-between py-10 text-2xl"
            >
                <span class="font-bold"> 안녕하세요, 노하우님! </span>
                <span class="font-bold">2023년 4월 9일</span>
            </div>
        </div>
        <div class="w-full flex justify-center mt-5">
            <div
                class="max-w-[988px] flex-1 flex flex-row justify-center gap-5"
            >
                <div class="w-1/3 flex flex-col">
                    <div class="w-full flex flex-col shadow-md rounded h-max">
                        <div class="w-full flex flex-col px-8 py-9">
                            <span class="font-bold text-xl pb-2 flex">
                                <nuxt-icon
                                    name="main/CalenderIcon"
                                    class="my-auto mr-2"
                                />
                                이번 달 목표는 무엇인가요?
                            </span>
                            <span class="text-gray60 text-sm pb-4">
                                오늘의 목표를 세우기 전, 큰 목표부터 세워
                                보세요.
                            </span>
                            <create-form-button
                                class="text-base"
                                :formType="'MonthGoalForm'"
                            >
                                + 이번달 목표 생성하기
                            </create-form-button>
                        </div>
                    </div>
                    <div class="w-full flex flex-col shadow-md rounded mt-5">
                        <div class="w-full h-50 flex flex-col px-8 py-9">
                            <span class="font-bold text-xl pb-2 flex">
                                <nuxt-icon
                                    name="main/RewardIcon"
                                    class="my-auto mr-2"
                                />
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
                                    {{
                                        `남은 수정 횟수: ${userInfo.changeCount}`
                                    }}
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
                </div>

                <div class="w-2/3 flex flex-col shadow-md rounded px-8 py-9">
                    <span class="font-bold text-xl pb-2 text-purple7 pb-4 flex">
                        <nuxt-icon name="main/FlagIcon" class="my-auto mr-2" />
                        오늘은 어떤 목표를 세워볼까요?
                    </span>
                    <create-form-button
                        class="text-base"
                        :formType="'DayGoalForm'"
                        @onClick="onClickCreateGoal"
                        @onConfirm="onConfirmDayGoal"
                        @onCancel="onCancelDayGoal"
                    >
                        + 첫 번째 목표 생성하기
                    </create-form-button>
                    <div class="flex flex-row pb-2 pt-10">
                        <div class="flex flex-col flex-1">
                            <span class="font-bold text-xl flex">
                                <nuxt-icon
                                    name="main/HistoryIcon"
                                    class="my-auto mr-2"
                                />
                                오늘의 회고
                            </span>
                            <span class="text-gray60 text-sm pb-4">
                                하루를 마무리하며 기록해보세요.
                            </span>
                        </div>
                        <more-button
                            v-if="retrospect && retrospect.content"
                            :updateValue="'회고 수정하기'"
                            :deleteValue="'회고 삭제하기'"
                            @onUpdate="isUpdate = true"
                        />
                    </div>
                    <template
                        v-if="retrospect && retrospect.content && isUpdate"
                    >
                        <create-form-button
                            class="text-base"
                            :formType="'RetrospectForm'"
                            :isUpdate="isUpdate"
                            :data="retrospect"
                            @onConfirm="isUpdate = false"
                        >
                            + 회고 작성하기
                        </create-form-button>
                    </template>
                    <template v-else-if="retrospect && retrospect.content">
                        <div class="border-t border-dashed pt-2 border-gray50">
                            {{ retrospect.content }}
                        </div>
                    </template>
                    <template v-else>
                        <create-form-button
                            class="text-base"
                            :formType="'RetrospectForm'"
                        >
                            + 회고 작성하기
                        </create-form-button>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>
