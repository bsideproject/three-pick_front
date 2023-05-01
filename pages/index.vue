<script setup lang="ts">
import {ref, onMounted} from 'vue';

import {getRetrospectApi} from '~/apis';

const onClickCreateGoal = () => {
    console.log('click!!!');
};
const onConfirmDayGoal = () => {
    console.log('day goal confirm');
};
const onCancelDayGoal = () => {
    console.log('day goal cancel');
};

const retrospect = ref('');
onMounted(async () => {
    const {data} = await getRetrospectApi(
        3,
        new Date().toISOString().substring(0, 10),
    );
    retrospect.value = data.value?.content ?? '';
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
                            <span class="text-gray60 text-sm pb-4">
                                목표 달성 시 해당 가치로 환산해 드려요.
                            </span>
                            <create-form-button
                                class="text-base"
                                :formType="'HourValueForm'"
                            >
                                + 한 시간의 가치 설정하기
                            </create-form-button>
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
                    <div class="flex flex-row">
                        <div class="flex flex-col flex-1">
                            <span class="font-bold text-xl pb-2 pt-10 flex">
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
                        <nuxt-icon name="main/MoreIcon" class="my-auto mr-2" />
                    </div>

                    <template v-if="retrospect">
                        <div class="border-t border-dashed pt-2 border-gray50">
                            {{ retrospect }}
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
