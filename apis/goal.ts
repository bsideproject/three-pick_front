import type {GoalType, GoalStatus, Goal} from '~/types';
import {useGoalStore} from '~~/stores/GoalStore';

interface getDayGoalRes {
    doneValue: number;
    missValue: number;
    goalResponses: Array<Goal>;
}

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
    getDayGoalsApi(accountId, new Date().toISOString().substring(0, 10));
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
export const getDayGoalsApi = async (accountId: number, date: string) => {
    const {data} = await useApi<getDayGoalRes>(
        `/api/goals/${accountId}?date=${date}`,
        {
            method: 'GET',
        },
    );

    const {setDayGoal, setDoneValue, setMissValue} = useGoalStore();

    setDayGoal(data.value?.goalResponses ?? null);
    setDoneValue(data.value?.doneValue ?? 0);
    setMissValue(data.value?.missValue ?? 0);
};
