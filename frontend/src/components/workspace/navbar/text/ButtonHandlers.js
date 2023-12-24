export const updateText = (ref, symbol) => {
    if (ref.current) {
        let viewState = ref.current?.view;
        let from = viewState.state.selection.ranges[0].from;
        let to = viewState.state.selection.ranges[0].to;
        let slice = viewState.state.sliceDoc(from, to).trim();
        let highlighted;

        const dispatchState = () => {
            viewState.dispatch({
                changes: {
                    from: from,
                    to: to,
                    insert: highlighted,
                },
            });
        };

        switch (slice) {
            case "":
                highlighted = `${symbol}text${symbol}`;
                dispatchState();
                break;
            default:
                highlighted = `${symbol}${slice}${symbol}`;
                dispatchState();
                break;
        }
    }
};
