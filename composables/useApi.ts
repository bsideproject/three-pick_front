import type {UseFetchOptions} from 'nuxt/app';

export const baseURL = 'http://101.101.219.14:8080';

/** useFetch
 * https://nuxt.com/docs/api/composables/use-fetch
 */
export const useApi = <T>(url: string, options: UseFetchOptions<T>) => {
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
                Authorization: `Bearer ${'myToken'}`,
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
