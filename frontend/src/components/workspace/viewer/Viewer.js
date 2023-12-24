import HTMLContent from "./HTMLContent";
import "react-perfect-scrollbar/dist/css/styles.css";
import PerfectScrollbar from "react-perfect-scrollbar";
import * as ScrollArea from "@radix-ui/react-scroll-area";

const Viewer = () => {
    return (
        <div className="flex w-1/2 bg-white rounded-2xl overflow-hidden border-solid">
            {/* <div className="hover-scroll w-full h-full overflow-y-scroll p-8">
                <HTMLContent />
            </div> */}
            <ScrollArea.Root className="ScrollAreaRoot w-full h-full">
                <ScrollArea.Viewport className="ScrollAreaViewport">
                    <HTMLContent />
                </ScrollArea.Viewport>
                <ScrollArea.Scrollbar
                    className="ScrollAreaScrollbar"
                    orientation="vertical"
                >
                    <ScrollArea.Thumb className="ScrollAreaThumb" />
                </ScrollArea.Scrollbar>
                <ScrollArea.Corner className="ScrollAreaCorner" />
            </ScrollArea.Root>
        </div>
    );
};

export default Viewer;
