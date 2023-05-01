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
export const updateRetrospectApi = (
    accountId: number,
    content: string,
    retrospectId: number,
) =>
    useApi(`/api/retrospects`, {
        method: 'PUT',
        body: {
            accountId,
            content,
            retrospectId,
        },
    });

/**
 * 회고 조회
 */
export const getRetrospectApi = async (accountId: number, date: string) => {
    return await useApi<{content: string}>(
        `/api/retrospects?account-id=${accountId}&date=${date}`,
        {
            method: 'GET',
        },
    );
};
