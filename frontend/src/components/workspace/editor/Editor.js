"use client";
import React, { useContext, useRef, useEffect } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { markdown } from "@codemirror/lang-markdown";
import { useDispatch } from "react-redux";
import { setMarkdownText } from "@/lib/reducers/markdownSlice";
import { rIC } from "@/util/RICDispatch";
import { EditorView } from "@codemirror/view";

const Editor = () => {
    const editorRef = useRef();
    const dispatch = useDispatch();

    const onChange = (value) => {
        rIC(dispatch, setMarkdownText(value));
    };
    return (
        <div className="h-screen flex bg-red-100  w-1/2">
            <CodeMirror
                // value={value}
                className="cm-outer-container"
                ref={editorRef}
                onChange={(value) => onChange(value)}
                extensions={[
                    markdown({ highlightFormatting: true }),
                    EditorView.lineWrapping,
                ]}
                //onChange={onChange}
            />
        </div>
    );
};

export default Editor;
