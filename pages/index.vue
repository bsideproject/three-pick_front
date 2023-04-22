<script setup lang="ts">
import {loginApi} from '~/apis';

const {data, pending, error, refresh} = await loginApi();
</script>

<template>
    <div>
        <h1 class="text-3xl font-bold">Home</h1>
        <div v-if="pending">Loading..</div>
        <template v-else>
            <div v-if="error">Sorry, error occured.</div>
            <div v-else>{{ data }}</div>
        </template>

        <button @click="refresh()">Refresh</button>
    </div>
</template>
