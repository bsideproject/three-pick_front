<script setup lang="ts">
import {ref} from 'vue';

const content = ref('');
</script>

<template>
    <textarea
        class="border-[1px] border-gray50 rounded h-[172px] p-4 focus:border-black resize-none outline-none"
        :value="content"
    />
</template>
