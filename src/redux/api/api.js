import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const api = createApi({
    reducerPath: 'api',
    
    baseQuery: fetchBaseQuery({
        baseUrl: "http://cepbep.ddns.net:2500/api/shopDB/",
        
    }),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: (page = 1) => `products/getAllProducts?page=${page}`,
            providesTags: ['products']
        }),
        
        
    })
})

export const { useGetAllProductsQuery } = api