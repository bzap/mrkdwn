import { EditorSelection } from "@uiw/react-codemirror";
import { cursorDocEnd, insertNewlineAndIndent } from "@codemirror/commands";
//

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
            if (baseCase) {
                let head = viewState.state.selection.main.head;
                let line = viewState.state.doc.lineAt(head);
                let newOffset = viewState.state.doc.line(line.number + 1);
                console.log(newOffset);
                viewState.dispatch(
                    viewState.state.changeByRange((range) => ({
                        range: EditorSelection.range(
                            newOffset.from,
                            newOffset.to
                        ),
                    }))
                );
            }
            break;
        case "- [ ] ":
        case "1. ":
        case "- ":
            if (baseCase) {
                const offset = symbol.length;
                viewState.dispatch(
                    viewState.state.changeByRange((range) => ({
                        changes: {
                            from: from,
                            to: to,
                            insert: highlighted,
                        },
                        range: EditorSelection.range(
                            range.from + offset,
                            range.to + offset + 4
                        ),
                    }))
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
        case "footnote":
            viewState.dispatch({
                changes: {
                    from: from,
                    to: to,
                    insert: highlighted,
                },
            });
            setTimeout(() => {
                cursorDocEnd(viewState);
                insertNewlineAndIndent(viewState);
            }, 10);
            setTimeout(() => {
                insertNewlineAndIndent(viewState);
            }, 10);
            setTimeout(() => {
                let head = viewState.state.selection.main.head;
                let line = viewState.state.doc.lineAt(head);
                viewState.dispatch(
                    viewState.state.changeByRange((range) => ({
                        changes: {
                            from: line.from,
                            to: line.to,
                            insert: `${highlighted}: text`,
                        },
                        range: EditorSelection.range(
                            line.from + highlighted.length + 2,
                            line.to + highlighted.length + 6
                        ),
                    }))
                );
            }, 10);
            break;
        default:
            if (baseCase) {
                const offset = symbol.length;
                viewState.dispatch(
                    viewState.state.changeByRange((range) => ({
                        changes: {
                            from: from,
                            to: to,
                            insert: highlighted,
                        },
                        range: EditorSelection.range(
                            range.from + offset,
                            range.to + offset + 4
                        ),
                    }))
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
    setTimeout(() => {
        viewState.focus();
    }, 10);
};

export const insertList = (ref, symbol) => {
    if (ref.current) {
        let viewState = ref.current?.view;
        let from = viewState.state.selection.ranges[0].from;
        let to = viewState.state.selection.ranges[0].to;
        let highlighted;
        let slice = viewState.state.sliceDoc(from, to).trim();
        switch (symbol) {
            case "1. ":
                if (slice === "") {
                    highlighted = `1. Text\n2. `;
                    dispatchState(
                        viewState,
                        from,
                        to,
                        highlighted,
                        symbol,
                        true
                    );
                } else {
                    highlighted = `1. ${slice}`;
                    dispatchState(viewState, from, to, highlighted, symbol);
                }
                break;
            case "- ":
                if (slice === "") {
                    highlighted = `- Text\n-  `;
                    dispatchState(
                        viewState,
                        from,
                        to,
                        highlighted,
                        symbol,
                        true
                    );
                } else {
                    highlighted = `- ${slice}`;
                    dispatchState(viewState, from, to, highlighted, symbol);
                }
                break;
            case "- [ ] ":
                if (slice === "") {
                    highlighted = `- [ ] Text\n- [ ] `;
                    dispatchState(
                        viewState,
                        from,
                        to,
                        highlighted,
                        symbol,
                        true
                    );
                } else {
                    highlighted = `- [ ] ${slice}`;
                    dispatchState(viewState, from, to, highlighted, symbol);
                }
                break;
            default:
                break;
        }
    }
};

export const insertText = (ref, symbol, setIsOpen, e) => {
    e.preventDefault();
    setIsOpen(false);
    if (ref.current) {
        const data = new FormData(e.target);
        let input;
        for (const [key, value] of data) {
            if (key === "input-text") {
                input = value;
            }
        }
        let viewState = ref.current?.view;
        let from = viewState.state.selection.ranges[0].from;
        let to = viewState.state.selection.ranges[0].to;
        let highlighted;
        switch (symbol) {
            case "image":
                highlighted = `![Image description](${input})`;
                dispatchState(viewState, from, to, highlighted, symbol);
                break;
            case "link":
                highlighted = `[Link description](${input})`;
                dispatchState(viewState, from, to, highlighted, symbol);
                break;
            case "footnote":
                highlighted = `[^${input}]`;
                dispatchState(viewState, from, to, highlighted, symbol);
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
                    highlighted = `${symbol}Text${symbol}`;
                    dispatchState(
                        viewState,
                        from,
                        to,
                        highlighted,
                        symbol,
                        true
                    );
                } else {
                    highlighted = `${symbol}${slice}${symbol}`;
                    dispatchState(viewState, from, to, highlighted, symbol);
                }
                break;
            case ">":
                let splitQuote;
                if (slice === "") {
                    highlighted = `${symbol}Text`;
                    dispatchState(
                        viewState,
                        from,
                        to,
                        highlighted,
                        symbol,
                        true
                    );
                } else {
                    splitQuote = slice
                        .split("\n")
                        .map((value, index) => {
                            return `>${value}`;
                        })
                        .join("\n");
                    highlighted = splitQuote;
                    dispatchState(viewState, from, to, highlighted, symbol);
                }
                break;
            case "---":
                highlighted = `${symbol}${slice}`;
                dispatchState(viewState, from, to, highlighted, symbol);
                break;
            case "```":
                if (slice === "") {
                    highlighted = `${symbol}\nText\n${symbol}`;
                    dispatchState(
                        viewState,
                        from,
                        to,
                        highlighted,
                        symbol,
                        true
                    );
                } else {
                    highlighted = `${symbol}\n${slice}\n${symbol}`;
                }
                break;
            default:
                break;
        }
    }
};
