<script setup lang="ts">
import {ref} from 'vue';

const hourValue = ref<number>();
const onInputHourValue = (params: number) => {
    hourValue.value = params;
};

const emit = defineEmits(['onConfirm', 'onCancel']);
</script>

<template>
    <div class="flex flex-col">
        <basic-input
            :value="hourValue"
            :placeholder="'최대 100,000까지 입력'"
            @input.self="onInputHourValue"
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
