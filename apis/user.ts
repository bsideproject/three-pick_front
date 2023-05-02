import {useUserInfoStore} from '~~/stores/UserInfoStore';
import {UserInfo} from '~~/types';

/**
 * 한 시간의 가치 수정
 */
export const updateHourValueApi = (accountId: number, timeValue: number) =>
    useApi(`/api/accounts/time-value`, {
        method: 'PUT',
        body: {
            accountId,
            timeValue,
        },
    });

/**
 * 사용자 정보 조회
 */
export const getUserInfoApi = async (accountId: number) => {
    const {data} = useApi<UserInfo>(`/api/accounts/${accountId}`, {
        method: 'GET',
    });

    const {setUserInfo} = useUserInfoStore();
    setUserInfo(
        data.value ?? {
            changeCount: 0,
            coachMark: false,
            createdDate: '',
            email: '',
            lastLoginDate: '',
            modifiedDate: '',
            nickName: '',
            timeValue: 0,
        },
    );
};
