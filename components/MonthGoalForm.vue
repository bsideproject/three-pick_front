<script setup lang="ts">
import {ref} from 'vue';

import {createGoalApi} from '~/apis';
import {GOAL_TYPE} from '~/types';
import {useAuthStore} from '~~/stores/AuthStore';

const goalTitle = ref('');
const onInputGoalTitle = (params: string) => {
    goalTitle.value = params;
};

const {accountIdCookie} = useAuthStore();

const onClickCreateButton = async () => {
    emit('onConfirm');
    await createGoalApi(
        accountIdCookie,
        goalTitle.value,
        GOAL_TYPE.MONTH,
        1,
        1,
        '0.5',
    );
};

const emit = defineEmits(['onConfirm', 'onCancel']);
</script>

<template>
    <div class="flex flex-col">
        <basic-input
            :value="goalTitle"
            :placeholder="'이번달 목표 입력'"
            @input.self="onInputGoalTitle"
        />
        <div class="flex flex-row gap-2 mt-4 text-base">
            <basic-button :theme="'ghost'" @onClick="emit('onCancel')"
                >취소하기</basic-button
            >
            <basic-button :theme="'primary'" @onClick="onClickCreateButton"
                >생성하기</basic-button
            >
        </div>
    </div>
</template>
