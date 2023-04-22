<script setup lang="ts">
import {ref, defineAsyncComponent} from 'vue';

const props = defineProps({
    formType: String,
});
const emit = defineEmits(['onClick']);

const AsyncForm = defineAsyncComponent(
    () => import(`~/components/${props.formType}.vue`),
);

const showButton = ref(true);

const onClickButton = () => {
    emit('onClick');
    showButton.value = false;
};
</script>

<template>
    <template v-if="showButton">
        <basic-button :theme="'primary'" class="h-20" @onClick="onClickButton">
            <slot />
        </basic-button>
    </template>
    <template v-else>
        <AsyncForm />
    </template>
</template>
