import { EditorView } from "@uiw/react-codemirror";

let numberOfLines = 0;
export const UpdateStateListener = EditorView.updateListener.of((update) => {
    if (update.docChanged) {
        let newNumberOfLines = update.view.viewState.state.doc.lines;
        let head = update.view.viewState.state.selection.main.head;
        // let col = update.view.viewState.state.doc.lineAt(head).length;
        let currentLine = update.view.viewState.state.doc.lineAt(head).number;

        // need to check the current line as well
        if (newNumberOfLines > numberOfLines) {
            numberOfLines = newNumberOfLines;
        }

        // look into GET VIEWPORT
        //  console.log(currentLine, newNumberOfLines);
        if (currentLine === newNumberOfLines) {
            let viewPort = document.getElementById("scroll-viewport");
            viewPort.scrollTop = viewPort.scrollHeight;
        }
    }
});
