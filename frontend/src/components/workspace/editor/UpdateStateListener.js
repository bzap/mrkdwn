import { EditorView } from "@uiw/react-codemirror";

let numberOfLines = 0;
export const UpdateStateListener = EditorView.updateListener.of((update) => {
    if (update.docChanged) {
        let viewPort = document.getElementById("scroll-viewport-editor");
        if (viewPort) {
            let newNumberOfLines = update.view.viewState.state.doc.lines;
            let head = update.view.viewState.state.selection.main.head;
            let currentLine =
                update.view.viewState.state.doc.lineAt(head).number;
            if (newNumberOfLines > numberOfLines) {
                numberOfLines = newNumberOfLines;
            }
            if (currentLine === newNumberOfLines) {
                viewPort.scrollTop = viewPort.scrollHeight;
            }
        }
    }
});
