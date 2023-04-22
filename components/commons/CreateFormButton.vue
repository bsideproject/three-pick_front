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
        <button
            class="bg-purple text-white p-1 rounded w-full h-20 disabled:bg-gray"
            @click="onClickButton"
        >
            <slot />
        </button>
    </template>
    <template v-else>
        <AsyncForm />
    </template>
</template>
