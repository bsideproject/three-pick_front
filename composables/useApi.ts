const baseURL = 'https://01.101.219.14:8080';

export default (url: string) => {
    return useFetch(url, {
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
        },
    });
};
