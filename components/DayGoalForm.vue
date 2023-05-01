<script setup lang="ts">
import {ref, computed} from 'vue';

import {createGoalApi} from '~/apis';
import {GOAL_TYPE, WEIGHT_LEVEL} from '~/types';
import type {WeightLevel} from '~/types';

const hourPrice = ref(1000); // TODO

const goalTitle = ref('');
const onInputGoalTitle = (params: string) => {
    goalTitle.value = params;
};

const goalHour = ref(0);
const onInputGoalHour = (params: number) => {
    goalHour.value = params;
};

const goalMinute = ref(0);
const onInputGoalMinute = (params: number) => {
    goalMinute.value = params;
};

const curWeight = ref(WEIGHT_LEVEL['0']);
const weightLevels = Object.keys(WEIGHT_LEVEL);
const isSelectedWeight = (weight: WeightLevel) => {
    return curWeight.value === WEIGHT_LEVEL[weight];
};

const goalPrice = computed(() => {
    if (goalHour.value && goalMinute.value) {
        return (
            Math.floor(
                hourPrice.value *
                    (goalHour.value + Number(goalMinute.value / 60)),
            ) * Number(curWeight.value)
        );
    }
    return 0;
});

const onClickCreateButton = async () => {
    emit('onConfirm');
    const {data} = await createGoalApi(
        3,
        goalTitle.value,
        GOAL_TYPE.TODAY,
        goalHour.value,
        goalMinute.value,
        curWeight.value,
    );
    console.log(data.value);
};

const emit = defineEmits(['onConfirm', 'onCancel']);
</script>

<template>
    <div class="flex flex-col px-4 py-5 bg-gray10">
        <basic-input
            :value="goalTitle"
            :variant="'goalTitle'"
            @input.self="onInputGoalTitle"
        />

        <div class="mt-8 flex flex-row gap-7">
            <div class="w-1/2">
                <span class="text-sm"> 시간을 설정해주세요. </span>
                <div class="flex flex-row items-center mt-[10px]">
                    <basic-input
                        :value="goalHour"
                        :placeholder="'시간'"
                        class="text-center"
                        @input.self="onInputGoalHour"
                    />
                    <span class="px-2"> : </span>
                    <basic-input
                        :value="goalMinute"
                        :placeholder="'분'"
                        class="text-center"
                        @input.self="onInputGoalMinute"
                    />
                </div>
            </div>
            <div class="w-1/2">
                <span class="text-sm"> 중요도를 선택해주세요. </span>
                <div
                    class="grid grid-cols-3 divide-x divide-purple12 text-purple7 font-bold bg-white rounded border border-purple12 mt-[10px]"
                >
                    <div
                        v-for="weight in weightLevels"
                        :key="weight"
                        class="p-4 text-center"
                        :class="{
                            'border-purple10': isSelectedWeight(weight),
                            'bg-purple12': isSelectedWeight(weight),
                        }"
                        @click="curWeight = WEIGHT_LEVEL[weight]"
                    >
                        {{ WEIGHT_LEVEL[weight] }}
                    </div>
                </div>
            </div>
        </div>

        <span class="font-bold text-sm pt-8 pb-[10px]">
            설정하신 시간을 자동으로 계산해봤어요.
        </span>
        <div class="p-4 rounded font-bold text-xl text-purple7 bg-white">
            {{ goalPrice }}원
        </div>

        <div class="flex flex-row gap-2 mt-4">
            <basic-button :theme="'ghost'" @onClick="emit('onCancel')"
                >취소하기</basic-button
            >
            <basic-button :theme="'primary'" @onClick="onClickCreateButton"
                >생성하기</basic-button
            >
        </div>
    </div>
</template>
