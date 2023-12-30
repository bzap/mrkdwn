import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useState, forwardRef, useEffect } from "react";
import {
    HamburgerMenuIcon,
    DotFilledIcon,
    CheckIcon,
    ChevronRightIcon,
} from "@radix-ui/react-icons";
import * as Popover from "@radix-ui/react-popover";
import { MixerHorizontalIcon, Cross2Icon } from "@radix-ui/react-icons";
import { Icons } from "./Icons";
import { useDispatch, useSelector } from "react-redux";
import * as Switch from "@radix-ui/react-switch";
import { setIsFetching, setSaveState } from "@/lib/reducers/markdownSlice";

const Button = ({
    icon,
    index,
    text,
    fitted,
    handler,
    editorRef,
    data,
    symbol,
    fetcher,
    type = "button",
}) => {
    // console.log(icon);
    const dispatch = useDispatch();
    const isFetching = useSelector((state) => state.isFetching);

    useEffect(() => {
        console.log(fetcher, isFetching);
    });
    return (
        <button
            type={"type"}
            onClick={(e) =>
                handler && handler(editorRef, symbol, data, e, dispatch)
            }
            className={`text-black select-none outline-none items-center transition justify-center
            ${
                fitted
                    ? "h-[28px] rounded-md border-stone-200 border-[1px] bg-stone-100 rounded-[0.4rem] hover:bg-stone-200 active:bg-stone-300`"
                    : "h-max w-full hover:bg-stone-100 active:bg-stone-300"
            } flex p-3`}
        >
            <div className={`${isFetching && fetcher && "animate-spin"} `}>
                {isFetching && fetcher ? Icons.Spinner() : icon && icon()}
            </div>

            {text && (
                <p
                    className={
                        "flex w-full justify-center text-[13px] font-medium"
                    }
                >
                    {text}
                </p>
            )}
        </button>
    );
};

const TriggerButton = forwardRef((props, forwardedRef) => {
    return (
        <button
            {...props}
            ref={forwardedRef}
            className={`text-black select-none outline-none items-center transition justify-center w-full h-max flex p-3 hover:bg-stone-100 active:bg-stone-200`}
        >
            {props.icon && props.icon.icon()}
        </button>
    );
});

const HorizontalDropdownMenu = ({ icon, handler, editorRef }) => {
    const onSelect = (e) => {
        handler(editorRef, e.target.getAttribute("value"));
    };
    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
                <TriggerButton icon={{ icon }} />
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
                <DropdownMenu.Content
                    className="DropdownMenuContent shadow-lg"
                    sideOffset={25}
                    side="right"
                >
                    <DropdownMenu.Item
                        onSelect={onSelect}
                        className="DropdownMenuItem transition"
                        value={"- "}
                    >
                        Unordered List <div className="RightSlot">- - -</div>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item
                        onSelect={onSelect}
                        value={"1. "}
                        className="DropdownMenuItem transition"
                    >
                        Ordered List <div className="RightSlot">1. 2. 3.</div>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item
                        onSelect={onSelect}
                        value={"- [ ] "}
                        className="DropdownMenuItem transition"
                    >
                        Task List
                        <div className="RightSlot">{"- [ ] - [x]"}</div>
                    </DropdownMenu.Item>
                    <DropdownMenu.Arrow className="DropdownMenuArrow" />
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    );
};

const VerticalSwitch = ({ header, icon, dispatcher }) => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state[header]);

    //  console.log(state, "toggle state <===");

    const handleToggle = (value) => {
        // console.log("in hjandle toggle?");
        if (value !== state) {
            // console.log("disaptched in handle");
            dispatch(dispatcher());
        }

        //  console.log(val, state);
    };

    // useEffect(() => {
    //     console.log(state);
    // }, [state]);

    return (
        <label
            htmlFor={"switch-toggle" + header}
            className={`flex justify-center py-2.5 w-full transition cursor-pointer hover:bg-stone-100 active:bg-stone-200 h-full`}
        >
            <div className="flex flex-col text-[10px] font-bold">
                <form>
                    <div
                        className="flex-col my-1"
                        style={{ display: "flex", alignItems: "center" }}
                    >
                        <div className="mb-1">{icon && icon()}</div>

                        <Switch.Root
                            defaultChecked={state}
                            onCheckedChange={handleToggle}
                            className="SwitchRoot transition "
                            id={"switch-toggle" + header}
                        ></Switch.Root>
                    </div>
                </form>
            </div>
        </label>
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
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();
    return (
        <Popover.Root open={isOpen} onOpenChange={setIsOpen}>
            <Popover.Trigger asChild>
                <TriggerButton icon={{ icon }} />
            </Popover.Trigger>
            <Popover.Portal>
                <Popover.Content
                    side="right"
                    sideOffset={25}
                    className="PopoverContent shadow-lg"
                >
                    <div className="flex flex-col px-[5px] py-[9px]">
                        <p className="Text" style={{ marginBottom: 1 }}>
                            {description}
                        </p>
                        <form
                            id="popover-form"
                            name="popover-form"
                            onSubmit={(e) =>
                                handler(
                                    editorRef,
                                    symbol,
                                    setIsOpen,
                                    e,
                                    data,
                                    dispatch,
                                    setIsFetching
                                )
                            }
                        >
                            {symbol === "table" ? (
                                <fieldset className="Fieldset">
                                    <div className={"flex gap-1"}>
                                        <input
                                            className="Input max-w-[100px] transition"
                                            id="row-num"
                                            name="row-num"
                                            type="text"
                                            placeholder={placeholder[0]}
                                        />
                                        <input
                                            className="Input max-w-[100px] transition"
                                            id="col-num"
                                            name="col-num"
                                            type="text"
                                            placeholder={placeholder[1]}
                                        />
                                        <Button
                                            type={"submit"}
                                            fitted
                                            icon={Icons.EnterIcon}
                                            setIsOpen={setIsOpen}
                                            editorRef={editorRef}
                                        />
                                    </div>
                                </fieldset>
                            ) : symbol === "upload" ? (
                                <fieldset className="Fieldset">
                                    <div
                                        className={`flex ${
                                            symbol === "footnote" ||
                                            symbol === "download"
                                                ? "min-w-[100px]"
                                                : "min-w-[300px]"
                                        } gap-1`}
                                    >
                                        <input
                                            type="file"
                                            id="width"
                                            placeholder={placeholder}
                                            name="input-text"
                                            className=" flex text-[13px] items-center justify-center text-gray-400 border-[1px] active:bg-stone-100 file:transition rounded-[0.4rem] hover:bg-stone-50 transition
                                                        file:mr-5 file:py-1 file:px-2 file:outline-none  file:text-xs file:h-[28px] file:border-[0px] file:rounded-none file:border-stone-100 file:text-stone-600
                                                        h-[28px] file:bg-stone-100 file:rounded-[0.4rem] file:hover:bg-stone-200 file:active:bg-stone-300 file:font-medium"
                                        />
                                        <Button
                                            type={"submit"}
                                            setIsOpen={setIsOpen}
                                            editorRef={editorRef}
                                            fitted
                                            fetcher={fetcher}
                                            icon={Icons.EnterIcon}
                                        />
                                    </div>
                                </fieldset>
                            ) : (
                                <fieldset className="Fieldset">
                                    <div
                                        className={`flex ${
                                            symbol === "footnote" ||
                                            symbol === "download"
                                                ? "min-w-[100px]"
                                                : "min-w-[300px]"
                                        } gap-1`}
                                    >
                                        <input
                                            className="Input transition"
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
                                            icon={Icons.EnterIcon}
                                        />
                                    </div>
                                </fieldset>
                            )}
                        </form>
                    </div>
                    <Popover.Close
                        className="PopoverClose transition"
                        aria-label="Close"
                    >
                        <Cross2Icon />
                    </Popover.Close>
                    <Popover.Arrow className="PopoverArrow" />
                </Popover.Content>
            </Popover.Portal>
        </Popover.Root>
    );
};

const ButtonGroup = ({ elements, editorRef, data }) => {
    return (
        <div
            className={`flex mb-2.5 rounded-xl border-stone-200 border-[1px] flex-col overflow-hidden`}
        >
            {Object.values(elements).map((element, index) => {
                return element.type === "dropdown" ? (
                    <div key={"bgd" + index}>
                        <HorizontalDropdownMenu
                            handler={element.func}
                            editorRef={editorRef}
                            icon={element.icon}
                        />
                    </div>
                ) : element.type === "switch" ? (
                    <VerticalSwitch
                        key={"bgs" + index}
                        icon={element.icon}
                        header={element.symbol}
                        dispatcher={element.dispatcher}
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
                    />
                );
            })}
        </div>
    );
};

export const CustomComponents = {
    Button,
    ButtonGroup,
};
