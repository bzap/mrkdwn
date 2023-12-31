"use client";
import Editor from "./workspace/editor/Editor";
import NavBar from "./workspace/navbar/NavBar";
import Viewer from "./workspace/viewer/Viewer";
import { useRef, useEffect } from "react";
import { useSelector } from "react-redux";

const WorkspaceContainer = () => {
    const editorRef = useRef();
    return (
        <div className="flex md:flex-col lg:flex-row max-h-screen max-w-screen justify-center">
            <div className="flex md:w-full md:h-[4%] lg:w-24 lg:h-[96%] lg:max-h-screen lg:max-w-24 lg:min-h-screen p-4">
                <NavBar editorRef={editorRef} />
            </div>
            <div className="flex w-full max-w-[96%] h-[96%] lg:max-h-screen relative lg:min-h-screen p-4 gap-3">
                {/* <Editor editorRef={editorRef} /> */}
                {/* <Viewer editorRef={editorRef} /> */}
            </div>
        </div>
    );
};

export default WorkspaceContainer;
