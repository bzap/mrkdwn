"use client";
import React, { useContext, useRef, useEffect, useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { markdown } from "@codemirror/lang-markdown";
import { useDispatch, useSelector } from "react-redux";
import { setInitState, setMarkdownText } from "@/lib/reducers/markdownSlice";
import { rIC } from "@/util/RICDispatch";
import { EditorView } from "@codemirror/view";
import debounce from "lodash.debounce";
import { useCallback } from "react";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import { EditorViewTheme } from "../../interface/EditorViewTheme";
import { xcodeGrayscale } from "@/components/interface/CustomSyntaxTheme";
import { UpdateStateListener } from "./UpdateStateListener";
import { defaultIntro } from "@/data/DefaultIntro";

const Editor = ({ editorRef, handleScroll, scrollRef }) => {
    const dispatch = useDispatch();
    const handleDispatch = (query) => {
        rIC(dispatch, setMarkdownText(query));
    };
    const debouncedDispatch = useCallback(debounce(handleDispatch, 400), []);

    const markdownText = useSelector((state) => state.markdownText);
    const initState = useSelector((state) => state.initState);
    const saveState = useSelector((state) => state.saveState);

    const editorVisible = useSelector((state) => state.editorVisible);

    useEffect(() => {
        let cmContainer = document.getElementById("cm-container");
        cmContainer.parentElement.style =
            "min-width: 100%; display: table; height: 100%";

        if (initState || !saveState) {
            dispatch(setMarkdownText(defaultIntro));
            dispatch(setInitState(false));
        } else {
            dispatch(setMarkdownText(markdownText));
            dispatch(setInitState(false));
        }
    }, []);

    return (
        <div
            className={`base:w-full lg:w-6/12 border-stone-200 border-[1px] rounded-2xl overflow-hidden border-solid flex 
            ${!editorVisible && "base:hidden lg:flex"}`}
        >
            <ScrollArea.Root className="ScrollAreaRoot w-full h-full flex py-1">
                <ScrollArea.Viewport
                    ref={scrollRef}
                    // onScroll={handleScroll}
                    // onScroll={() => console.log("wha")}
                    id="scroll-viewport-editor"
                    className="ScrollAreaViewport h-full flex pb-2"
                >
                    <CodeMirror
                        value={markdownText}
                        theme={xcodeGrayscale}
                        className="py-6 px-7 h-full h-auto min-h-full overflow-hidden"
                        id="cm-container"
                        ref={editorRef}
                        basicSetup={{
                            foldGutter: false,
                        }}
                        onChange={(value) => debouncedDispatch(value)}
                        extensions={[
                            markdown({ highlightFormatting: true }),
                            EditorView.lineWrapping,
                            EditorViewTheme,
                            UpdateStateListener,
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
