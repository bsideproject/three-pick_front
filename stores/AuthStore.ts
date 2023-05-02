export const useAuthStore = defineStore('auth', () => {
    const accessToken = ref<string>('');
    const refreshToken = ref<string>('');
    const accountId = ref<number>(1);

    const accessTokenCookie = useCookie<string>('accessToken');
    const refreshTokenCookie = useCookie<string>('refreshToken');
    const accountIdCookie = useCookie<number>('accountId');

    function setAccessToken(auth: string) {
        accessToken.value = auth;
        accessTokenCookie.value = auth;
    }

    function setRefreshToken(refresh: string) {
        refreshToken.value = refresh;
        refreshTokenCookie.value = refresh;
    }

    function setAccountId(id: number) {
        accountId.value = id;
        accountIdCookie.value = id;
    }

    return {
        accessToken,
        refreshToken,
        accountId,
        accessTokenCookie,
        refreshTokenCookie,
        accountIdCookie,
        setAccessToken,
        setRefreshToken,
        setAccountId,
    };
});
