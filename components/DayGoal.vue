<script setup lang="ts">
const onClickCreateGoal = () => {
    console.log('click!!!');
};
const onConfirmDayGoal = () => {
    console.log('day goal confirm');
};
const onCancelDayGoal = () => {
    console.log('day goal cancel');
};
</script>

<template>
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
</template>
