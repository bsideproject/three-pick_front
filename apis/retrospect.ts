import {useRetrospectStore} from '~/stores/RetrospectStore';
import type {Retrospect} from '~/types';
import {useApi} from '~~/composables';

/**
 * 회고 생성
 */
export const createRetrospectApi = (
    accountId: number,
    content: string,
    retrospectDate: string,
) =>
    useApi(`/api/retrospects`, {
        method: 'POST',
        body: {
            accountId,
            content,
            retrospectDate,
        },
    });

/**
 * 회고 수정
 */
export const updateRetrospectApi = async (
    accountId: number,
    content: string,
    retrospectId: number,
) => {
    await useApi(`/api/retrospects`, {
        method: 'PUT',
        body: {
            accountId,
            content,
            retrospectId,
        },
    });

    getRetrospectApi(accountId, new Date().toISOString().substring(0, 10));
};

/**
 * 회고 조회
 */
export const getRetrospectApi = async (accountId: number, date: string) => {
    const {data} = await useApi<Retrospect>(
        `/api/retrospects?account-id=${accountId}&date=${date}`,
        {
            method: 'GET',
        },
    );

    const {setRetrospect} = useRetrospectStore();
    setRetrospect(data.value ?? {content: ''});
};
