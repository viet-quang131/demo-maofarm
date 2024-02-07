import { IUser } from '../interfaces/user';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { pause } from '@/utils/pause';

const userApi = createApi({
    reducerPath: 'users',
    tagTypes: ['User'],
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8080/api',
        fetchFn: async (...args) => {
            await pause(1000);
            return fetch(...args);
        }
    }),
    endpoints: (builder) => ({
        getUser: builder.query<IUser[], void>({
            query: () => `/user`,
            providesTags: ['User']
        })
    })
});

export const {
    useGetUserQuery
} = userApi;
export const userReducer = userApi.reducer;
export default userApi;