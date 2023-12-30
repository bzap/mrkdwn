import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    markdownText: "",
    saveState: false,
    darkMode: false,
    initState: true,
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
            state.saveState = !state.saveState;
            console.log(state.saveState, "dispatched");
        },
        setDarkMode: (state, action) => {
            state.darkMode = !state.darkMode;
        },
        setInitState: (state, action) => {
            state.initState = action.payload;
        },
    },
});

export const { setMarkdownText, setSaveState, setDarkMode, setInitState } =
    markdownSlice.actions;
export default markdownSlice.reducer;
