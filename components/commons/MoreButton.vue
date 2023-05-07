<script setup lang="ts">
import {ref} from 'vue';

export interface Props {
    updateValue: string;
    deleteValue: string;
}
const props = withDefaults(defineProps<Props>(), {
    updateValue: '수정하기',
    deleteValue: '삭제하기',
});

const isOpen = ref(false);

const onClickUpdateButton = () => {
    emit('onUpdate');
    isOpen.value = false;
};
const onClickDeleteButton = () => {
    emit('onDelete');
    isOpen.value = false;
};

const emit = defineEmits(['onUpdate', 'onDelete']);
</script>

<template>
    <div class="relative cursor-pointer font-normal">
        <nuxt-icon
            name="main/MoreIcon"
            class="my-auto mr-2"
            @click="isOpen = !isOpen"
        />
        <div
            v-if="isOpen"
            class="absolute top-0 right-[-116px] flex-none w-max z-50 flex flex-col text-base shadow-md bg-white"
        >
            <span class="p-4" @click="onClickUpdateButton">{{
                updateValue
            }}</span>
            <span class="p-4 text-error" @click="onClickDeleteButton">{{
                deleteValue
            }}</span>
        </div>
    </div>
</template>
