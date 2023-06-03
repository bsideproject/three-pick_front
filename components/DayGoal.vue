<script setup lang="ts">
import {ref} from 'vue';
import {storeToRefs} from 'pinia';

import {updateGoalApi} from '~/apis';
import {useAuthStore} from '~~/stores/AuthStore';
import {useGoalStore} from '~~/stores/GoalStore';
import {type Goal, GOAL_STATUS} from '~~/types';

const onClickCreateGoal = () => {
    console.log('click!!!');
};
const onConfirmDayGoal = () => {
    console.log('day goal confirm');
};
const onCancelDayGoal = () => {
    console.log('day goal cancel');
};

const goalStore = useGoalStore();
const {dayGoal} = storeToRefs(goalStore);

const curGoal = ref();
const onClickCheckIcon = (goal: Goal) => {
    isModalOpen.value = true;
    curGoal.value = goal;
};

const {accountIdCookie} = useAuthStore();

const isModalOpen = ref(false);
const onClickGoalCompleted = () => {
    const completedGoal = {
        ...curGoal.value,
        goalStatus: GOAL_STATUS.DONE,
    };
    updateGoalApi(accountIdCookie, completedGoal);
    isModalOpen.value = false;
};
</script>

<template>
    <span class="font-bold text-xl text-purple7 pb-4 flex">
        <nuxt-icon name="main/FlagIcon" class="my-auto mr-2" />
        오늘은 어떤 목표를 세워볼까요?
    </span>
    <div v-if="dayGoal && dayGoal.length > 0" class="flex flex-col gap-4">
        <div
            v-for="goal in dayGoal"
            :key="goal.goalId"
            :class="
                goal.goalStatus === GOAL_STATUS.DONE
                    ? 'flex bg-green p-4 rounded'
                    : 'flex bg-purple13 p-4 rounded border border-purple12'
            "
        >
            <template v-if="goal.goalStatus === GOAL_STATUS.DONE">
                <nuxt-icon name="main/CompletedIcon" filled class="mt-1 mr-4" />
                <div class="text-base text-gray40 flex-1 my-auto">
                    {{ goal.content }}
                </div>
                <div class="text-purple7 font-bold text-xl">Completed</div>
            </template>
            <template v-else>
                <nuxt-icon
                    name="main/CheckIcon"
                    filled
                    class="my-auto mr-4 cursor-pointer"
                    @click="onClickCheckIcon(goal)"
                />
                <div class="text-base flex flex-col font-bold flex-1">
                    {{ goal.content }}
                    <div class="flex gap-2 text-sm">
                        <span>{{ `${goal.hour}시간 ${goal.minute}분` }}</span>
                        <span class="text-purple7">{{ goal.value }}원</span>
                    </div>
                </div>
                <more-button
                    class="my-auto"
                    :updateValue="'목표 수정하기'"
                    :deleteValue="'목표 삭제하기'"
                    @onUpdate="isUpdate = true"
                />
            </template>
        </div>
    </div>
    <create-form-button
        v-if="dayGoal && dayGoal.length < 3"
        class="text-base mt-4"
        :formType="'DayGoalForm'"
        @onClick="onClickCreateGoal"
        @onConfirm="onConfirmDayGoal"
        @onCancel="onCancelDayGoal"
    >
        {{ `+ ${dayGoal.length + 1}번째 목표 생성하기` }}
    </create-form-button>

    <modal v-if="isModalOpen">
        <template #header> 목표 달성을 축하드려요! </template>
        <template #content>
            <div class="text-center text-sm">정말로 목표를 완료하시겠어요?</div>
            <div class="text-center text-sm">
                (목표를 완료하면 수정이나 삭제가 불가능해요)
            </div>
        </template>
        <template #footer>
            <basic-button :theme="'ghost'" @click="isModalOpen = false"
                >취소하기</basic-button
            >
            <basic-button :theme="'primary'" @click="onClickGoalCompleted()"
                >목표 완료하기</basic-button
            >
        </template>
    </modal>
</template>
