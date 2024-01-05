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
    editorFont: "var(--font-fira-mono)",
    viewerFontSize: 13,
    viewerFont: "__className_e66fe9",
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
        setEditorFont: (state, action) => {
            state.editorFont = action.payload;
        },
        setViewerFontSize: (state, action) => {
            if (action.payload === "-") {
                state.viewerFontSize--;
            } else {
                state.viewerFontSize++;
            }
        },
        setViewerFont: (state, action) => {
            state.viewerFont = action.payload;
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
    setEditorFont,
    setViewerFontSize,
    setViewerFont,
} = markdownSlice.actions;
export default markdownSlice.reducer;
