import {createSlice} from "@reduxjs/toolkit";
import {
  createApi,
  fetchBaseQuery
} from "@reduxjs/toolkit/query/react";

export const fetchProductsApi = createApi({
  reducerPath: "productsApi",
  baseQuery  : fetchBaseQuery({
	baseUrl: "https://dummyjson.com/"
  }),
  endpoints  : (builder) => (
	{
	  getAllProducts: builder.query({
		query: () => "/products?limit=100"
	  })
	}
  )
});

export const {useGetAllProductsQuery} = fetchProductsApi;