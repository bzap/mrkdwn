import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useState, forwardRef } from "react";
import * as Popover from "@radix-ui/react-popover";
import { Cross2Icon } from "@radix-ui/react-icons";
import { useDispatch, useSelector } from "react-redux";
import * as Switch from "@radix-ui/react-switch";
import { setIsFetching } from "@/lib/reducers/markdownSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { setNavBarExpanded } from "@/lib/reducers/markdownSlice";
import * as Dialog from "@radix-ui/react-dialog";
import SettingsContainer from "../workspace/navbar/buttons/SettingsContainer";

export const Button = ({
    props,
    icon,
    index,
    text,
    fitted,
    handler,
    editorRef,
    data,
    height,
    dispatcher,
    symbol,
    fetcher,
    type = "button",
    title,
}) => {
    const dispatch = useDispatch();
    const isFetching = useSelector((state) => state.isFetching);
    const darkMode = useSelector((state) => state.darkMode);
    const onClick = (e) => {
        if (type !== "submit") {
            if (symbol === "new" && data.length > 0) {
                if (
                    confirm(
                        "The content in the editor will be lost. Do you wish to proceed?"
                    )
                ) {
                    handler(editorRef, symbol, data, e, dispatch);
                }
            } else if (type === "dispatch") {
                dispatch(dispatcher(data));
            } else {
                handler(editorRef, symbol, data, e, dispatch);
            }
        }
    };
    return (
        <div className="flex items-center">
            <button
                type={"type"}
                onClick={onClick}
                className={`text-black select-none outline-none items-center transition justify-center group
            ${
                fitted &&
                darkMode &&
                "bg-zinc-600 hover:bg-zinc-500 border-zinc-600 active:bg-zinc-400"
            }
            ${
                fitted
                    ? `h-[${
                          height ? height : "30"
                      }px] w-[40px] rounded-md border-stone-200 border-[1px] bg-stone-100 rounded-[0.4rem] dark:hover:bg-zinc-600 dark:active:bg-zinc-700 hover:bg-stone-200 active:bg-stone-300`
                    : "base:h-[30px] lg:h-[2.4rem] w-[45px] hover:bg-stone-100 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 active:bg-stone-300"
            } flex`}
            >
                {icon && (
                    <div
                        className={`${
                            isFetching && fetcher && "animate-spin transition"
                        } `}
                    >
                        <div className="base:hidden lg:block transition">
                            <FontAwesomeIcon
                                icon={isFetching && fetcher ? faSpinner : icon}
                                size={`xs`}
                                color={`${darkMode && "#cecfd0"}`}
                            />
                        </div>
                        <div className="lg:hidden base:block">
                            <FontAwesomeIcon
                                color={`${darkMode && "#cecfd0"}`}
                                icon={isFetching && fetcher ? faSpinner : icon}
                                size={`sm`}
                            />
                        </div>
                    </div>
                )}

                {text && (
                    <p
                        className={`flex w-full justify-center text-[13px] font-medium ${
                            darkMode && "text-[#cecfd0]"
                        }`}
                    >
                        {text}
                    </p>
                )}
                {title && <HoverElement title={title} />}
            </button>
        </div>
    );
};

const TriggerButton = forwardRef((props, forwardedRef) => {
    const darkMode = useSelector((state) => state.darkMode);
    return (
        <div className="flex items-center">
            <button
                {...props}
                ref={forwardedRef}
                className={`group text-black select-none outline-none items-center transition justify-center base:h-[30px] lg:h-[2.4rem] w-[45px] dark:hover:bg-zinc-600 dark:active:bg-zinc-700 flex hover:bg-stone-100 active:bg-stone-200`}
            >
                <div className="base:hidden lg:block transition">
                    <FontAwesomeIcon
                        color={`${darkMode && "#cecfd0"}`}
                        icon={props.icon}
                        size={`xs`}
                    />
                </div>
                <div className="lg:hidden base:block transition">
                    <FontAwesomeIcon
                        color={`${darkMode && "#cecfd0"}`}
                        icon={props.icon}
                        size={`sm`}
                    />
                </div>
                <HoverElement title={props.hovertitle} />
            </button>
        </div>
    );
});

