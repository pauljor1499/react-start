import { createSlice } from "@reduxjs/toolkit";

const ProductSlice = createSlice({
    name: "Products",
    initialState: [],
    reducers: {
        addProduct: (state, action) => {
            state.push(action.payload);
        },
        removeProduct: (state, action) => {
            state.splice(action.payload, 1);
        },
    },
});

export const { addProduct } = ProductSlice.actions;
export const { removeProduct } = ProductSlice.actions;

export default ProductSlice;
