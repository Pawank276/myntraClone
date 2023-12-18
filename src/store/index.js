import { configureStore, createSlice } from "@reduxjs/toolkit"
import productSlice from "./ProductSlice";
import cartSlice from "./CartSlice";
import fetchStatusSlice from "./fetchStatusSlice";
// import productSlice from "./ProductSlice";


const productStore = configureStore({
    reducer: {
        product: productSlice.reducer,
        cart: cartSlice.reducer,
        fetching: fetchStatusSlice.reducer
    }
})

export default productStore;