const HorizontalDropdownMenu = ({ icon, handler, editorRef, title }) => {
    const onSelect = (e) => {
        handler(editorRef, e.target.getAttribute("value"));
    };
    // need to use the selector because using the tw dark class doesnt seem to apply to the primitives
    //#52525b
    const darkMode = useSelector((state) => state.darkMode);
    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
                <TriggerButton icon={icon} hovertitle={title} />
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
                <DropdownMenu.Content
                    className={`${
                        darkMode && "DropdownMenuContent-Dark"
                    } DropdownMenuContent shadow-lg relative z-20 dark:bg-red-100 bg-red-200`}
                    sideOffset={25}
                    side="right"
                >
                    <DropdownMenu.Item
                        onSelect={onSelect}
                        className={`${
                            darkMode && "DropdownMenuItem-Dark"
                        } DropdownMenuItem transition `}
                        value={"- "}
                    >
                        Unordered List{" "}
                        <div
                            className={`${
                                darkMode && "RightSlot-Dark"
                            } RightSlot`}
                        >
                            - - -
                        </div>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item
                        onSelect={onSelect}
                        value={"1. "}
                        className={`${
                            darkMode && "DropdownMenuItem-Dark"
                        } DropdownMenuItem transition `}
                    >
                        Ordered List{" "}
                        <div
                            className={`${
                                darkMode && "RightSlot-Dark"
                            } RightSlot`}
                        >
                            1. 2. 3.
                        </div>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item
                        onSelect={onSelect}
                        value={"- [ ] "}
                        className={`${
                            darkMode && "DropdownMenuItem-Dark"
                        } DropdownMenuItem transition `}
                    >
                        Task List
                        <div
                            className={`${
                                darkMode && "RightSlot-Dark"
                            } RightSlot`}
                        >
                            {"- [ ] - [x]"}
                        </div>
                    </DropdownMenu.Item>
                    <DropdownMenu.Arrow
                        className={`${
                            darkMode && "DropdownMenuArrow-Dark"
                        } DropdownMenuArrow`}
                    />
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    );
};

const VerticalSwitch = ({ header, icon, dispatcher, title }) => {
    const darkMode = useSelector((state) => state.darkMode);
    const dispatch = useDispatch();
    const state = useSelector((state) => state[header]);
    const handleToggle = (value) => {
        if (value !== state) {
            dispatch(dispatcher());
        }
    };

    return (
        <div className="align-items items-center flex group">
            <label
                htmlFor={"switch-toggle" + header}
                className={`flex justify-center base:h-[30px] lg:h-[2.4rem] w-[45px] transition cursor-pointer hover:bg-stone-100 active:bg-stone-200 dark:hover:bg-zinc-600 dark:active:bg-zinc-700`}
            >
                <div className="flex flex-col font-bold w-full  items-center flex justify-center">
                    <form>
                        <div className="flex-col  w-full h-full items-center base:pb-1 justify-center flex">
                            <div className="transition">
                                <FontAwesomeIcon
                                    color={`${darkMode ? "#cecfd0" : "black"}`}
                                    icon={icon}
                                    size="xs"
                                />
                            </div>

                            <Switch.Root
                                defaultChecked={state}
                                onCheckedChange={handleToggle}
                                className={`${
                                    darkMode ? "SwitchRoot-Dark" : "SwitchRoot"
                                } transition base:-mt-1 lg:mt-0`}
                                id={"switch-toggle" + header}
                            ></Switch.Root>
                        </div>
                    </form>
                    {title && <HoverElement title={title} />}
                </div>
            </label>
        </div>
    );
};

