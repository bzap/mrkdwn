"use client";
import Editor from "./workspace/editor/Editor";
import NavBar from "./workspace/navbar/NavBar";
import Viewer from "./workspace/viewer/Viewer";
import { useRef } from "react";

const WorkspaceContainer = () => {
    const editorRef = useRef();
    return (
        <div className="flex bg-blue-100 max-h-screen max-w-screen justify-center">
            <div className="flex w-[4%] h-[96%] max-h-screen min-w-24 min-h-screen bg-green-200 p-4">
                <NavBar editorRef={editorRef} />
            </div>
            <div className="flex w-full max-w-[96%] h-[96%] bg-red-100 max-h-screen relative min-h-screen p-4 gap-3">
                <Editor editorRef={editorRef} />
                <Viewer />
            </div>
        </div>
    );
};

export default WorkspaceContainer;
