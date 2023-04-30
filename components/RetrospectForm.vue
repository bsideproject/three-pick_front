<script setup lang="ts">
import {ref} from 'vue';

const content = ref('');

const emit = defineEmits(['onConfirm', 'onCancel']);
</script>

<template>
    <textarea
        class="border-[1px] border-gray50 rounded h-[172px] p-4 focus:border-black resize-none outline-none"
        :value="content"
    />
    <div class="flex flex-row gap-2 mt-4 text-base">
        <basic-button :theme="'ghost'" @onClick="emit('onCancel')"
            >취소하기</basic-button
        >
        <basic-button :theme="'primary'" @onClick="emit('onConfirm')"
            >생성하기</basic-button
        >
    </div>
</template>
