import { marked } from "marked";
import { useSelector } from "react-redux";

const HTMLContent = () => {
    const markdownText = useSelector(
        (state) => state.markdownData.markdownText
    );

    return (
        <article
            className={"prose max-w-none relative p-7"}
            dangerouslySetInnerHTML={{
                __html: marked(markdownText, { sanitize: true }),
            }}
        />
    );
};

export default HTMLContent;
