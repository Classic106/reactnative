import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "@/types";
import { ActionType } from "./types";
import ProductReducer from "./reducer";

export interface IState {
  products: IProduct[];
  chosedProduct: number | null;
}

export const initialState: IState = {
  products: [],
  chosedProduct: null,
};

const { reducer, actions } = createSlice({
  name: "product",
  initialState,
  reducers: {
    [ActionType.CHOSED_PRODUCT]: (
      state,
      action: PayloadAction<number | null>
    ) => {
      state.chosedProduct = action.payload;
    },
    [ActionType.GET_PRODUCTS]: (state, action: PayloadAction<IProduct[]>) => {
      state.products = action.payload;
    },
    [ActionType.CREATE_PRODUCT]: (state, action: PayloadAction<IProduct>) => {
      state.products.push(action.payload);
    },
    [ActionType.UPDATE_PRODUCT]: (state, action: PayloadAction<IProduct>) => {
      state.products = state.products.map((product) => {
        if (product.id === action.payload.id) {
          return action.payload;
        }
        return product;
      });
    },
    [ActionType.DELETE_PRODUCT]: (state, action: PayloadAction<Number>) => {
      state.products = state.products.filter(({ id }) => id !== action.payload);
    },
  },
  extraReducers: ProductReducer,
});

export { reducer, actions };
