export const downloadFile = async (ref, symbol, setIsOpen, e, markdownData) => {
    e.preventDefault();

    const data = new FormData(e.target);
    let input;
    for (const [key, value] of data) {
        if (key === "input-text") {
            input = value;
        }
    }

    await fetch(`/api/writeFile`, {
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
            });
    });
};

export const uploadFile = () => {
    console.log("haha");
};
