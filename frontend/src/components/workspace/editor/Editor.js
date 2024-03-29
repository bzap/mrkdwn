"use client";
import React, { useEffect } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { markdown } from "@codemirror/lang-markdown";
import { useDispatch, useSelector } from "react-redux";
import { setInitState, setMarkdownText } from "@/lib/reducers/markdownSlice";
import { EditorView } from "@codemirror/view";
import debounce from "lodash.debounce";
import { useCallback } from "react";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import {
    EditorViewTheme,
    EditorViewDarkTheme,
} from "../../interface/EditorViewTheme";
import {
    xcodeGrayscale,
    xcodeGrayscaleDark,
} from "@/components/interface/CustomSyntaxTheme";
import { UpdateStateListener } from "./UpdateStateListener";
import { defaultIntro } from "@/data/DefaultIntro";

const Editor = ({ editorRef, scrollRef }) => {
    const dispatch = useDispatch();
    const handleDispatch = async (query) => {
        dispatch(setMarkdownText(query));
    };
    const debouncedDispatch = useCallback(debounce(handleDispatch, 400), []);

    const markdownText = useSelector((state) => state.markdownText);
    const initState = useSelector((state) => state.initState);
    const saveState = useSelector((state) => state.saveState);

    const editorVisible = useSelector((state) => state.editorVisible);
    const darkMode = useSelector((state) => state.darkMode);

    const editorFontSize = useSelector((state) => state.editorFontSize);
    const editorFont = useSelector((state) => state.editorFont);

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
            className={`base:w-full lg:w-6/12  transition-all border-stone-200 dark:border-zinc-700 border-[1px] rounded-2xl overflow-hidden border-solid flex 
            ${!editorVisible && "base:hidden lg:flex"}`}
        >
            <ScrollArea.Root className="ScrollAreaRoot w-full h-full flex py-1 dark:bg-zinc-800">
                <ScrollArea.Viewport
                    ref={scrollRef}
                    id="scroll-viewport-editor"
                    className="ScrollAreaViewport h-full flex pb-2 dark:bg-zinc-800"
                >
                    <CodeMirror
                        value={markdownText}
                        theme={darkMode ? xcodeGrayscaleDark : xcodeGrayscale}
                        className="py-6 lg:px-7 base:px-5 h-full h-auto min-h-full overflow-hidden "
                        id="cm-container"
                        ref={editorRef}
                        basicSetup={{
                            foldGutter: false,
                        }}
                        onChange={(value) => debouncedDispatch(value)}
                        extensions={[
                            markdown({ highlightFormatting: true }),
                            EditorView.lineWrapping,
                            darkMode
                                ? EditorViewDarkTheme(
                                      editorFont,
                                      editorFontSize
                                  )
                                : EditorViewTheme(editorFont, editorFontSize),
                            UpdateStateListener,
                        ]}
                    />
                </ScrollArea.Viewport>
                <ScrollArea.Scrollbar
                    className="ScrollAreaScrollbar"
                    orientation="vertical"
                >
                    <ScrollArea.Thumb
                        className={`${
                            darkMode
                                ? "ScrollAreaThumb-Dark"
                                : "ScrollAreaThumb"
                        } `}
                    />
                </ScrollArea.Scrollbar>
                <ScrollArea.Corner className="ScrollAreaCorner" />
            </ScrollArea.Root>
        </div>
    );
};

export default Editor;
