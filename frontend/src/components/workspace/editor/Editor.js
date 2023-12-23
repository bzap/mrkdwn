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

const Editor = () => {
    const editorRef = useRef();
    const dispatch = useDispatch();

    const handleDispatch = (query) => {
        rIC(dispatch, setMarkdownText(query));
    };
    const debouncedDispatch = useCallback(debounce(handleDispatch, 400), []);

    return (
        <div className=" flex w-1/2">
            <CodeMirror
                // value={value}
                className="cm-outer-container"
                ref={editorRef}
                onChange={(value) => debouncedDispatch(value)}
                extensions={[
                    markdown({ highlightFormatting: true }),
                    EditorView.lineWrapping,
                ]}
            />
        </div>
    );
};

export default Editor;
