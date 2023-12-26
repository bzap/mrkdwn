import { showPanel } from "@codemirror/view";

const statConstructor = (ref) => {
    let dom = document.createElement("div");
    dom.textContent = `col: 0, ln total: 0`;
    let numberOfLines = 0;
    return {
        dom,
        update(update) {
            // Fixes a conflict with the scrollarea viewport and the editor, where it won't scroll to the bottom
            let newNumberOfLines = update.view.viewState.state.doc.lines;
            let head = update.view.viewState.state.selection.main.head;
            let col = update.view.viewState.state.doc.lineAt(head).length;
            if (newNumberOfLines > numberOfLines) {
                numberOfLines = newNumberOfLines;
                let viewPort = document.getElementById("scroll-viewport");
                viewPort.scrollTop = viewPort.scrollHeight;
            }
            if (update.docChanged)
                dom.textContent = `col: ${col}, ln total: ${numberOfLines}`;
        },
    };
};

export const statPanel = () => {
    return showPanel.of(statConstructor);
};