const HorizontalPopover = ({
    icon,
    description,
    placeholder,
    symbol,
    data,
    editorRef,
    fetcher,
    handler,
    title,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();
    const darkMode = useSelector((state) => state.darkMode);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (symbol === "upload" && data.length > 0) {
            if (
                confirm(
                    "The content in the editor will be lost. Do you wish to proceed?"
                )
            ) {
                handler(
                    editorRef,
                    symbol,
                    setIsOpen,
                    e,
                    data,
                    dispatch,
                    setIsFetching
                );
            }
        } else {
            handler(
                editorRef,
                symbol,
                setIsOpen,
                e,
                data,
                dispatch,
                setIsFetching
            );
        }
    };
    return (
        <Popover.Root open={isOpen} onOpenChange={setIsOpen}>
            <Popover.Trigger asChild>
                <TriggerButton icon={icon} hovertitle={title} />
            </Popover.Trigger>
            <Popover.Portal>
                <Popover.Content
                    side="right"
                    sideOffset={25}
                    className={` ${
                        darkMode && "PopoverContent-Dark"
                    } PopoverContent shadow-lg relative z-20`}
                >
                    <div className="flex flex-col px-[5px] py-[9px]">
                        <p
                            className={`${darkMode && "Text-Dark"} Text`}
                            style={{ marginBottom: 1 }}
                        >
                            {description}
                        </p>
                        <form
                            id="popover-form"
                            name="popover-form"
                            onSubmit={handleSubmit}
                        >
                            {symbol === "table" ? (
                                <fieldset className="Fieldset">
                                    <div className={"flex gap-1"}>
                                        <input
                                            className={`${
                                                darkMode && "Input-Dark"
                                            } Input max-w-[100px] transition  dark:hover:border-stone-700`}
                                            id="row-num"
                                            name="row-num"
                                            autoComplete="off"
                                            type="text"
                                            placeholder={placeholder[0]}
                                        />
                                        <input
                                            className={`${
                                                darkMode && "Input-Dark"
                                            } Input max-w-[100px] transition  dark:hover:border-stone-700`}
                                            id="col-num"
                                            autoComplete="off"
                                            name="col-num"
                                            type="text"
                                            placeholder={placeholder[1]}
                                        />
                                        <Button
                                            type={"submit"}
                                            fitted
                                            icon={faRightToBracket}
                                            setIsOpen={setIsOpen}
                                            editorRef={editorRef}
                                            title={title}
                                        />
                                    </div>
                                </fieldset>
                            ) : symbol === "upload" ? (
                                <fieldset className="Fieldset ">
                                    <div className={`flex gap-1 `}>
                                        <input
                                            type="file"
                                            id="width"
                                            autoComplete="off"
                                            accept=".md"
                                            placeholder={placeholder}
                                            name="input-text"
                                            title=" "
                                            className={`
                                            ${
                                                darkMode
                                                    ? "text-zinc-400 bg-zinc-600 border-zinc-500 hover:border-zinc-400 file:bg-zinc-400 file:text-zinc-200 hover:file:bg-zinc-400"
                                                    : "file:hover:bg-neutral-200"
                                            }
                                            flex text-[12px] file:cursor-pointer h-[28px] file:h-[28px] file:text-[13px] hover:border-stone-300 items-center justify-center border-[1px] active:bg-stone-100 file:transition rounded-[0.4rem] transition
                                                        file:mr-2.5 file:py-1 file:px-3 file:outline-none  file:text-xs text-stone-600 file:h-[30px] file:border-[0px] file:rounded-none file:border-stone-100 file:text-stone-600
                                                        h-[30px] file:bg-stone-100 file:rounded-[0.4rem]  file:active:bg-stone-300 file:font-medium file:active:border-stone-400`}
                                        />
                                        <Button
                                            type={"submit"}
                                            setIsOpen={setIsOpen}
                                            editorRef={editorRef}
                                            fitted
                                            fetcher={fetcher}
                                            icon={faRightToBracket}
                                            title={title}
                                        />
                                    </div>
                                </fieldset>
                            ) : (
                                <fieldset className="Fieldset">
                                    <div className={`flex min-w-[300px] gap-1`}>
                                        <input
                                            autoComplete="off"
                                            className={`${
                                                darkMode && "Input-Dark"
                                            } Input transition  dark:hover:border-stone-700`}
                                            id="width"
                                            name="input-text"
                                            type="text"
                                            //   defaultValue={placeholder}
                                            placeholder={placeholder}
                                        />
                                        <Button
                                            type={"submit"}
                                            setIsOpen={setIsOpen}
                                            editorRef={editorRef}
                                            fitted
                                            fetcher={fetcher}
                                            icon={faRightToBracket}
                                            title={title}
                                        />
                                    </div>
                                </fieldset>
                            )}
                        </form>
                    </div>
                    <Popover.Close
                        className={`${
                            darkMode ? "PopoverClose-Dark" : "PopoverClose"
                        }  transition`}
                        aria-label="Close"
                    >
                        <Cross2Icon />
                    </Popover.Close>
                    <Popover.Arrow
                        className={`${
                            darkMode && "PopoverArrow-Dark"
                        } PopoverArrow`}
                    />
                </Popover.Content>
            </Popover.Portal>
        </Popover.Root>
    );
};

