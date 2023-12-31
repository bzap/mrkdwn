import Logo from "./Logo";
import FeatureContainer from "./buttons/FeatureContainer";
import { useState } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Drawer = ({ editorRef }) => {
    const [isOpen, setIsOpen] = useState(false); // this state will be global soon
    return (
        <div className="flex flex-col md:px-5 lg:px-0 md:mt-4 lg:mt-5 lg:justify-center lg:items-center lg:hidden">
            <FontAwesomeIcon className="pt-1" icon={faBars} size="md" />
        </div>
    );
};

export default Drawer;
