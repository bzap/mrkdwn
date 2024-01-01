import Logo from "./Logo";
import FeatureContainer from "./buttons/FeatureContainer";
import { useState } from "react";
// import { faBars } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { setNavBarExpanded } from "@/lib/reducers/markdownSlice";
import { HamburgerAnimation } from "../../interface/CustomComponents";

const Drawer = ({ editorRef }) => {
    const navBarExpanded = useSelector((state) => state.navBarExpanded);
    const dispatch = useDispatch();

    const handleToggle = () => {
        dispatch(setNavBarExpanded(navBarExpanded));
    };
    return (
        <div className="flex flex-col lg:px-0 base:mt-0 lg:mt-5 lg:justify-center lg:items-center lg:hidden">
            <HamburgerAnimation />
            {/* <FontAwesomeIcon
                onClick={handleToggle}
                className="cursor-pointer"
                icon={faBars}
                size="sm"
            /> */}
        </div>
    );
};

export default Drawer;