export const HamburgerAnimation = () => {
    const dispatch = useDispatch();
    const navBarExpanded = useSelector((state) => state.navBarExpanded);

    const handleToggle = () => {
        dispatch(setNavBarExpanded(navBarExpanded));
    };
    const line = `h-[3px] w-[15px] mb-0.5 rounded-[0.4rem] border-[1px] border-[black] bg-black dark:bg-[#CECFD0] dark:border-[#CECFD0] transition ease transform duration-300`;
    return (
        <button
            className="flex flex-col h-4 w-4 justify-center items-center group"
            onClick={handleToggle}
        >
            <div
                className={`${line} ${
                    navBarExpanded && "rotate-45 translate-y-[5px]"
                }`}
            />
            <div className={`${line} ${navBarExpanded && "opacity-0"}`} />
            <div
                className={`${line} ${
                    navBarExpanded && "-rotate-45 -translate-y-[5px] "
                }`}
            />
        </button>
    );
};

export const SettingsDialog = ({ icon, title }) => {
    const darkMode = useSelector((state) => state.darkMode);
    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <TriggerButton icon={icon} hovertitle={title} />
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="DialogOverlay" />
                <Dialog.Content
                    onOpenAutoFocus={(e) => e.preventDefault()}
                    className={`${
                        darkMode ? "DialogContent-Dark" : "DialogContent"
                    }`}
                >
                    <SettingsContainer darkMode={darkMode} />
                    <Dialog.Close asChild>
                        <button
                            className={`${
                                darkMode ? "PopoverClose-Dark" : "PopoverClose"
                            }  transition p-1`}
                            aria-label="Close"
                        >
                            <Cross2Icon />
                        </button>
                    </Dialog.Close>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
};

const HoverElement = ({ title }) => {
    return (
        <div className="fixed lg:ml-[95px] mb-6 rounded px-1 whitespace-nowrap cursor group-hover:block w-0 h-0 group-hover:w-12 group-hover:h-auto invisible group-hover:visible">
            <div className="lg:text-[12px] base:text-[0px] text-stone-300 dark:text-zinc-200 font-medium w-auto absolute lg:border-[1px] base:border-[0px] border-stone-600 lg:dark:bg-zinc-600 lg:bg-stone-700 lg:dark:bg-zinc-600 lg:px-2 lg:py-0.5 rounded-md text-white group-hover:opacity-100 opacity-0 transition delay-0 group-hover:delay-300">
                {title}
            </div>
        </div>
    );
};

const ButtonGroup = ({ elements, editorRef, data, noMargin }) => {
    return (
        <div className="lg:flex base:w-fit base:justify-end lg:justify-center">
            <div
                className={`flex ${
                    noMargin ? "mb-0" : "mb-2.5"
                } rounded-xl lg:w-[88%] base:w-full border-stone-200 dark:border-zinc-700 ${
                    !noMargin && "border-[1px]"
                } base:flex-row lg:flex-col justify-center items-center overflow-hidden`}
            >
                {Object.values(elements).map((element, index) => {
                    return element.type === "dropdown" ? (
                        <div key={"bgd" + index}>
                            <HorizontalDropdownMenu
                                handler={element.func}
                                editorRef={editorRef}
                                icon={element.icon}
                                title={element.title}
                            />
                        </div>
                    ) : element.type === "switch" ? (
                        <VerticalSwitch
                            key={"bgs" + index}
                            icon={element.icon}
                            header={element.symbol}
                            dispatcher={element.dispatcher}
                            title={element.title}
                        />
                    ) : element.type === "popover" ? (
                        <HorizontalPopover
                            key={"bgh" + index}
                            icon={element.icon}
                            description={element.description}
                            symbol={element.symbol}
                            placeholder={element.placeholder}
                            data={data ? data : ""}
                            handler={element.func}
                            fetcher={element.fetcher}
                            editorRef={editorRef}
                            title={element.title}
                        />
                    ) : element.type === "dialog" ? (
                        <SettingsDialog
                            key={"bgs" + index}
                            icon={element.icon}
                            title={element.title}
                        />
                    ) : (
                        <Button
                            editorRef={editorRef}
                            key={"bgb" + index}
                            icon={element.icon}
                            index={index}
                            data={data ? data : ""}
                            handler={element.func}
                            symbol={element.symbol}
                            title={element.title}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export const CustomComponents = {
    Button,
    ButtonGroup,
};
