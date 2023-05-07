import type {GoalType, GoalStatus} from '~/types';

/**
 * 목표 생성
 */
export const createGoalApi = async (
    accountId: number,
    content: string,
    goalType: GoalType,
    hour?: number,
    minute?: number,
    weight?: string,
) => {
    await useApi(`/api/goals`, {
        method: 'POST',
        body: {
            accountId,
            content,
            goalType,
            hour,
            minute,
            weight,
        },
    });

    getUserInfoApi(accountId);
};

/**
 * 목표 수정
 */
export const updateGoalApi = (
    accountId: number,
    content: string,
    goalId: number,
    goalStatus: GoalStatus,
    hour: number,
    minute: number,
    weight: string,
) =>
    useApi(`/api/goals`, {
        method: 'PUT',
        body: {
            accountId,
            content,
            goalId,
            goalStatus,
            hour,
            minute,
            weight,
        },
    });

/**
 * 일일 목표 조회
 */
export const getDayGoalsApi = (accountId: number) =>
    useApi(`/api/goals/${accountId}`, {
        method: 'GET',
    });

/**
 * 월 목표 조회
 */
export const getMonthGoalsApi = (
    accountId: number,
    year: number,
    month: number,
) =>
    useApi(`/api/goals/${accountId}/${year}-${month}`, {
        method: 'GET',
    });
