<script setup lang="ts">
import {storeToRefs} from 'pinia';
import {ref, computed} from 'vue';
import {useRouter} from 'vue-router';

import {getRetrospectApi, getUserInfoApi} from '~/apis';
import {useAuthStore} from '~/stores/AuthStore';
import {useRetrospectStore} from '~/stores/RetrospectStore';
import {useUserInfoStore} from '~~/stores/UserInfoStore';

import {dateTransformer, dateForData} from '~/utils';
import {DatePicker} from 'v-calendar';
import 'v-calendar/style.css';

const date = ref(new Date());

const selectedDate = computed(() => dateTransformer(date.value));
const selectedDateForData = computed(() => dateForData(date.value));
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
                <DatePicker v-model="date" borderless transparent expanded />
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
.vc-container {
}

.vc-header {
    margin-bottom: 1.4rem;
}

.vc-weekday {
    padding-top: 1.4rem;
    padding-bottom: 1.4rem;
}

.vc-weekday-1 {
    color: #ff5416;
}

.vc-weekday-7 {
    color: #9a7eff;
}

.vc-day {
    padding-bottom: 50px;
}

.vc-highlights {
    border: 2px solid #5d31fe;
    background-color: #ede8ff;
}

.vc-highlight.vc-highlight-bg-solid {
    display: none;
}

.vc-focus {
    color: black;
}
</style>
