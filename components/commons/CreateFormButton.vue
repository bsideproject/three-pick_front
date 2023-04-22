<script setup lang="ts">
import {ref, defineAsyncComponent} from 'vue';

const props = defineProps({
    formType: String,
});
const emit = defineEmits(['onClick', 'onConfirm', 'onCancel']);

const AsyncForm = defineAsyncComponent(
    () => import(`~/components/${props.formType}.vue`),
);

const showButton = ref(false);

const onClickButton = () => {
    emit('onClick');
    showButton.value = false;
};
const onConfirm = () => {
    emit('onConfirm');
    showButton.value = true;
};
const onCancel = () => {
    emit('onCancel');
    showButton.value = true;
};
</script>

<template>
    <template v-if="showButton">
        <basic-button :theme="'primary'" class="h-20" @onClick="onClickButton">
            <slot />
        </basic-button>
    </template>
    <template v-else>
        <AsyncForm @onConfirm="onConfirm" @onCancel="onCancel" />
    </template>
</template>
