import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    markdownText: "",
};

export const markdownSlice = createSlice({
    name: "markdownData",
    initialState,
    reducers: {
        setMarkdownText: (state, action) => {
            state.markdownText = action.payload;
        },
    },
});

export const { setMarkdownText } = markdownSlice.actions;
export default markdownSlice.reducer;
