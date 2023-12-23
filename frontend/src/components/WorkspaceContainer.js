"use client";
import Editor from "./workspace/editor/Editor";
import Viewer from "./workspace/viewer/Viewer";

const WorkspaceContainer = () => {
    return (
        <div className="flex bg-blue-100 max-h-screen justify-center">
            <div className="flex w-[96%] h-[96%] max-h-screen min-h-screen p-4 gap-3">
                <Editor />
                <Viewer />
            </div>
        </div>
    );
};

export default WorkspaceContainer;
