import type {GoalResponse} from './goal-response';

export interface RewardDayResponse {
    accountId: number;
    doneValue: number;
    goalResponse: Array<GoalResponse>;
    imageUrl: string;
    missValue: string;
    timeValue: string;
    totalValue: string;
}
