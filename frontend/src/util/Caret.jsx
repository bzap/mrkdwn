export const locateCaret = () => {
    const selectionback = window.getSelection();
    if (selectionback.rangeCount !== 0) {
        const range = selectionback.getRangeAt(0).cloneRange();
        range.collapse(true);
        const rect = range.getClientRects()[0];
        if (rect) {
            return {
                top: rect.top,
                bottom: rect.bottom,
                left: rect.left,
                right: rect.right,
                x: rect.x,
            };
        }
    }
    return undefined;
};
