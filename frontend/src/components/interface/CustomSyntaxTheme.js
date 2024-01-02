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
            { tag: [t.regexp, t.link], color: "#6366f1" },
            ...styles,
        ],
    });
}

export const defaultSettingsDark = {
    background: "#27272a",
    foreground: "#CECFD0",
    caret: "#fff",
    selection: "#727377",
    selectionMatch: "#727377",
    lineHighlight: "#ffffff0f",
};

export const xcodeGrayscaleDarkInit = (options) => {
    const { theme = "dark", settings = {}, styles = [] } = options || {};
    return createTheme({
        theme: theme,
        settings: {
            ...defaultSettingsDark,
            ...settings,
        },
        styles: [
            { tag: [t.comment, t.quote], color: "#7F8C98" },
            { tag: [t.keyword], color: "#FF7AB2", fontWeight: "bold" },
            { tag: [t.string, t.meta], color: "#FF8170" },
            { tag: [t.typeName], color: "#DABAFF" },
            { tag: [t.definition(t.variableName)], color: "#6BDFFF" },
            { tag: [t.name], color: "#6BAA9F" },
            { tag: [t.variableName], color: "#ACF2E4" },
            { tag: [t.regexp, t.link], color: "#FF8170" },
            ...styles,
        ],
    });
};

export const xcodeGrayscale = xcodeGrayscaleInit();
export const xcodeGrayscaleDark = xcodeGrayscaleDarkInit();
