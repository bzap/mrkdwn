import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    markdownText: "",
    saveState: false,
    darkMode: false,
};

export const markdownSlice = createSlice({
    name: "markdownData",
    initialState,
    reducers: {
        setMarkdownText: (state, action) => {
            state.markdownText = action.payload;
            console.log("dispatched");
        },

        setSaveState: (state, action) => {
            // state.markdownText = !action.payload;
            console.log(action.payload);
        },
        setDarkMode: (state, action) => {
            state.markdownText = !action.payload;
        },
    },
});

export const { setMarkdownText, setSaveState, setDarkMode } =
    markdownSlice.actions;
export default markdownSlice.reducer;
