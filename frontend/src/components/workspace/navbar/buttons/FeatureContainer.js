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
        <div className="flex-col flex lg:mt-0 lg:pt-4 md:justify-end lg:justify-between lg:pb-0 lg:h-auto">
            <div className="md:hidden lg:block">
                <CustomComponents.ButtonGroup
                    elements={FileOperationGroup}
                    editorRef={editorRef}
                    data={markdownText}
                />
            </div>

            <div>
                <CustomComponents.ButtonGroup
                    elements={TextStyleGroup}
                    editorRef={editorRef}
                />
                <CustomComponents.ButtonGroup
                    elements={InsertionFeatureGroup}
                    editorRef={editorRef}
                />
            </div>
            <div>
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
