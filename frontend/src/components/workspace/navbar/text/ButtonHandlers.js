import { CursorArrowIcon } from "@radix-ui/react-icons";
import { EditorSelection } from "@uiw/react-codemirror";

const dispatchState = (viewState, from, to, highlighted, symbol, baseCase) => {
    switch (symbol) {
        case "image":
            viewState.dispatch(
                viewState.state.changeByRange((range) => ({
                    changes: {
                        from: from,
                        to: to,
                        insert: highlighted,
                    },
                    range: EditorSelection.range(range.from + 2, range.to + 19),
                }))
            );
            break;
        case "link":
            viewState.dispatch(
                viewState.state.changeByRange((range) => ({
                    changes: {
                        from: from,
                        to: to,
                        insert: highlighted,
                    },
                    range: EditorSelection.range(range.from + 1, range.to + 17),
                }))
            );
            break;
        case "table":
            viewState.dispatch(
                viewState.state.changeByRange((range) => ({
                    changes: {
                        from: from,
                        to: to,
                        insert: highlighted,
                    },
                    range: EditorSelection.range(range.from + 1, range.to + 8),
                }))
            );
            break;
        case "```":
            viewState.dispatch({
                changes: {
                    from: from,
                    to: to,
                    insert: highlighted,
                },
            });
            let head = viewState.state.selection.main.head;
            let line = viewState.state.doc.lineAt(head);
            let newOffset = viewState.state.doc.line(line.number + 1);
            viewState.dispatch(
                viewState.state.changeByRange((range) => ({
                    range: EditorSelection.range(newOffset.from, newOffset.to),
                }))
            );
            break;
        default:
            if (baseCase) {
                const offset = symbol.length;
                viewState.dispatch(
                    viewState.state.changeByRange(
                        (range) => (
                            console.log(range),
                            {
                                changes: {
                                    from: from,
                                    to: to,
                                    insert: highlighted,
                                },
                                range: EditorSelection.range(
                                    range.from + offset,
                                    range.to + offset + 4
                                ),
                            }
                        )
                    )
                );
            } else {
                viewState.dispatch({
                    changes: {
                        from: from,
                        to: to,
                        insert: highlighted,
                    },
                });
            }
            break;
    }

    viewState.focus();
};

export const insertText = (ref, symbol, setIsOpen, e) => {
    e.preventDefault();
    setIsOpen(false);
    if (ref.current) {
        const data = new FormData(e.target);
        let url;
        for (const [key, value] of data) {
            if (key === "input-text") {
                url = value;
            }
        }
        let viewState = ref.current?.view;
        let from = viewState.state.selection.ranges[0].from;
        let to = viewState.state.selection.ranges[0].to;
        let highlighted;
        switch (symbol) {
            case "image":
                highlighted = `![Image description](${url})`;
                dispatchState(viewState, from, to, highlighted, symbol);
                break;
            case "link":
                highlighted = `[Link description](${url})`;
                dispatchState(viewState, from, to, highlighted, symbol);
                break;
            default:
                break;
        }
    }
};

export const createTable = (ref, symbol, setIsOpen, e) => {
    e.preventDefault();
    setIsOpen(false);
    if (ref.current) {
        const data = new FormData(e.target);
        let row, col;
        for (const [key, value] of data) {
            if (key === "row-num") {
                row = parseInt(value);
            } else if (key === "col-num") {
                col = parseInt(value);
            }
        }
        let tableString = ``;
        let tempCol;
        for (let i = 0; i < row + 1; i++) {
            tempCol = "";
            for (let y = 0; y < col + 1; y++) {
                if (i === 0) {
                    if (y === col) {
                        tempCol += "|\n";
                    } else {
                        tempCol += `|header${y + 1}`;
                    }
                } else if (i === 1) {
                    if (y === col) {
                        tempCol += "|\n";
                    } else {
                        tempCol += "|-------";
                    }
                } else {
                    if (y === col) {
                        tempCol += "|\n";
                    } else {
                        tempCol += `|column${y + 1}`;
                    }
                }
            }
            tableString += tempCol;
        }
        let viewState = ref.current?.view;
        let from = viewState.state.selection.ranges[0].from;
        let to = viewState.state.selection.ranges[0].to;
        let highlighted = tableString;
        dispatchState(viewState, from, to, highlighted, symbol);
    }
};

export const updateText = (ref, symbol) => {
    if (ref.current) {
        let viewState = ref.current?.view;
        let from = viewState.state.selection.ranges[0].from;
        let to = viewState.state.selection.ranges[0].to;
        let slice = viewState.state.sliceDoc(from, to).trim();
        let highlighted;

        switch (symbol) {
            case "**":
            case "_":
            case "~~":
            case "==":
                if (slice === "") {
                    highlighted = `${symbol}text${symbol}`;
                    dispatchState(
                        viewState,
                        from,
                        to,
                        highlighted,
                        symbol,
                        true
                    );
                    break;
                } else {
                    highlighted = `${symbol}${slice}${symbol}`;
                    dispatchState(viewState, from, to, highlighted, symbol);
                    break;
                }
            case ">":
                let splitQuote;
                if (slice === "") {
                    highlighted = `${symbol}text`;
                    dispatchState(
                        viewState,
                        from,
                        to,
                        highlighted,
                        symbol,
                        true
                    );
                    break;
                } else {
                    splitQuote = slice
                        .split("\n")
                        .map((value, index) => {
                            return `>${value}`;
                        })
                        .join("\n");
                    highlighted = splitQuote;
                    dispatchState(viewState, from, to, highlighted, symbol);
                    break;
                }
            case "---":
                if (slice === "") {
                    highlighted = `${symbol}`;
                    dispatchState(
                        viewState,
                        from,
                        to,
                        highlighted,
                        symbol,
                        true
                    );
                    break;
                } else {
                    highlighted = `${symbol}${slice}`;
                    dispatchState(viewState, from, to, highlighted, symbol);
                    break;
                }
            case "```":
                if (slice === "") {
                    highlighted = `${symbol}\ntext\n${symbol}`;
                    dispatchState(
                        viewState,
                        from,
                        to,
                        highlighted,
                        symbol,
                        true
                    );
                    break;
                } else {
                    highlighted = `${symbol}\n${slice}\n${symbol}`;
                    dispatchState(viewState, from, to, highlighted, symbol);
                    break;
                }
            default:
                break;
        }
    }
};
