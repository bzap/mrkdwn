import { EditorView } from "@codemirror/view";

export const EditorViewTheme = EditorView.theme({
    ".cm-content": {
        height: "100%",
        fontSize: "14px",
        lineHeight: "27px",
    },
    ".cm-gutters": {
        borderWidth: "0px",
        backgroundColor: "white",
    },
    ".cm-foldGutter span": {
        display: "none",
    },
    ".cm-panels": {
        position: "sticky",
        bottom: "0px",
        width: "10rem",
        // backgroundColor: "blue",
        backgroundColor: "white",
        borderRadius: "0.4rem",
        height: "30px",
        borderWidth: "1px",
        borderColor: "#e5e7eb",
        textAlign: "center",
        justifyContent: "center",
        paddingRight: "1rem",
        fontSize: "14px",
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
    ".cm-foldGutter .cm-activeLineGutter": {
        backgroundColor: "rgba(231, 229, 228, 0.5) !important",
        width: "20px",
        borderTopLeftRadius: "0rem",
        borderBottomLeftRadius: "0rem",
    },
});
