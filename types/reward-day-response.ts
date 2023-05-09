import type {Goal} from './goal';

export interface RewardDayResponse {
    accountId: number;
    doneValue: number;
    goalResponse: Array<Goal>;
    imageUrl: string;
    missValue: string;
    timeValue: string;
    totalValue: string;
}
