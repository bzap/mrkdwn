import HTMLContent from "./HTMLContent";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import StatPanel from "./StatPanel";

const Viewer = ({ editorRef }) => {
    return (
        <div className="flex flex-col w-6/12 border-stone-200 border-[1px] rounded-2xl max-w-6/12 overflow-hidden border-solid relative ">
            {/* <div className="hover-scroll w-full h-full overflow-y-scroll p-8">
                <HTMLContent />
            </div> */}
            <ScrollArea.Root className="ScrollAreaRoot w-full h-full relative py-1 ">
                <ScrollArea.Viewport className="ScrollAreaViewport pb-2 h-auto">
                    <HTMLContent editorRef={editorRef} />
                </ScrollArea.Viewport>
                <ScrollArea.Scrollbar
                    className="ScrollAreaScrollbar"
                    orientation="vertical"
                >
                    <ScrollArea.Thumb className="ScrollAreaThumb" />
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
