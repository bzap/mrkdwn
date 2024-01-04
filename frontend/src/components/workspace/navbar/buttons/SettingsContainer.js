import { useDispatch, useSelector } from "react-redux";
import {
    setEditorFont,
    setEditorFontSize,
    setViewerFont,
    setViewerFontSize,
} from "@/lib/reducers/markdownSlice";
import { forwardRef } from "react";
import { Button } from "@/components/interface/CustomComponents";
import * as Select from "@radix-ui/react-select";
import {
    CheckIcon,
    ChevronDownIcon,
    ChevronUpIcon,
} from "@radix-ui/react-icons";
import classnames from "classnames";
import { editorFonts, viewerFonts } from "@/data/Fonts";
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

const FontSize = ({ fontSize, dispatcher }) => {
    const currentFontSize = useSelector((state) => state[fontSize]);
    return (
        <div className="flex w-full justify-between">
            <div className="font-medium flex gap-2.5 text-sm">Font size:</div>
            <div className="flex items-center gap-1">
                <Button
                    type="dispatch"
                    fitted
                    height={"20"}
                    dispatcher={dispatcher}
                    data={"-"}
                    text={"-"}
                />
                <div className="text-stone-600 border-[1px] rounded-md px-2 text-sm w-12 text-center font-medium">
                    {currentFontSize}px
                </div>
                <Button
                    type="dispatch"
                    fitted
                    height={"20"}
                    dispatcher={dispatcher}
                    data={"+"}
                    text={"+"}
                />
            </div>
        </div>
    );
};

const FontStyle = ({ dispatch, fontList, dispatcher, fontStyle }) => {
    const handleChange = (value) => {
        dispatch(dispatcher(value));
    };
    const currentFontStyle = useSelector((state) => state[fontStyle]);
    console.log(currentFontStyle);
    return (
        <div className="flex w-full justify-between">
            <div className="font-medium flex gap-2.5 text-sm">Font style:</div>
            <div className="flex items-center gap-1">
                <Select.Root
                    defaultValue={currentFontStyle}
                    onValueChange={(value) => handleChange(value)}
                >
                    <Select.Trigger className="SelectTrigger transition">
                        <Select.Value placeholder="Select a font…" />
                        <Select.Icon className="SelectIcon">
                            <FontAwesomeIcon icon={faChevronDown} size="sm" />
                        </Select.Icon>
                    </Select.Trigger>
                    <Select.Portal>
                        <Select.Content className="SelectContent">
                            <Select.Viewport className="SelectViewport">
                                <Select.Group>
                                    {Object.values(fontList).map(
                                        (value, index) => {
                                            return (
                                                <SelectItem
                                                    key={"select" + index}
                                                    className={"transition"}
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
    );
};

const SettingsContainer = ({ darkMode }) => {
    const dispatch = useDispatch();
    return (
        <div className="flex gap-3 flex-col select-none">
            <div className="flex flex-col gap-3">
                <div
                    className={`pb-1 font-bold text-md border-b-[1px] border-stone-200 ${
                        darkMode && "text-[#CECFD0] border-zinc-600"
                    }`}
                >
                    Editor
                </div>
                <FontSize
                    dispatcher={setEditorFontSize}
                    fontSize={"editorFontSize"}
                    dispatch={dispatch}
                />
                <FontStyle
                    dispatcher={setEditorFont}
                    fontList={editorFonts}
                    dispatch={dispatch}
                    fontStyle={"editorFont"}
                />
                <div
                    className={`pb-1 font-bold text-md border-b-[1px] border-stone-200 ${
                        darkMode && "text-[#CECFD0] border-zinc-600"
                    }`}
                >
                    Viewer
                </div>
                <FontSize
                    dispatcher={setViewerFontSize}
                    fontSize={"editorFontSize"}
                    dispatch={dispatch}
                />
                <FontStyle
                    dispatcher={setViewerFont}
                    fontList={viewerFonts}
                    dispatch={dispatch}
                    fontStyle={"viewerFont"}
                />
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

export default SettingsContainer;
