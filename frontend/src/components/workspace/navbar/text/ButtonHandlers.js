import { split } from "lodash";

const dispatchState = (viewState, from, to, highlighted) => {
    viewState.dispatch({
        changes: {
            from: from,
            to: to,
            insert: highlighted,
        },
    });
};

// const testExisting = (slice) => {
//     console.log(slice.endsWith(), slice.startsWith());
//     return false;
// };

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
        let slice = viewState.state.sliceDoc(from, to).trim();
        let highlighted = tableString;
        dispatchState(viewState, from, to, highlighted);
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
                    dispatchState(viewState, from, to, highlighted);
                    break;
                } else {
                    highlighted = `${symbol}${slice}${symbol}`;
                    dispatchState(viewState, from, to, highlighted);
                    break;
                }
            case ">":
                let splitQuote;
                if (slice === "") {
                    highlighted = `${symbol}text`;
                    dispatchState(viewState, from, to, highlighted);
                    break;
                } else {
                    splitQuote = slice
                        .split("\n")
                        .map((value, index) => {
                            return `>${value}`;
                        })
                        .join("\n");
                    highlighted = splitQuote;
                    dispatchState(viewState, from, to, highlighted);
                    break;
                }
            case "---":
                if (slice === "") {
                    highlighted = `${symbol}`;
                    dispatchState(viewState, from, to, highlighted);
                    break;
                } else {
                    highlighted = `${symbol}${slice}`;
                    dispatchState(viewState, from, to, highlighted);
                    break;
                }
            case "```":
                if (slice === "") {
                    highlighted = `${symbol}\ntext\n${symbol}`;
                    dispatchState(viewState, from, to, highlighted);
                    break;
                } else {
                    highlighted = `${symbol}\n${slice}\n${symbol}`;
                    dispatchState(viewState, from, to, highlighted);
                    break;
                }
            default:
                break;
        }
    }
};
