import { EditorView } from "@codemirror/view";

export const EditorViewTheme = EditorView.theme({
    ".cm-content": {
        height: "100%",
        fontSize: "14px",
    },
    ".cm-gutters": {
        borderWidth: "0px",
        backgroundColor: "white",
        marginRight: "15px",
    },

    ".cm-activeLine": {
        backgroundColor: "rgba(231, 229, 228, 0.5) !important",
        borderRadius: "0.4rem",
        borderRadius: "0.4rem",
    },
    ".cm-activeLineGutter": {
        backgroundColor: "white !important",
        borderTopLeftRadius: "0.4rem",
        borderBottomLeftRadius: "0.4rem",
    },
    ".cm-foldGutter .cm-activeLineGutter": {
        backgroundColor: "rgba(231, 229, 228, 0.5) !important",
        width: "20px",
        borderTopLeftRadius: "0rem",
        borderBottomLeftRadius: "0rem",
    },
});
