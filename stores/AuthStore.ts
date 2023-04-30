export const useAuthStore = defineStore('auth', () => {
    const accessToken = ref<string>('');
    const refreshToken = ref<string>('');
    const accountId = ref<number>(0);

    function setAccessToken(auth: string) {
        accessToken.value = auth;
    }

    function setRefreshToken(refresh: string) {
        refreshToken.value = refresh;
    }

    function setAccountId(id: number) {
        accountId.value = id;
    }

    return {
        accessToken,
        refreshToken,
        accountId,
        setAccessToken,
        setRefreshToken,
        setAccountId,
    };
});
