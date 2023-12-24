const Button = ({ Icon, index }) => {
    return (
        <button
            type="button"
            class={`text-black items-center transition justify-center w-full h-max flex p-3 hover:bg-gray-100 active:bg-gray-200`}
        >
            <Icon />
        </button>
    );
};

const ButtonGroup = ({ elements }) => {
    return (
        <div
            className={`flex mb-4 rounded-xl border-gray-200 border-[1px] flex-col overflow-hidden`}
        >
            {Object.values(elements).map((element, index) => {
                return <Button Icon={element} index={index} length={length} />;
            })}
        </div>
    );
};

export const CustomComponents = {
    Button,
    ButtonGroup,
};
