import jwtDecode from 'jwt-decode';
import type {UseFetchOptions} from 'nuxt/app';

import {verifyRefreshToken} from '~~/apis';
import {useAuthStore} from '~~/stores/AuthStore';

export const baseURL = 'http://101.101.219.14:8080';

/** useFetch
 * https://nuxt.com/docs/api/composables/use-fetch
 */
export const useApi = async <T>(url: string, options: UseFetchOptions<T>) => {
    const {
        accessTokenCookie,
        refreshTokenCookie,
        setAccessToken,
        setRefreshToken,
        setAccountId,
    } = useAuthStore();

    if (accessTokenCookie && isAccessTokenExpired(accessTokenCookie)) {
        console.info('AccessToken 만료.');
        const response = await verifyRefreshToken(refreshTokenCookie);
        const data = await response.json();

        if (data) {
            setAccessToken(data.accessToken);
            setRefreshToken(data.refreshToken);
            setAccountId(data.accountId);
        }
    }

    return useFetch(url, {
        ...options,
        baseURL: baseURL,
        /** interceptors
         *
         * https://github.com/unjs/ofetch#%EF%B8%8F-interceptors
         */
        onRequest({request, options}) {
            // Set the request headers
            options.headers = {
                ...options.headers,
                Authorization: `Bearer ${accessTokenCookie}`,
            };
        },
        onRequestError({request, options, error}) {
            // Handle the request errors
        },
        onResponse({request, response, options}) {
            // Process the response data
            return response._data;
        },
        onResponseError({request, response, options}) {
            // Handle the response errors
            return response._data;
        },
    });
};

const isAccessTokenExpired = (accessToken: string) => {
    const decodedToken: {exp?: number} = jwtDecode(accessToken);

    if (!decodedToken.exp) {
        return true;
    }

    const currentTime: number = Math.floor(Date.now() / 1000);

    return currentTime > decodedToken.exp;
};
