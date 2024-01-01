import Logo from "./Logo";
import FeatureContainer from "./buttons/FeatureContainer";
import Drawer from "./Drawer";
import { useSelector } from "react-redux";
import NavFeatureContainer from "./NavFeatureContainer";

const NavBar = ({ editorRef }) => {
    const navBarExpanded = useSelector((state) => state.navBarExpanded);

    // h-12 to 380px
    // ${navBarExpanded && "max-h-[300px]"}`}
    return (
        <div
            className={`hide-scrollbar base:absolute lg:relative lg:flex z-1 w-full lg:flex-col border-stone-200 border-[1px] bg-white rounded-xl transition-all overflow-scroll
            `}
        >
            <div className="flex w-full base:justify-between lg:justify-center base:px-5 items-center base:min-h-10 lg:min-h-container  select-none">
                <Logo />
                <div className="flex flex-row items-center gap-6 h-full ">
                    <NavFeatureContainer editorRef={editorRef} />
                    <Drawer />
                </div>
            </div>
            <div
                className={`feature-wrapper lg:h-full base:px-5 lg:justify-center lg:flex lg:px-0 ${
                    navBarExpanded &&
                    "feature-wrapper-open rounded-xl shadow-sm"
                }`}
            >
                <div
                    className={`base:overflow-hidden lg:overflow-visible lg:flex lg-min-h-full lg:h-full`}
                >
                    <div className="bg-stone-100 h-[1px] w-full flex mb-3 justify-center px-5 lg:hidden" />

                    <FeatureContainer editorRef={editorRef} />
                </div>
            </div>
        </div>
    );
};

export default NavBar;
