<script setup lang="ts">
import {useCounterStore} from './stores/CountStore';

const store = useCounterStore();
</script>

<template>
    <div>
        <input type="button" value="increment" @click="store.increment()" />
        {{ store.count }}
        {{ store.doubleCount }}
    </div>
</template>

<style scoped></style>
