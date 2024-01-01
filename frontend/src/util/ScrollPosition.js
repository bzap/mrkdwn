export const setScrollPos = (secondRef, scroll) => {
    let parentHeight = scroll.scrollHeight - scroll.clientHeight;
    let childHeight = secondRef.scrollHeight - secondRef.clientHeight;
    let childPos = Math.ceil((scroll.scrollTop / parentHeight) * childHeight);
    secondRef.scroll({ top: childPos });

    //     let slave = secondDivRef.current;
    // let master = scroll.target;
    // // console.log(master.scrollHeight, master.clientHeight);
    // // console.log(master.scrollTop);
    // let height = master.scrollHeight - master.clientHeight;
    // let percentage = (master.scrollTop / height) * 100;
    // let slaveHeight = slave.scrollHeight - slave.clientHeight;
    // let newSlavePos = Math.ceil((master.scrollTop / height) * slaveHeight);
    // console.log(newSlavePos);
    // slave.scrollTop = newSlavePos;
    // console.log(percentage);
    // let height =
    //     secondDivRef.current.scrollHeight -
    //     secondDivRef.current.clientHeight;
    // console.log(height);
    // let percentage = (secondDivRef.current.scrollTop / height) * 100;
    // let slaveHeight =
    //     firstDivRef.current.scrollHeight - firstDivRef.current.clientHeight;
    // let newSlavePos = Math.ceil(
    //     (secondDivRef.scrollTop / height) * slaveHeight
    // );
    // console.log(newSlavePos);
    // firstDivRef.current.scrollTop = scroll.target.scrollTop;
};
