import type {RewardDayResponse} from '~/types/reward-day-response';

/**
 * 하루 목표 조회
 */
export const getDayReward = (accountId: number, date: string) =>
    useApi<RewardDayResponse>(`/api/goals/${accountId}`, {
        method: 'GET',
        params: {
            date,
        },
    });
