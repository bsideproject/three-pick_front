export const GOAL_STATUS = {
    DELETED: 'DELETED',
    DONE: 'DONE',
    DOING: 'DOING',
} as const;

export type GoalStatus = keyof typeof GOAL_STATUS;
