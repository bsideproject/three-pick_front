<script setup lang="ts">
const emit = defineEmits(['onComplete', 'onCancel']);
</script>

<template>
    <div
        class="fixed inset-0 flex w-full h-full align-center justify-center bg-[rgb(34,34,34,60%)]"
    >
        <div
            class="w-[350px] h-[220px] rounded bg-white px-[45px] py-[42px] flex align-center justify-center flex-col my-auto"
        >
            <div class="font-xl text-purple7 font-bold mb-4 text-center">
                <slot name="header" />
            </div>
            <slot name="content" />
            <div class="flex mt-8 gap-4">
                <slot name="footer" />
            </div>
        </div>
    </div>
</template>
