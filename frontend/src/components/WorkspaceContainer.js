"use client";
import { setScrollPos } from "../util/ScrollPosition";
import Editor from "./workspace/editor/Editor";
import NavBar from "./workspace/navbar/NavBar";
import Viewer from "./workspace/viewer/Viewer";
import { useRef, useEffect } from "react";
import { useSelector } from "react-redux";

const WorkspaceContainer = () => {
    const editorRef = useRef();
    const firstDivRef = useRef();
    const secondDivRef = useRef();
    const darkMode = useSelector((state) => state.darkMode);
    const scrollSynced = useSelector((state) => state.scrollSynced);

    const handleScroll = (e) => {
        if (e.target.pastRef) {
            // Remove the second panel so that it doesn't loop
            e.target.pastRef.current.removeEventListener(
                "scroll",
                handleScroll
            );
            setScrollPos(e.target.pastRef.current, e.target.currentRef.current);
            // Wait for the scroll to finish before enabling it again
            window.requestAnimationFrame(() => {
                e.target.pastRef.current.addEventListener(
                    "scroll",
                    handleScroll,
                    {
                        passive: true,
                    }
                );
            });
        }
    };

    useEffect(() => {
        if (scrollSynced) {
            if (firstDivRef.current) {
                firstDivRef.current.addEventListener("scroll", handleScroll, {
                    passive: true,
                });
                firstDivRef.current.currentRef = firstDivRef;
                firstDivRef.current.pastRef = secondDivRef;
            }
            if (secondDivRef.current) {
                secondDivRef.current.addEventListener("scroll", handleScroll, {
                    passive: true,
                });
                secondDivRef.current.currentRef = secondDivRef;
                secondDivRef.current.pastRef = firstDivRef;
            }
        }
        return () => {
            if (secondDivRef.current) {
                secondDivRef.current.removeEventListener(
                    "scroll",
                    handleScroll
                );
            }
            if (firstDivRef.current) {
                firstDivRef.current.removeEventListener("scroll", handleScroll);
            }
        };
    }, [firstDivRef, secondDivRef, scrollSynced]);

    return (
        <div
            className={`${
                darkMode ? "dark bg-zinc-700" : "bg-stone-100"
            } flex base:flex-col lg:flex-row w-full h-full justify-center base:p-2 lg:p-0  max-w-full transition-all`}
        >
            <div className="flex relative z-20 md-min-h-12 lg:w-24 lg:h-[96%] lg:max-h-screen lg:max-w-24 lg:min-h-screen lg:p-4 ">
                <NavBar editorRef={editorRef} />
            </div>
            <div className="flex relative base:z-0 lg:z-10 w-full base:w-full lg:max-w-[96%]  base:h-[calc(100svh_-_1rem)] base:pt-[3rem] lg:mt-0 lg:h-[96%]  lg:max-h-screen relative lg:min-h-screen lg:p-4 gap-3">
                <Editor editorRef={editorRef} scrollRef={firstDivRef} />
                <Viewer scrollRef={secondDivRef} editorRef={editorRef} />
            </div>
        </div>
    );
};

export default WorkspaceContainer;
