import type {Retrospect} from '~/types';

export const useRetrospectStore = defineStore('retrospect', () => {
    const retrospect = ref<Retrospect>();

    function setRetrospect(value: Retrospect) {
        retrospect.value = value;
    }

    return {
        retrospect,
        setRetrospect,
    };
});
