// Or from '@reduxjs/toolkit/query/react'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Post } from './../types/Post'

const url: string = "https://jsonplaceholder.typicode.com/"

export const postsApi = createApi({
    reducerPath: 'postsApi',
    baseQuery: fetchBaseQuery({ baseUrl: url }),
    endpoints: (builder) => ({
        getPosts: builder.query<Post[], string>({
            query: () => `posts?&_limit=10`,
        }),
    }),
})

export const { useGetPostsQuery } = postsApi;