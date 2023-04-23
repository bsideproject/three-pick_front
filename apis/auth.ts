import type {AuthInfo} from '~/types';

export const loginApi = async (email: string, password: string) =>
    await useApi<AuthInfo>(`/api/tokens/signin`, {
        method: 'POST',
        body: {
            email,
            password,
        },
    });
