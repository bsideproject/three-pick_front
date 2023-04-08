<script setup lang="ts">
import {useSlots} from 'vue';

const slots = useSlots();
const showContents = () => !!slots.default;
</script>

<template>
    <div class="relative flex flex-col justify-center items-center">
        <span
            v-if="showContents()"
            class="bg-white text-hr w-auto px-[22px] py-[5px]"
        >
            <slot />
        </span>
        <hr class="absolute w-[485px] -z-10 bg-hr border-1" />
    </div>
</template>
