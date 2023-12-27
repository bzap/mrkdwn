import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useState, forwardRef } from "react";
import {
    HamburgerMenuIcon,
    DotFilledIcon,
    CheckIcon,
    ChevronRightIcon,
} from "@radix-ui/react-icons";
import * as Popover from "@radix-ui/react-popover";
import { MixerHorizontalIcon, Cross2Icon } from "@radix-ui/react-icons";
import { Icons } from "./Icons";

const Button = ({
    Icon,
    index,
    text,
    fitted,
    handler,
    editorRef,
    data,
    symbol,
    type = "button",
}) => {
    return (
        <button
            type={"type"}
            onClick={(e) => handler && handler(editorRef, symbol, data)}
            className={`text-black select-none outline-none items-center transition justify-center
            ${
                fitted
                    ? "h-[25px] rounded-md border-stone-200 border-[1px] bg-stone-100 rounded-[0.4rem] hover:bg-stone-200 active:bg-stone-300`"
                    : "h-max  w-full hover:bg-stone-100 active:bg-stone-300"
            } flex p-3`}
        >
            {Icon && <Icon className={"stroke-2"} />}
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

const TriggerButton = forwardRef((props, forwardedRef, isOpen) => {
    return (
        <button
            {...props}
            ref={forwardedRef}
            type="button"
            className={`${
                isOpen && "bg-blue-400"
            } text-black select-none outline-none items-center transition justify-center w-full h-max flex p-3 hover:bg-stone-100 active:bg-stone-200`}
        >
            <props.Icon className={"stroke-2"} />
        </button>
    );
});

const HorizontalDropdownMenu = ({ Icon, handler, editorRef }) => {
    const onSelect = (e) => {
        //console.log(e.target.getAttribute("value"));
        handler(editorRef, e.target.getAttribute("value"));
        // use the handler here
    };
    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
                <TriggerButton Icon={Icon} aria-label="Customise options" />
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

const HorizontalPopover = ({
    Icon,
    description,
    placeholder,
    symbol,
    editorRef,
    handler,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Popover.Root open={isOpen} onOpenChange={setIsOpen}>
            <Popover.Trigger asChild>
                <TriggerButton Icon={Icon} aria-label="Customise options" />
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
                        {console.log(symbol === "table")}
                        <form
                            id="popover-form"
                            name="popover-form"
                            onSubmit={(e) =>
                                handler(editorRef, symbol, setIsOpen, e)
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
                                            Icon={Icons.EnterIcon}
                                            setIsOpen={setIsOpen}
                                            editorRef={editorRef}
                                        />
                                    </div>
                                </fieldset>
                            ) : (
                                <fieldset className="Fieldset">
                                    <div
                                        className={`flex ${
                                            symbol === "footnote"
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
                                            Icon={Icons.EnterIcon}
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
                    <div key={"bg" + index}>
                        <HorizontalDropdownMenu
                            handler={element.func}
                            editorRef={editorRef}
                            Icon={element.icon}
                        />
                    </div>
                ) : element.type === "popover" ? (
                    <HorizontalPopover
                        key={"bg" + index}
                        Icon={element.icon}
                        description={element.description}
                        symbol={element.symbol}
                        placeholder={element.placeholder}
                        handler={element.func}
                        editorRef={editorRef}
                    />
                ) : (
                    <Button
                        editorRef={editorRef}
                        key={"bg" + index}
                        Icon={element.icon}
                        index={index}
                        data={data && data}
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
