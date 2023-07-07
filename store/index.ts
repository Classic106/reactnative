import { configureStore } from "@reduxjs/toolkit";
import { reducer as productsSlice } from "./products/slice";

export const store = configureStore({
  reducer: {
    product: productsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
