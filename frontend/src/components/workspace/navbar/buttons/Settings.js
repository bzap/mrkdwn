import { useDispatch, useSelector } from "react-redux";
import { setEditorFont, setEditorFontSize } from "@/lib/reducers/markdownSlice";
import { forwardRef } from "react";
import { Button } from "@/components/interface/CustomComponents";
import * as Select from "@radix-ui/react-select";
import {
    CheckIcon,
    ChevronDownIcon,
    ChevronUpIcon,
} from "@radix-ui/react-icons";
import classnames from "classnames";
import { availableFonts } from "@/data/Fonts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faCheck } from "@fortawesome/free-solid-svg-icons";

const SelectItem = forwardRef(
    ({ children, className, ...props }, forwardedRef) => {
        return (
            <Select.Item
                className={classnames("SelectItem", className)}
                {...props}
                ref={forwardedRef}
            >
                <Select.ItemText>{children}</Select.ItemText>
                <Select.ItemIndicator className="SelectItemIndicator">
                    <FontAwesomeIcon icon={faCheck} size="sm" />
                </Select.ItemIndicator>
            </Select.Item>
        );
    }
);

const Settings = ({ darkMode }) => {
    const dispatch = useDispatch();
    const editorFontSize = useSelector((state) => state.editorFontSize);
    const editorFont = useSelector((state) => state.editorFont);
    return (
        <div className="flex gap-3 flex-col">
            <div className="flex flex-col gap-3">
                <div
                    className={`pb-1 font-bold text-md border-b-[1px] border-stone-200 ${
                        darkMode && "text-[#CECFD0] border-zinc-600"
                    }`}
                >
                    Editor
                </div>
                <div className="flex w-full justify-between">
                    <div className="font-medium flex gap-2.5 text-sm">
                        Font size:
                    </div>
                    <div className="flex items-center gap-1">
                        <Button
                            type="dispatch"
                            fitted
                            height={"20"}
                            dispatcher={setEditorFontSize}
                            data={"-"}
                            text={"-"}
                        />
                        <div className="text-stone-600 border-[1px] rounded-md px-2 text-sm w-12 text-center font-medium">
                            {editorFontSize}px
                        </div>
                        <Button
                            type="dispatch"
                            fitted
                            height={"20"}
                            dispatcher={setEditorFontSize}
                            data={"+"}
                            text={"+"}
                        />
                    </div>
                </div>
                <div className="flex w-full justify-between">
                    <div className="font-medium flex gap-2.5 text-sm">
                        Font style:
                    </div>
                    <div className="flex items-center gap-1">
                        <Select.Root>
                            <Select.Trigger className="SelectTrigger transition">
                                <Select.Value placeholder="Select a font…" />
                                <Select.Icon className="SelectIcon">
                                    <FontAwesomeIcon
                                        icon={faChevronDown}
                                        size="sm"
                                    />
                                </Select.Icon>
                            </Select.Trigger>
                            <Select.Portal>
                                <Select.Content className="SelectContent">
                                    <Select.Viewport className="SelectViewport">
                                        <Select.Group>
                                            {Object.values(availableFonts).map(
                                                (value, index) => {
                                                    return (
                                                        <SelectItem
                                                            key={
                                                                "select" + index
                                                            }
                                                            className={
                                                                "transition"
                                                            }
                                                            value={value.var}
                                                        >
                                                            {value.name}
                                                        </SelectItem>
                                                    );
                                                }
                                            )}
                                        </Select.Group>
                                    </Select.Viewport>
                                </Select.Content>
                            </Select.Portal>
                        </Select.Root>
                    </div>
                </div>
                {/* <button
                    onClick={() =>
                        dispatch(setEditorFont("var(--font-fira-mono)"))
                    }
                >
                    fira
                </button>
                <button
                    onClick={() =>
                        dispatch(setEditorFont("var(--font-roboto-mono)"))
                    }
                >
                    roboto
                </button> */}

                {/* <fieldset className="Fieldset pt-2">
                <div className="text-sm">Font</div>
                <input
                    className={`${
                        darkMode && "Input-Dark"
                    } Input transition  dark:hover:border-stone-700`}
                    id="name"
                    disabled
                    defaultValue="Placeholder"
                />
            </fieldset>
            <fieldset className="Fieldset">
                <div className="text-sm">Size</div>
                <input
                    className={`${
                        darkMode && "Input-Dark"
                    } Input transition  dark:hover:border-stone-700`}
                    id="name"
                    disabled
                    defaultValue="Placeholder"
                />
            </fieldset> */}
            </div>
            <div className="flex flex-col gap-2">
                <div
                    className={`pb-1 font-bold text-md border-b-[1px] border-stone-200 ${
                        darkMode && "text-[#CECFD0] border-zinc-600"
                    }`}
                >
                    Viewer
                </div>
                {/* <fieldset className="Fieldset pt-2">
                <div className="text-sm">Font</div>
                <input
                    className={`${
                        darkMode && "Input-Dark"
                    } Input transition  dark:hover:border-stone-700`}
                    id="name"
                    disabled
                    defaultValue="Placeholder"
                />
            </fieldset>
            <fieldset className="Fieldset">
                <div className="text-sm">Size</div>
                <input
                    className={`${
                        darkMode && "Input-Dark"
                    } Input transition  dark:hover:border-stone-700`}
                    id="name"
                    disabled
                    defaultValue="Placeholder"
                />
            </fieldset> */}
            </div>
            <div>
                <div
                    className={`mt-5 ${
                        darkMode ? "bg-zinc-600" : "bg-stone-200 "
                    } h-[1px] w-full flex mb-3 justify-center px-5`}
                />
                <div
                    className={` ${
                        darkMode && "text-zinc-600"
                    } text-sm flex justify-center text-stone-300`}
                >
                    Designed and developed by
                    <a
                        target="_blank"
                        className={`hover:text-stone-400 text-stone-300 ${
                            darkMode && "text-zinc-600"
                        } transition`}
                        href="https://github.com/bzap"
                    >
                        &nbsp;@bzap
                    </a>
                    .
                </div>
                <div
                    className={`text-sm text-stone-300 ${
                        darkMode && "text-zinc-600"
                    } flex justify-center`}
                >
                    V1.0.0
                </div>
            </div>
        </div>
    );
};

export default Settings;
