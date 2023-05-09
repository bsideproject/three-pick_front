import type {Goal} from '~/types';

export const useGoalStore = defineStore('goal', () => {
    const dayGoal = ref<Array<Goal> | null>();

    const doneValue = ref<number>(0);
    const missValue = ref<number>(0);

    function setDayGoal(value: Array<Goal> | null) {
        dayGoal.value = value;
    }

    function setDoneValue(value: number) {
        doneValue.value = value;
    }

    function setMissValue(value: number) {
        missValue.value = value;
    }

    return {
        dayGoal,
        doneValue,
        missValue,
        setDayGoal,
        setDoneValue,
        setMissValue,
    };
});
