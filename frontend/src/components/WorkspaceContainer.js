"use client";
import Editor from "./workspace/editor/Editor";
import NavBar from "./workspace/navbar/NavBar";
import Viewer from "./workspace/viewer/Viewer";
import { useRef, useEffect } from "react";
import { useSelector } from "react-redux";

const WorkspaceContainer = () => {
    const editorRef = useRef();

    // useEffect(() => {
    //     console.log(editorVisible);
    // }, [editorVisible]);
    // const navBarExpanded = useSelector((state) => state.navBarExpanded);
    return (
        <div className="flex md:flex-col lg:flex-row w-full h-full justify-center md:p-2  max-w-full">
            <div className="flex relative z-10 md-min-h-12 lg:w-24 lg:h-[96%] lg:max-h-screen lg:max-w-24 lg:min-h-screen lg:p-4 ">
                <NavBar editorRef={editorRef} />
            </div>
            <div className="flex relative md:z-0 lg:z-10 w-full md:w-full lg:max-w-[96%]  md:h-[calc(100vh_-_1rem)] md:pt-[3rem] lg:mt-0 lg:h-[96%]  lg:max-h-screen relative lg:min-h-screen lg:p-4 gap-3">
                <Editor editorRef={editorRef} />
                <Viewer editorRef={editorRef} />
            </div>
            {/* <div className="flex relative md:z-0 lg:z-10 w-full md:w-full lg:max-w-[96%]  md:h-[calc(100vh_-_1rem)] md:pt-[3rem] lg:mt-0 lg:h-[96%]  lg:max-h-screen relative lg:min-h-screen lg:p-4 gap-3 md:hidden">
                <Editor editorRef={editorRef} />
                <Viewer editorRef={editorRef} />
            </div> */}
        </div>
    );
};

export default WorkspaceContainer;
