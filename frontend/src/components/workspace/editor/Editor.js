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
import { EditorViewTheme } from "../../../app/interface/EditorViewTheme";
import { xcodeGrayscale } from "@/app/interface/CustomSyntaxTheme";
import { useState } from "react";
import { statPanel, wordCounter } from "./BottomPanel";

const Editor = ({ editorRef }) => {
    const dispatch = useDispatch();
    const handleDispatch = (query) => {
        rIC(dispatch, setMarkdownText(query));
    };
    const debouncedDispatch = useCallback(debounce(handleDispatch, 400), []);
    useEffect(() => {
        // Done because the wrapper div between Scroll Area and CodeMirror is inaccessible to be styled
        // won't otherwise take the full height of the parent
        let cmContainer = document.getElementById("cm-container");
        cmContainer.parentElement.style =
            "min-width: 100%; display: table; height: 100%";
    }, []);
    return (
        <div className="flex w-6/12 border-stone-200 border-[1px] rounded-2xl overflow-hidden border-solid mb-3">
            <ScrollArea.Root className="ScrollAreaRoot w-full h-full flex">
                <ScrollArea.Viewport
                    id="scroll-viewport"
                    className="ScrollAreaViewport h-full flex"
                >
                    <CodeMirror
                        // value={value}
                        theme={xcodeGrayscale}
                        className="p-7 h-full h-auto min-h-full overflow-hidden"
                        id="cm-container"
                        ref={editorRef}
                        onChange={(value) => debouncedDispatch(value)}
                        extensions={[
                            markdown({ highlightFormatting: true }),
                            EditorView.lineWrapping,
                            EditorViewTheme,
                            statPanel(editorRef),
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
