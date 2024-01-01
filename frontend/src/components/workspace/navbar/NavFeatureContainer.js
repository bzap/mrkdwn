import { CustomComponents } from "@/components/interface/CustomComponents";
import { FileOperationGroup, VisibilityGroup } from "./buttons/ButtonGroups";
import { useSelector } from "react-redux";

const NavFeatureContainer = ({ editorRef }) => {
    const markdownText = useSelector((state) => state.markdownText);

    return (
        <div className="flex gap-2 h-full content-center lg:hidden">
            <CustomComponents.ButtonGroup
                elements={FileOperationGroup}
                editorRef={editorRef}
                data={markdownText}
                noMargin
            />
            <CustomComponents.ButtonGroup
                elements={VisibilityGroup}
                editorRef={editorRef}
                data={markdownText}
                noMargin
            />
        </div>
    );
};

export default NavFeatureContainer;
