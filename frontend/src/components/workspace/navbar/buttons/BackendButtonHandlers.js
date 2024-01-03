import { setIsFetching } from "@/lib/reducers/markdownSlice";

export const downloadFile = async (
    ref,
    symbol,
    setIsOpen,
    e,
    markdownData,
    dispatch
) => {
    const data = new FormData(e.target);
    let input;
    for (const [key, value] of data) {
        if (key === "input-text") {
            input = value;
        }
    }

    dispatch(setIsFetching(true));
    setTimeout(() => {
        fetch(`/api/writeFile`, {
            method: "POST",
            body: JSON.stringify({
                fileName: input,
                markdownData: markdownData,
            }),
        }).then(() => {
            fetch(`/api/downloadFile?fileName=${input}`)
                .then((res) => res.blob())
                .then((res) => {
                    const downloadLink = document.createElement("a");
                    downloadLink.setAttribute("download", `${input}.md`);
                    const href = URL.createObjectURL(res);
                    downloadLink.href = href;
                    downloadLink.setAttribute("target", "_blank");
                    downloadLink.click();
                    URL.revokeObjectURL(href);
                })
                .then(() => {
                    fetch(`/api/deleteFile`, {
                        method: "POST",
                        body: JSON.stringify({
                            fileName: input,
                        }),
                    });
                    setIsOpen(false);
                    dispatch(setIsFetching(false));
                });
        });
    }, 10);
};

export const uploadFile = async (
    ref,
    symbol,
    setIsOpen,
    e,
    markdownData,
    dispatch
) => {
    dispatch(setIsFetching(true));
    const data = new FormData(e.target);
    let input;
    for (const [key, value] of data) {
        if (key === "input-text") {
            input = value;
        }
    }
    const reader = new FileReader();
    let viewState = ref.current?.view;
    reader.readAsText(input);
    reader.onload = () => {
        setTimeout(() => {
            viewState.dispatch({
                changes: {
                    from: 0,
                    to: viewState.state.doc.length,
                    insert: reader.result,
                },
            });
        }, 100);

        setIsOpen(false);
        dispatch(setIsFetching(false));
    };

    reader.onerror = () => {
        console.log(reader.error);
    };
};

export const newFile = (ref, symbol, markdownData, e, dispatch) => {
    let viewState = ref.current?.view;
    viewState.dispatch({
        changes: {
            from: 0,
            to: viewState.state.doc.length,
            insert: " ",
        },
    });
};
