export const rIC = (func, param) => {
    let queued = false;

    if (!queued) {
        queued = true;
        requestIdleCallback(() => {
            func(param);
            queued = false;
        });
    }
};
