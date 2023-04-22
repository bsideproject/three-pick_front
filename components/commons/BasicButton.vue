<script setup lang="ts">
const props = defineProps({
    foo: String,
});
const emit = defineEmits(['onClick']);
</script>

<template>
    <button
        class="bg-purple text-white p-1 rounded w-full h-12 disabled:bg-gray"
        @click="emit('onClick')"
    >
        <slot />
    </button>
</template>
