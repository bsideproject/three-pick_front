<script setup lang="ts">
import {ref, computed} from 'vue';

import {WEIGHT_LEVEL} from '~/types';
import type {WeightLevel} from '~/types';

const hourPrice = ref(1000); // TODO

const goalTitle = ref('');

const curWeight = ref(WEIGHT_LEVEL['0']);
const weightLevels = Object.keys(WEIGHT_LEVEL);
const isSelectedWeight = (weight: WeightLevel) => {
    return curWeight.value === WEIGHT_LEVEL[weight];
};

const hour = ref(0);
const minute = ref(0);

const goalPrice = computed(() => {
    if (hour.value && minute.value) {
        return hourPrice.value * (hour.value + Number(minute.value / 60));
    }
    return 0;
});
</script>

<template>
    <div class="flex flex-col px-4 py-5 bg-gray10">
        <basic-input :value="goalTitle" :variant="'goalTitle'" />

        <div class="mt-8 flex flex-row gap-7">
            <div class="w-1/2">
                <span class="text-sm"> 시간을 설정해주세요. </span>
                <div class="flex flex-row items-center mt-[10px]">
                    <basic-input :placeholder="'시간'" class="text-center" />
                    <span class="px-2"> : </span>
                    <basic-input :placeholder="'분'" class="text-center" />
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
            <basic-button :theme="'ghost'">취소하기</basic-button>
            <basic-button :theme="'primary'">생성하기</basic-button>
        </div>
    </div>
</template>
