import { useEffect } from "react";
import { useSelector } from "react-redux";

const StatPanel = () => {
    const markdownText = useSelector(
        (state) => state.markdownData.markdownText
    );

    // make this fade in when there's no content?

    return (
        <div
            className={`w-full flex items-end px-2 py-1 bg-stone-100 gap-2 space-between border-[1px] rounded-[0.4rem] rounded-br-lg border-stone-200 bg-white text-xs font-medium`}
        >
            <div>
                {`
            Words: ${markdownText ? markdownText.match(/(\w+)/g).length : 0} 
            `}
            </div>

            <div>
                {`
            Characters: ${
                markdownText ? markdownText.replace(/\s/g, "").length : 0
            }             `}
            </div>

            <div>
                {`
            Lines: ${markdownText ? markdownText.match(/$/gm).length : 0} 
            `}
            </div>
            <div>
                {`
            File size: ${
                markdownText ? markdownText.match(/(\w+)/g).length : 0
            } 
            `}
            </div>
        </div>
    );
};

export default StatPanel;
