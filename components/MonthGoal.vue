<template>
    <div class="w-full flex flex-col shadow-md rounded h-max">
        <div class="w-full flex flex-col px-8 py-9">
            <span class="font-bold text-xl pb-2 flex">
                <nuxt-icon name="main/CalenderIcon" class="my-auto mr-2" />
                이번 달 목표는 무엇인가요?
            </span>
            <span class="text-gray60 text-sm pb-4">
                오늘의 목표를 세우기 전, 큰 목표부터 세워 보세요.
            </span>
            <create-form-button class="text-base" :formType="'MonthGoalForm'">
                + 이번달 목표 생성하기
            </create-form-button>
        </div>
    </div>
</template>
