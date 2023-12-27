import { useSelector } from "react-redux";

export const downloadFile = async (ref, symbol, data) => {
    await fetch(`/api/writeFile`, {
        method: "POST",
        body: JSON.stringify(data),
    }).then(() => {
        fetch("/api/downloadFile")
            .then((res) => res.blob())
            .then((res) => {
                const downloadLink = document.createElement("a");
                downloadLink.setAttribute("download", "README.md");
                const href = URL.createObjectURL(res);
                downloadLink.href = href;
                downloadLink.setAttribute("target", "_blank");
                downloadLink.click();
                URL.revokeObjectURL(href);
            });
    });
};

export const uploadFile = () => {
    console.log("haha");
};
