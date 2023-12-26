import { Extension } from "@codemirror/state";
import { EditorView } from "@codemirror/view";

const EditorThemeCss = EditorView.theme({
    ".cm-content": {
        // fontFamily: "Libertad",
        fontSize: "14px",
    },
    ".cm-gutters": {
        borderWidth: "0px",
        backgroundColor: "white",
        // fontFamily: "Libertad",
        // fontSize: "13px",
        // marginTop: "0px",
    },

    // ".cm-line-numbers": {
    //     borderTopLeftRadius: "0.4rem",
    //     borderBottomLeftRadius: "0.4rem",
    // },
    // ".cm-gutterElement": {
    //     marginTop: "0px !important",

    // },
    ".cm-foldGutter span": {
        display: "none",
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
    // "@media (min-width: 768px)": {
    //     ".cm-content": {
    //         fontSize: "15px",
    //     },
    //     ".cm-gutters": {
    //         fontSize: "15px",
    //     },
    // },
});
export const EditorThemeExtension = [EditorThemeCss];
