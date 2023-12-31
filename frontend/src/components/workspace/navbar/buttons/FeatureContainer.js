import { CustomComponents } from "@/app/interface/CustomComponents";
import { InsertionFeatureGroup } from "@/components/workspace/navbar/buttons/ButtonGroups";
import { TextStyleGroup } from "@/components/workspace/navbar/buttons/ButtonGroups";
import { FileOperationGroup } from "@/components/workspace/navbar/buttons/ButtonGroups";
import { CustomizationGroup } from "@/components/workspace/navbar/buttons/ButtonGroups";
import { InfoGroup } from "@/components/workspace/navbar/buttons/ButtonGroups";
import { useSelector } from "react-redux";

const FeatureContainer = ({ editorRef }) => {
    const markdownText = useSelector((state) => state.markdownText);

    return (
        <div className="flex-col flex md:mt-4 lg:mt-8 md:justify-end lg:justify-between w-full md:pb-4 lg:pb-0 md:px-5 lg:px-2.5 lg:h-full">
            <div className="md:w-fit lg:w-full">
                <CustomComponents.ButtonGroup
                    elements={FileOperationGroup}
                    editorRef={editorRef}
                    data={markdownText}
                />
            </div>
            <div className="md:w-fit lg:w-full">
                <CustomComponents.ButtonGroup
                    elements={TextStyleGroup}
                    editorRef={editorRef}
                />
                <CustomComponents.ButtonGroup
                    elements={InsertionFeatureGroup}
                    editorRef={editorRef}
                />
            </div>
            <div className="md:w-fit lg:w-full">
                <CustomComponents.ButtonGroup
                    elements={CustomizationGroup}
                    editorRef={editorRef}
                />
                <div className="md:w-fit lg:w-full">
                    <CustomComponents.ButtonGroup
                        elements={InfoGroup}
                        editorRef={editorRef}
                    />
                </div>
            </div>
        </div>
    );
};

export default FeatureContainer;
