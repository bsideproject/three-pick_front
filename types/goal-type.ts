export const GOAL_TYPE = {
    MONTH: 'MONTH',
    TODAY: 'TODAY',
} as const;

export type GoalType = keyof typeof GOAL_TYPE;
