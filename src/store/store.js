import {configureStore} from "@reduxjs/toolkit";
import {cartReducer} from "./slices/cartSlice.js";
import {fetchProductsApi,} from "./slices/productsSlice.js";

export const store = configureStore({
  reducer   : {
	[fetchProductsApi.reducerPath]: fetchProductsApi.reducer,
	cart                          : cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
	getDefaultMiddleware()
	  .concat(fetchProductsApi.middleware)
});