"use client";
import React, { useContext, useRef, useEffect } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { markdown } from "@codemirror/lang-markdown";
import { useDispatch } from "react-redux";
import { setMarkdownText } from "@/lib/reducers/markdownSlice";
import { rIC } from "@/util/RICDispatch";
import { EditorView } from "@codemirror/view";
import debounce from "lodash/debounce";
import { useCallback } from "react";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import {
    xcodeLight,
    xcodeLightInit,
    xcodeDark,
    xcodeDarkInit,
} from "@uiw/codemirror-theme-xcode";
import {
    duotoneLight,
    duotoneLightInit,
    duotoneDark,
    duotoneDarkInit,
} from "@uiw/codemirror-theme-duotone";

const Editor = () => {
    const editorRef = useRef();
    const dispatch = useDispatch();

    const handleDispatch = (query) => {
        rIC(dispatch, setMarkdownText(query));
    };
    const debouncedDispatch = useCallback(debounce(handleDispatch, 400), []);

    // bg-[#272c34]
    return (
        <div className="flex w-6/12 rounded-2xl overflow-hidden border-solid ">
            <ScrollArea.Root className="ScrollAreaRoot w-full h-full">
                <ScrollArea.Viewport className="ScrollAreaViewport ">
                    <CodeMirror
                        // value={value}
                        theme={xcodeLightInit({
                            settings: {
                                caret: "#c6c6c6",
                                fontFamily: "monospace",
                                gutterBorder: "transparent",
                                gutterBackground: "#ffff",
                            },
                        })}
                        className="cm-outer-container CodeMirror CodeMirror-linenumber  p-7"
                        ref={editorRef}
                        onChange={(value) => debouncedDispatch(value)}
                        extensions={[
                            markdown({ highlightFormatting: true }),
                            EditorView.lineWrapping,
                        ]}
                    />
                </ScrollArea.Viewport>
                <ScrollArea.Scrollbar
                    className="ScrollAreaScrollbar"
                    orientation="vertical"
                >
                    <ScrollArea.Thumb className="ScrollAreaThumb" />
                </ScrollArea.Scrollbar>
                <ScrollArea.Corner className="ScrollAreaCorner" />
            </ScrollArea.Root>
        </div>
    );
};

export default Editor;
