import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
};

const ProductSlice = createSlice({
    name: "Products",
    initialState: initialState,
    reducers: {
        addProduct: (state, action) => {
            state.products.push(action.payload);
        },
        removeProduct: (state, action) => {
            state.products.splice(action.payload, 1);
        },
    },
});

export const { addProduct, removeProduct } = ProductSlice.actions;
export default ProductSlice;
