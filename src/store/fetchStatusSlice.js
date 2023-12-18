import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
    name: 'fetching',
    initialState: {
        fetching: false
    },
    reducers: {
        setFetching: (state) => {
            return state.fetching = true;
        }
    }
})
export const fetchStatusActions = fetchStatusSlice.actions;
export default fetchStatusSlice;