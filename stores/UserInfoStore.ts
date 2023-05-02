import type {UserInfo} from '~/types';

export const useUserInfoStore = defineStore('userInfo', () => {
    const userInfo = ref<UserInfo>();

    function setUserInfo(value: UserInfo) {
        userInfo.value = value;
    }

    return {
        userInfo,
        setUserInfo,
    };
});
