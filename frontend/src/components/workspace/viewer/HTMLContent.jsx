import { marked } from "marked";
import { useSelector } from "react-redux";
import markdownit from "markdown-it";

const HTMLContent = () => {
    const markdownText = useSelector(
        (state) => state.markdownData.markdownText
    );

    // var taskLists = require('markdown-it-task-lists');
    var md = require("markdown-it")()
        .use(require("markdown-it-footnote"))
        .use(require("markdown-it-task-lists"))
        .use(require("markdown-it-mark"));

    return (
        <article
            className={"prose max-w-none relative p-7"}
            dangerouslySetInnerHTML={{
                __html: md.render(markdownText),
            }}
        />
    );
};

export default HTMLContent;
