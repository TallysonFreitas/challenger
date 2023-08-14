import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:4000',
  }),
  endpoints: (builder) => ({
    getPaises: builder.query<any, void>({
      query: () => 'paises',
    }),
  }),
})

export const { useGetPaisesQuery } = api
