<script setup lang="ts">
import {ref, type PropType} from 'vue';

import {createRetrospectApi, updateRetrospectApi} from '~/apis';
import type {Retrospect} from '~/types';

const props = defineProps({
    isUpdate: {
        type: Boolean,
        default: false,
    },
    data: {
        type: Object as PropType<Retrospect>,
    },
});

const content = ref(props.data?.content);

const onClickCreateButton = async () => {
    emit('onConfirm');

    if (props.isUpdate) {
        const {data} = await updateRetrospectApi(
            3,
            content.value ?? '',
            props.data?.retrospectId ?? 0,
        );
        console.log(data.value);
    } else {
        const {data} = await createRetrospectApi(
            3,
            content.value ?? '',
            new Date().toISOString().substring(0, 10),
        );
        console.log(data.value);
    }
};

const emit = defineEmits(['onConfirm', 'onCancel']);
</script>

<template>
    <textarea
        v-model="content"
        class="border-[1px] border-gray50 rounded h-[172px] p-4 focus:border-black resize-none outline-none"
    />
    <div class="flex flex-row gap-2 mt-4 text-base">
        <basic-button :theme="'ghost'" @onClick="emit('onCancel')"
            >취소하기</basic-button
        >
        <basic-button :theme="'primary'" @onClick="onClickCreateButton"
            >생성하기</basic-button
        >
    </div>
</template>
