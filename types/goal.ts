import type {GoalStatus} from './goal-status';
import type {GoalType} from './goal-type';
import type {WeightLevel} from './weight-level';

export interface Goal {
    accountId: number;
    content: string;
    goalDate: string;
    goalId: number;
    goalStatus: GoalStatus;
    goalType: GoalType;
    hour: number;
    minute: number;
    timeValue: number;
    value: number;
    weight: WeightLevel;
}
