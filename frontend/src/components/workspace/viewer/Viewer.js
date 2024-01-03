import HTMLContent from "./HTMLContent";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import StatPanel from "./StatPanel";
import { useSelector } from "react-redux";

const Viewer = ({ editorRef, scrollRef }) => {
    const editorVisible = useSelector((state) => state.editorVisible);
    const darkMode = useSelector((state) => state.darkMode);
    return (
        <div
            className={`flex-col base:w-full lg:w-6/12 border-stone-200 border-[1px] dark:border-zinc-700 rounded-2xl max-w-6/12 overflow-hidden border-solid relative ${
                editorVisible && "base:hidden lg:flex"
            }`}
        >
            <ScrollArea.Root className="ScrollAreaRoot w-full h-full relative py-1 dark:bg-zinc-800">
                <ScrollArea.Viewport
                    ref={scrollRef}
                    id="scroll-viewport-viewer"
                    className="ScrollAreaViewport pb-2 h-auto dark:bg-zinc-800"
                >
                    <HTMLContent editorRef={editorRef} />
                </ScrollArea.Viewport>
                <ScrollArea.Scrollbar
                    className={`ScrollAreaScrollbar`}
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
            <div className="absolute bottom-2.5 right-2.5 w-auto">
                <StatPanel />
            </div>
        </div>
    );
};

export default Viewer;
