/**
 * This theme is a modified version of: https://github.com/uiwjs/react-codemirror/blob/master/themes/xcode/src/index.ts
 */

import { tags as t } from "@lezer/highlight";
import { createTheme } from "@uiw/codemirror-themes";

export const defaultSettings = {
    background: "#fff",
    foreground: "black",
    selection: "#e5e5e5",
    selectionMatch: "#e5e5e5",
    gutterForeground: "#AFAFAF",
};

export function xcodeGrayscaleInit(options) {
    const { theme = "light", settings = {}, styles = [] } = options || {};
    return createTheme({
        theme: theme,
        settings: {
            ...defaultSettings,
            ...settings,
        },
        styles: [
            { tag: [t.comment, t.quote], color: "#707F8D" },
            { tag: [t.typeName, t.typeOperator], color: "#aa0d91" },
            { tag: [t.keyword], color: "#aa0d91", fontWeight: "bold" },
            { tag: [t.string, t.meta], color: "#db2777" },
            { tag: [t.name], color: "#032f62" },
            { tag: [t.typeName], color: "#522BB2" },
            { tag: [t.variableName], color: "#23575C" },
            { tag: [t.definition(t.variableName)], color: "#327A9E" },
            { tag: [t.regexp, t.link], color: "#0e0eff" },
            ...styles,
        ],
    });
}

export const xcodeGrayscale = xcodeGrayscaleInit();
