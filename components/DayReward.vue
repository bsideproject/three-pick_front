<script setup lang="ts">
import {getDayReward} from '~/apis';

const props = defineProps({
    selectedDate: {
        type: String,
        default: null,
    },
});

// FIX ME - accountId 수정
const {data} = await getDayReward(1, props.selectedDate);
</script>

<template>
    <div class="mt-10">
        <h3>선택한 날짜 > {{ selectedDate }}</h3>
    </div>
</template>
