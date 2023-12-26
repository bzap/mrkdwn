import { useSelector } from "react-redux";

const HTMLContent = () => {
    const markdownText = useSelector(
        (state) => state.markdownData.markdownText
    );

    var md = require("markdown-it")()
        .use(require("markdown-it-footnote"))
        .use(require("markdown-it-task-lists"))
        .use(require("markdown-it-mark"));

    return (
        // <div className="prose max-w-none">
        //     After publishing, StackEdit keeps your file linked to that
        //     publication which makes it easy for you to re-publish it. Once you
        //     have modified your file and you want to update your publication,
        //     click on the **Publish now** button in the navigation bar.
        // </div>
        <article
            className={"prose max-w-none py-6 px-7"}
            dangerouslySetInnerHTML={{
                __html: md.render(markdownText),
            }}
        />
    );
};

export default HTMLContent;
