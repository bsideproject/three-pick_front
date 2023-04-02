<script setup lang="ts">
import {useCounterStore} from './stores/CountStore';

const store = useCounterStore();
</script>

<template>
    <div>
        <input type="button" value="increment" @click="store.increment()" />
        {{ store.count }}
        {{ store.doubleCount }}
        <h1 class="text-3xl font-bold underline">Hello world!</h1>
    </div>
</template>

<style scoped></style>
