import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useState, forwardRef } from "react";
import {
    HamburgerMenuIcon,
    DotFilledIcon,
    CheckIcon,
    ChevronRightIcon,
} from "@radix-ui/react-icons";

const Button = ({ Icon, index }) => {
    return (
        <button
            type="button"
            class={`text-black select-none outline-none items-center transition justify-center w-full h-max flex p-3 hover:bg-gray-100 active:bg-gray-200`}
        >
            <Icon className={"stroke-2"} />
        </button>
    );
};

const TriggerButton = forwardRef((props, forwardedRef) => {
    return (
        <button
            {...props}
            ref={forwardedRef}
            type="button"
            class={`text-black select-none outline-none items-center transition justify-center w-full h-max flex p-3 hover:bg-gray-100 active:bg-gray-200`}
        >
            <props.Icon className={"stroke-2"} />
        </button>
    );
});

const HorizontalDropdownMenu = ({ Icon }) => {
    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
                <TriggerButton Icon={Icon} aria-label="Customise options" />

                {/* <button className="IconButton" aria-label="Customise options">
                    <HamburgerMenuIcon />
                </button> */}
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
                <DropdownMenu.Content
                    className="DropdownMenuContent"
                    sideOffset={25}
                    side="right"
                >
                    <DropdownMenu.Item className="DropdownMenuItem">
                        Unordered List <div className="RightSlot">⌘+T</div>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item className="DropdownMenuItem">
                        Ordered List <div className="RightSlot">⌘+N</div>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item className="DropdownMenuItem">
                        Numbered List
                        <div className="RightSlot">⇧+⌘+N</div>
                    </DropdownMenu.Item>
                    <DropdownMenu.Arrow className="DropdownMenuArrow" />
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    );
};

const ButtonGroup = ({ elements }) => {
    return (
        <div
            className={`flex mb-4 rounded-xl border-gray-200 border-[1px] flex-col overflow-hidden`}
        >
            {Object.values(elements).map((element, index) => {
                return element[1] ? (
                    <div>
                        <HorizontalDropdownMenu Icon={element[0]} />
                    </div>
                ) : (
                    <Button Icon={element[0]} index={index} length={length} />
                );
            })}
        </div>
    );
};

export const CustomComponents = {
    Button,
    ButtonGroup,
};
