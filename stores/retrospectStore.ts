import type {Retrospect} from '~/types';

export const useRetrospectStore = defineStore('retrospect', () => {
    const retrospect = ref<Retrospect>();

    const getRetrospect = (value: Retrospect) => {
        retrospect.value = value;
    };

    function setRetrospect(value: Retrospect) {
        console.log(value);
        retrospect.value = value;
    }

    return {
        retrospect,
        getRetrospect,
        setRetrospect,
    };
});
