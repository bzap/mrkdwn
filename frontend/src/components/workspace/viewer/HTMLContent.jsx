import { useSelector } from "react-redux";

const HTMLContent = ({ editorRef }) => {
    const markdownText = useSelector((state) => state.markdownText);

    var md = require("markdown-it")()
        .use(require("markdown-it-footnote"))
        .use(require("markdown-it-task-lists"))
        .use(require("markdown-it-mark"));

    console.log(md.render(markdownText));
    return (
        <article
            className={"prose max-w-none py-6 px-7"}
            dangerouslySetInnerHTML={{
                __html: md.render(markdownText),
            }}
        />
    );
};

export default HTMLContent;
