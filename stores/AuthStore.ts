export const useAuthStore = defineStore('auth', () => {
    const accessToken = ref('');
    const refreshToken = ref('');

    function setAccessToken(auth: string) {
        accessToken.value = auth;
    }

    function setRefreshToken(refresh: string) {
        refreshToken.value = refresh;
    }

    return {accessToken, refreshToken, setAccessToken, setRefreshToken};
});
