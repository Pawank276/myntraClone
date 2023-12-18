import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            state.push(action.payload)
            // console.log(action.payload)
        },
        removeFromCart: (state, action) => {
            return state.filter(Id => Id !== action.payload);
            // console.log(action.payload)
        }
    }
})
export const cartActions = cartSlice.actions;
export default cartSlice;