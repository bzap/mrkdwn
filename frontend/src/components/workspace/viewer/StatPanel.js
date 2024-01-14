import { useSelector } from "react-redux";

const StatPanel = () => {
    const markdownText = useSelector((state) => state.markdownText);
    const words = markdownText.match(/(\w+)/g);
    const characters = markdownText.replace(/\s/g, "");
    const lines = markdownText.match(/$/gm);
    return (
        <div
            className={`w-full flex items-end px-2 py-1 bg-stone-100 dark:bg-zinc-600 text-black gap-2 space-between border-[1px] rounded-[0.4rem] dark:text-[#CECFD0] rounded-br-lg border-stone-200 dark:border-zinc-700 text-xs font-medium`}
        >
            <div>
                {`
            Words: ${words ? words.length : 0} 
            `}
            </div>

            <div>
                {`
            Characters: ${characters ? characters.length : 0}`}
            </div>

            <div>
                {`
            Lines: ${lines ? lines.length : 0} 
            `}
            </div>
            {/* <div>
                {`
            File size: ${words ? words.length : 0} 
            `}
            </div> */}
        </div>
    );
};

export default StatPanel;
