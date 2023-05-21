<script setup lang="ts">
import {storeToRefs} from 'pinia';
import {ref, computed} from 'vue';
import {useRouter} from 'vue-router';

import {getRetrospectApi, getUserInfoApi} from '~/apis';
import {useAuthStore} from '~/stores/AuthStore';
import {useRetrospectStore} from '~/stores/RetrospectStore';
import {useUserInfoStore} from '~~/stores/UserInfoStore';

import {dateTransformer, dateForData} from '~/utils';
import {Calendar} from 'v-calendar';
import 'v-calendar/style.css';

const date = ref(new Date());

const selectedDate = computed(() => dateTransformer(date.value));
const selectedDateForData = computed(() => dateForData(date.value));

const attrs = ref([
    {
        key: 'today',
        content: '',
        highlight: {
            fillMode: 'outline',
        },
        dates: date,
    },
]);

const onGetRewardInfoByDate = (selectedDate: any) => {
    console.log(selectedDate);
    console.log(selectedDate.id);
    date.value = selectedDate.date;
};
</script>

<template>
    <section class="w-full flex justify-center sm:px-4">
        <div
            class="max-w-[988px] flex-1 flex flex-row justify-between py-10 text-2xl border-2 rounded"
        >
            <span class="font-bold"> 리워드 페이지 </span>
        </div>
    </section>
    <div class="w-full flex justify-center mt-5 mb-11">
        <div class="max-w-[988px] flex-1 flex flex-row justify-center gap-5">
            <div class="w-4/6 flex shadow-md flex-col rounded px-8 py-9">
                <Calendar v-model="date" :attributes="attrs" expanded>
                    <!-- @dayclick="changeSelectedDate" -->
                    <template #day-content="{day}">
                        <span
                            class="flex justify-center cursor-pointer"
                            @click="onGetRewardInfoByDate(day)"
                            >{{ day.day }}</span
                        >
                    </template>
                </Calendar>
            </div>
            <div
                class="w-2/6 flex flex-col items-center shadow-md rounded py-10"
            >
                <h3>{{ selectedDate }}</h3>
                <day-reward :selectedDate="selectedDateForData" />
            </div>
        </div>
    </div>
</template>
<style>
.vc-header {
    margin-bottom: 1.4rem;
}

.vc-weekday {
    padding-top: 1.4rem;
    padding-bottom: 1.4rem;
}

/** 일요일 */
.vc-weekday-1,
.weekday-1 {
    color: #ff5416;
}

/** 토요일 */
.vc-weekday-7,
.weekday-7 {
    color: #9a7eff;
}

.vc-day {
    padding-bottom: 50px;
    height: 118px;
    width: 83px;
}

.vc-highlights {
    border: 2px solid #5d31fe;
    background-color: #ede8ff;
}

.vc-highlight.vc-highlight-bg-solid {
    /* display: none; */
}

.vc-highlight.vc-highlight-bg-outline {
    display: none;
}

.vc-focus {
    /* color: black; */
}
</style>
