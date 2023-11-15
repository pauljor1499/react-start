import { createSlice } from "@reduxjs/toolkit";
import initialState from "./InitialState";
import reducers from "./Reducers";

const ProductSlice = createSlice({
    name: "Products",
    initialState: initialState,
    reducers: reducers,
});

export const { addProduct, removeProduct } = ProductSlice.actions;
export default ProductSlice;
