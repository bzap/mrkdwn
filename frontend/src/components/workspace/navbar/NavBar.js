import Logo from "./Logo";
import FeatureContainer from "./buttons/FeatureContainer";
import Drawer from "./Drawer";
import { useSelector } from "react-redux";

const NavBar = ({ editorRef }) => {
    const navBarExpanded = useSelector((state) => state.navBarExpanded);

    // h-12 to 380px
    // ${navBarExpanded && "max-h-[300px]"}`}
    return (
        <div
            className={`flex w-full flex-col border-stone-200 border-[1px] bg-white rounded-2xl transition-all
            `}
        >
            <div className="flex w-full md:justify-between lg:justify-center md:px-5 items-center md:min-h-10 lg:min-h-0 select-none">
                <Drawer />
                <Logo />
            </div>
            <div
                className={`feature-wrapper lg:h-full md:px-5 lg:justify-center lg:px-0 ${
                    navBarExpanded && "feature-wrapper-open"
                }`}
            >
                <div
                    className={`md:overflow-hidden lg:overflow-visible lg:flex lg:h-full lg:justify-between `}
                >
                    <div className="bg-stone-100 h-[1px] w-full flex mb-4 justify-center px-5 lg:hidden" />

                    <FeatureContainer editorRef={editorRef} />
                </div>
            </div>
        </div>
    );
};

export default NavBar;
