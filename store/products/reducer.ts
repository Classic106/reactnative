import { ActionReducerMapBuilder } from "@reduxjs/toolkit";

import { IState } from "./slice";
import * as actions from "./actions";

const ProductReducer = (builder: ActionReducerMapBuilder<IState>): void => {
  builder.addCase(actions.getProducts.fulfilled, (state, action) => {
    if (action.payload) {
      state.products = action.payload;
    }
  });

  builder.addCase(actions.createProduct.fulfilled, (state, action) => {
    if (action.payload) {
      state.products.push(action.payload);
    }
  });

  builder.addCase(actions.updateProduct.fulfilled, (state, action) => {
    if (action.payload) {
      state.products = state.products.map((product) => {
        if (product.id === action.payload?.id) {
          return action.payload;
        }
        return product;
      });
    }
  });

  builder.addCase(actions.deleteProduct.fulfilled, (state, action) => {
    if (action.payload) {
      state.products = state.products.filter(({ id }) => id !== action.payload);
    }
  });
};

export default ProductReducer;
