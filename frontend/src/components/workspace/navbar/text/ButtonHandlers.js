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
                if (slice === "") {
                    highlighted = `${symbol}text${symbol}`;
                    dispatchState(viewState, from, to, highlighted);
                    break;
                    // add a case to undo it here
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
                    // add a case to undo it here
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
