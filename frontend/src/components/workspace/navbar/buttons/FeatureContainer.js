import { CustomComponents } from "@/components/interface/CustomComponents";
import {
    InsertionFeatureGroup,
    TextStyleGroup,
    FileOperationGroup,
    CustomizationGroup,
    InfoGroup,
} from "./ButtonGroups";
import { useSelector } from "react-redux";

const FeatureContainer = ({ editorRef }) => {
    const markdownText = useSelector((state) => state.markdownText);

    return (
        <div className="flex-col flex lg:mt-0 lg:pt-4 base:justify-end lg:justify-between lg:pb-0 lg:h-auto">
            <div className="base:hidden lg:block">
                <CustomComponents.ButtonGroup
                    elements={FileOperationGroup}
                    editorRef={editorRef}
                    data={markdownText}
                />
            </div>
            <div className="base:flex base:flex-col base:justify-end base:items-end">
                <CustomComponents.ButtonGroup
                    elements={TextStyleGroup}
                    editorRef={editorRef}
                />
                <CustomComponents.ButtonGroup
                    elements={InsertionFeatureGroup}
                    editorRef={editorRef}
                />
            </div>
            <div className="base:flex lg:block base:justify-end lg:justify-center base:gap-2.5 lg:gap-0">
                <CustomComponents.ButtonGroup
                    elements={CustomizationGroup}
                    editorRef={editorRef}
                />
                <CustomComponents.ButtonGroup
                    elements={InfoGroup}
                    editorRef={editorRef}
                />
            </div>
        </div>
    );
};

export default FeatureContainer;
