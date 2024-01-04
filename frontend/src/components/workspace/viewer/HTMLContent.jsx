import { useSelector } from "react-redux";

const HTMLContent = () => {
    const markdownText = useSelector((state) => state.markdownText);
    var md = require("markdown-it")()
        .use(require("markdown-it-footnote"))
        .use(require("markdown-it-task-lists"))
        .use(require("markdown-it-mark"));
    md.renderer.rules.table_open = function (tokens, idx, options, env, self) {
        return (
            `<div class='table-wrapper'>` +
            self.renderToken(tokens, idx, options)
        );
    };
    md.renderer.rules.table_close = function (tokens, idx, options, env, self) {
        return self.renderToken(tokens, idx, options) + `</div>`;
    };

    return (
        <div className="w-1 min-w-full h-auto text-[23px]">
            <article
                className={
                    "prose py-6 px-7 max-w-none break-words dark:!prose-dark"
                }
                dangerouslySetInnerHTML={{
                    __html: md.render(markdownText),
                }}
            />
        </div>
    );
};

export default HTMLContent;
