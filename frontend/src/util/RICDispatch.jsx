export const rIC = (func, param) => {
    let queued = false;
    if (!queued) {
        queued = true;
        if (typeof requestIdleCallback === "function") {
            requestIdleCallback(() => {
                func(param);
                queued = false;
            });
        } else {
            func(param);
            queued = false;
        }
    }
};
