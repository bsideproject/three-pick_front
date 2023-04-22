export const joinApi = {
    getVerifyCode: async (userEmail: string) => {
        await useApi(`/api/accounts/${userEmail}/auth`, {
            method: 'POST',
        });
    },
    validateVerifyCode: async (userEmail: string, code: string) => {
        await useApi(`/api/accounts/${userEmail}/auth-check`, {
            method: 'GET',
            query: {
                code,
            },
        });
    },
};
