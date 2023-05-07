import type {Goal} from './goal';
export interface UserInfo {
    changeCount: number;
    coachMark: boolean;
    createdDate: string;
    email: string;
    lastLoginDate: string;
    modifiedDate: string;
    nickName: string;
    timeValue: number;
    goalMonth: Goal;
}
