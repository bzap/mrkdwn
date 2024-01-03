import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    markdownText: "",
    saveState: false,
    darkMode: false,
    initState: true,
    isFetching: false,
    navBarExpanded: false,
    editorVisible: true,
    scrollSynced: true,
    editorFontSize: 13,
    editorFont: "fira",
    viewerFontSize: 13,
    editorFont: "inter",
};

export const markdownSlice = createSlice({
    name: "markdownData",
    initialState,
    reducers: {
        setMarkdownText: (state, action) => {
            state.markdownText = action.payload;
        },
        setSaveState: (state) => {
            state.saveState = !state.saveState;
        },
        setDarkMode: (state) => {
            state.darkMode = !state.darkMode;
        },
        setInitState: (state, action) => {
            state.initState = action.payload;
        },
        setIsFetching: (state, action) => {
            state.isFetching = action.payload;
        },
        setNavBarExpanded: (state, action) => {
            state.navBarExpanded = !action.payload;
        },
        setEditorVisible: (state) => {
            state.editorVisible = !state.editorVisible;
        },
        setScrollSynced: (state) => {
            state.scrollSynced = !state.scrollSynced;
        },
        setEditorFontSize: (state, action) => {
            if (action.payload === "-") {
                state.editorFontSize--;
            } else {
                state.editorFontSize++;
            }
        },
    },
});

export const {
    setMarkdownText,
    setSaveState,
    setDarkMode,
    setInitState,
    setIsFetching,
    setNavBarExpanded,
    setEditorVisible,
    setScrollSynced,
    setEditorFontSize,
} = markdownSlice.actions;
export default markdownSlice.reducer;
