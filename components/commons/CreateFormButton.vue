<script setup lang="ts">
import {ref, defineAsyncComponent} from 'vue';

export interface Props {
    formType: string;
    isUpdate?: boolean;
    data?: any;
}
const props = withDefaults(defineProps<Props>(), {
    isUpdate: false,
    data: {},
});
const emit = defineEmits(['onClick', 'onConfirm', 'onCancel']);

const AsyncForm = defineAsyncComponent(
    () => import(`~/components/${props.formType}.vue`),
);

const isUpdate = ref(props.isUpdate);
const showButton = ref(true);

const buttonThemeByFormType: Record<string, string> = {
    MonthGoalForm: 'default',
    HourValueForm: 'secondary',
    DayGoalForm: 'primary',
    RetrospectForm: 'primary',
};

const onClickButton = () => {
    emit('onClick');
    showButton.value = false;
};
const onConfirm = () => {
    emit('onConfirm');
    showButton.value = true;
    isUpdate.value = false;
};
const onCancel = () => {
    emit('onCancel');
    showButton.value = true;
    isUpdate.value = false;
};
</script>

<template>
    <template v-if="showButton && !isUpdate">
        <basic-button
            :theme="buttonThemeByFormType[formType]"
            class="h-20"
            @onClick="onClickButton"
        >
            <slot />
        </basic-button>
    </template>
    <template v-else>
        <AsyncForm
            :isUpdate="isUpdate"
            :data="data"
            @onConfirm="onConfirm"
            @onCancel="onCancel"
        />
    </template>
</template>
