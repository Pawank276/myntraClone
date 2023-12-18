import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: 'product',
    initialState: [],
    reducers: {
        addInitialProducts: (state, action) => {
            // console.log(action.payload)
            return action.payload;
        }
    }
})
export const productActions = productSlice.actions;
export default productSlice;