<script setup lang="ts">
import {storeToRefs} from 'pinia';

import {useUserInfoStore} from '~~/stores/UserInfoStore';

const userInfoStore = useUserInfoStore();
const {userInfo} = storeToRefs(userInfoStore);
</script>

<template>
    <div class="w-full flex flex-col shadow-md rounded h-max">
        <div class="w-full flex flex-col px-8 py-9">
            <span class="font-bold text-xl pb-2 flex">
                <div class="flex-col flex-1">
                    <div class="flex">
                        <nuxt-icon name="main/CalenderIcon" class="mt-1 mr-2" />
                        {{
                            userInfo && userInfo.goalMonth
                                ? '이번 달 목표'
                                : '이번 달 목표는 무엇인가요?'
                        }}
                    </div>
                    <span class="text-gray60 text-sm pb-4 font-normal">
                        {{
                            userInfo && userInfo.goalMonth
                                ? '하루 세 가지만 하면 이번달 목표를 이룰 수 있어요!'
                                : '오늘의 목표를 세우기 전, 큰 목표부터 세워 보세요.'
                        }}
                    </span>
                </div>
                <more-button
                    v-if="userInfo && userInfo.goalMonth"
                    :updateValue="'목표 수정하기'"
                    :deleteValue="'목표 삭제하기'"
                    @onUpdate="isUpdate = true"
                />
            </span>
            <template v-if="userInfo && userInfo.goalMonth">
                <div class="border-t border-dashed border-gray50 py-4">
                    {{ userInfo.goalMonth.content }}
                </div>
            </template>
            <create-form-button
                v-else
                class="text-base"
                :formType="'MonthGoalForm'"
            >
                + 이번달 목표 생성하기
            </create-form-button>
        </div>
    </div>
</template>
