import { pause } from '@/utils/pause';
import { IProduct } from '../interfaces/product';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const productApi = createApi({
    reducerPath: "products",
    tagTypes: ["product"],
    baseQuery: fetchBaseQuery({
        baseUrl: `http://localhost:3000`,
        fetchFn: async (...args) => {
            await pause(1000);
            return fetch(...args);
        }
    }),
    endpoints: (builder) => ({
        // actions
        // GET 
        getProducts: builder.query<IProduct[], void>({
            query: () => `/products`,
            providesTags:["product"]
        }),
        getProductById: builder.query<IProduct, number | string>({
            query: (id) => `/products/${id}`,
            providesTags:["product"]
        }),
        addProduct: builder.mutation<IProduct, IProduct>({
            query: (product) => ({
                url: `/products`,
                method: "POST",
                body: product
            }),
            invalidatesTags: ["product"]
        }),
        updateProduct: builder.mutation<IProduct, IProduct>({
            query: (product) => ({
                url: `/products/${product.id}`,
                method: "PATCH",
                body: product
            }),
            invalidatesTags: ["product"]
        }),
        removeProduct: builder.mutation<IProduct, number | string>({
            query: (id) => ({
                url: `/products/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["product"]
        })
    })
});

export const {
    useGetProductsQuery,
    useGetProductByIdQuery,
    useAddProductMutation,
    useUpdateProductMutation,
    useRemoveProductMutation
} = productApi;

export const productReducer = productApi.reducer;

export default productApi