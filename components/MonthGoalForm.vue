<script setup lang="ts">
import {ref} from 'vue';

const goalTitle = ref('');
const onInputGoalTitle = (params: string) => {
    goalTitle.value = params;
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
            <basic-button :theme="'primary'" @onClick="emit('onConfirm')"
                >생성하기</basic-button
            >
        </div>
    </div>
</template>
