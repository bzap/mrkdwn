"use client";
import Editor from "./workspace/editor/Editor";
import Viewer from "./workspace/viewer/Viewer";

const WorkspaceContainer = () => {
    return (
        <div className="flex bg-blue-100">
            <div className="flex w-full h-full">
                <Editor />
                <Viewer />
            </div>
        </div>
    );
};

export default WorkspaceContainer;
