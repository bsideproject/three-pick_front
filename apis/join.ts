import type {UserInfo} from '~/types';

export const joinApi = {
    getVerifyCode: async (email: string) => {
        await useApi(`/api/accounts/${email}/auth`, {
            method: 'POST',
        });
    },
    validateVerifyCode: async (email: string, code: string) => {
        return await useApi<Record<string, boolean>>(
            `/api/accounts/${email}/auth-check`,
            {
                method: 'GET',
                query: {
                    code,
                },
            },
        );
    },
    join: async (email: string, nickname: string, password: string) => {
        return await useApi<UserInfo>(`/api/accounts`, {
            method: 'POST',
            body: {
                email,
                nickname,
                password,
            },
        });
    },
};
