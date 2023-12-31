import { EditorView } from "@codemirror/view";

export const EditorViewTheme = EditorView.theme({
    ".cm-content": {
        height: "100%",
        fontSize: "14px",
    },
    ".cm-gutters": {
        borderWidth: "0px",

        backgroundColor: "white",
    },

    ".cm-gutterElement": {
        backgroundColor: "whtite !important",
        width: "50px",
        paddingLeft: "10px",
        display: "flex",
        "text-justify": "start",
        "justify-content": "center",
    },
    ".cm-activeLine": {
        backgroundColor: "rgba(231, 229, 228, 0.5) !important",
        borderTopRightRadius: "0.4rem",
        borderBottomRightRadius: "0.4rem",
    },
    ".cm-activeLineGutter": {
        backgroundColor: "rgba(231, 229, 228, 0.5) !important",
        borderTopLeftRadius: "0.4rem",
        borderBottomLeftRadius: "0.4rem",
    },
});
