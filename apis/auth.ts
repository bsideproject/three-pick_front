import type {AuthInfo} from '~/types';

export const loginApi = async (email: string, password: string) => {
    return await useApi<AuthInfo>(`/api/tokens/signin`, {
        method: 'POST',
        body: {
            email,
            password,
        },
    });
};

export const findPasswordApi = async (email: string) => {
    return await useApi(`/api/accounts/temp-password`, {
        method: 'POST',
        body: {
            email,
        },
    });
};
