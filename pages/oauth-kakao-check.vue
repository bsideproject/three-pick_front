<script setup lang="ts">
import {onMounted} from 'vue';
import {useRoute, useRouter} from 'vue-router';

import {useAuthStore} from '~/stores/AuthStore';

const route = useRoute();
const router = useRouter();

onMounted(() => {
    const {auth, refresh} = route.query;
    const accountId = route.query['account-id'];
    const {setAccessToken, setRefreshToken, setAccountId} = useAuthStore();

    try {
        setAccessToken(auth as string);
        setRefreshToken(refresh as string);
        setAccountId(parseInt(accountId as string));
        router.push('/');
    } catch (e) {
        console.error(e);
    }
});
</script>
<template>
    <div />
</template>

<style lang="scss" scoped></style>
