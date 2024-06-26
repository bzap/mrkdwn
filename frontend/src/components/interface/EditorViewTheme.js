import { EditorView } from "@codemirror/view";

export const EditorViewTheme = (style, size) => {
    return EditorView.theme({
        ".cm-content": {
            height: "100%",
            fontSize: `${size}px`,
            fontFamily: style,
        },
        ".cm-gutters": {
            borderWidth: "0px",
            backgroundColor: "white",
            fontSize: `${size}px`,
            fontFamily: style,
        },
        ".cm-gutterElement": {
            backgroundColor: "white",
            width: "50px",
            paddingLeft: "0px",
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
};

export const EditorViewDarkTheme = (style, size) => {
    return EditorView.theme({
        ".cm-content": {
            height: "100%",
            fontSize: "13px",
            fontSize: `${size}px`,
            fontFamily: style,
        },
        ".cm-gutters": {
            borderWidth: "0px",
            backgroundColor: "rgba(39, 39, 39, 0) !important",
        },
        ".cm-gutterElement": {
            backgroundColor: "rgba(39, 39, 39, 1) !important",
            width: "50px",
            paddingLeft: "10px",
            display: "flex",
            "text-justify": "start",
            "justify-content": "center",
        },
        ".cm-activeLine": {
            backgroundColor: "rgba(82, 82, 91, 0.5) !important",
            borderTopRightRadius: "0.4rem",
            borderBottomRightRadius: "0.4rem",
        },
        ".cm-activeLineGutter": {
            backgroundColor: "rgba(82, 82, 91, 0.5) !important",
            borderTopLeftRadius: "0.4rem",
            borderBottomLeftRadius: "0.4rem",
        },
    });
};
