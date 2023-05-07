<script setup lang="ts">
import {storeToRefs} from 'pinia';
import {ref, onMounted} from 'vue';

import {getRetrospectApi} from '~/apis';
import {useAuthStore} from '~/stores/AuthStore';
import {useRetrospectStore} from '~/stores/RetrospectStore';

const retrospectStore = useRetrospectStore();
const {retrospect} = storeToRefs(retrospectStore);
const isUpdate = ref(false);

onMounted(async () => {
    const {accountIdCookie} = useAuthStore();

    getRetrospectApi(
        accountIdCookie,
        new Date().toISOString().substring(0, 10),
    );
});
</script>

<template>
    <div class="flex flex-row pb-2 pt-10">
        <div class="flex flex-col flex-1">
            <span class="font-bold text-xl flex">
                <nuxt-icon name="main/HistoryIcon" class="my-auto mr-2" />
                오늘의 회고
            </span>
            <span class="text-gray60 text-sm pb-4">
                하루를 마무리하며 기록해보세요.
            </span>
        </div>
        <more-button
            v-if="retrospect && retrospect.content"
            :updateValue="'회고 수정하기'"
            :deleteValue="'회고 삭제하기'"
            @onUpdate="isUpdate = true"
        />
    </div>
    <template v-if="retrospect && retrospect.content && isUpdate">
        <create-form-button
            class="text-base"
            :formType="'RetrospectForm'"
            :isUpdate="isUpdate"
            :data="retrospect"
            @onConfirm="isUpdate = false"
        >
            + 회고 작성하기
        </create-form-button>
    </template>
    <template v-else-if="retrospect && retrospect.content">
        <div class="border-t border-dashed py-4 border-gray50">
            {{ retrospect.content }}
        </div>
    </template>
    <template v-else>
        <create-form-button class="text-base" :formType="'RetrospectForm'">
            + 회고 작성하기
        </create-form-button>
    </template>
</template>
