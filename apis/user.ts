/**
 * 한 시간의 가치 수정
 */
export const updateGoalApi = (accountId: number, timeValue: number) =>
    useApi(`/api/accounts/time-value`, {
        method: 'PUT',
        body: {
            accountId,
            timeValue,
        },
    });
