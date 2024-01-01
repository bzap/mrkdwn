export const setScrollPos = (secondRef, scroll) => {
    let parentHeight = scroll.scrollHeight - scroll.clientHeight;
    let childHeight = secondRef.scrollHeight - secondRef.clientHeight;
    let childPos = Math.ceil((scroll.scrollTop / parentHeight) * childHeight);
    secondRef.scroll({ top: childPos });
};
