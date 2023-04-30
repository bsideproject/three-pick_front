<script setup lang="ts">
const onClickCreateGoal = () => {
    console.log('click!sdafds!!');
};
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
                    <div
                        class="w-full flex flex-col shadow-md rounded h-[230px]"
                    >
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
                            <!-- TODO: CreateFormButton -->
                            <basic-button class="h-20 rounded text-base">
                                + 이번달 목표 생성하기
                            </basic-button>
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
                            <!-- TODO: CreateFormButton -->
                            <basic-button
                                :theme="'secondary'"
                                class="h-20 rounded text-base"
                            >
                                + 한 시간의 가치 설정하기
                            </basic-button>
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
                        :formType="'GoalForm'"
                        @onClick="onClickCreateGoal"
                    >
                        + 첫 번째 목표 생성하기
                    </create-form-button>
                    <span class="font-bold text-xl pb-2 pt-10 flex">
                        <nuxt-icon
                            name="main/HistoryIcon"
                            class="my-auto mr-2"
                        />
                        오늘은 어떤 하루였나요?
                    </span>
                    <span class="text-gray60 text-sm pb-4">
                        하루를 마무리하며 기록해보세요.
                    </span>
                    <create-form-button
                        class="text-base"
                        :formType="'RetrospectForm'"
                    >
                        + 회고 작성하기
                    </create-form-button>
                </div>
            </div>
        </div>
    </div>
</template>
