<script setup lang="ts">
export interface Props {
    theme?: string;
}
const props = withDefaults(defineProps<Props>(), {
    theme: 'default',
});
const emit = defineEmits(['onClick']);

const backgroundColor: Record<string, string> = {
    default: 'bg-gray10',
    primary: 'bg-purple7',
    secondary: 'bg-purple13',
    ghost: 'bg-white',
};
const textColor: Record<string, string> = {
    default: 'text-black',
    primary: 'text-white',
    secondary: 'text-purple7',
    ghost: 'text-purple7',
};
</script>

<template>
    <button
        :class="`${backgroundColor[theme]} ${textColor[theme]} p-1 rounded w-full h-12 font-bold active:bg-purple4 active:text-white hover:bg-purple9 hover:text-white disabled:bg-gray50`"
        @click="emit('onClick')"
    >
        <slot />
    </button>
</template>
