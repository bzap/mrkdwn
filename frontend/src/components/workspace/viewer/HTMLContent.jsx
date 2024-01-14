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

    const fontStyle = useSelector((state) => state.viewerFont);
    const fontSize = useSelector((state) => state.viewerFontSize);
    console.log(fontSize);

    return (
        <div className={`w-1 min-w-full h-auto `}>
            <article
                style={{ fontSize: `${fontSize}px` }}
                className={`prose py-6 px-7 max-w-none break-words dark:!prose-dark ${fontStyle} `}
                dangerouslySetInnerHTML={{
                    __html: md.render(markdownText),
                }}
            />
        </div>
    );
};

export default HTMLContent;
