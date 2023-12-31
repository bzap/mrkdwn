import Logo from "./Logo";
import FeatureContainer from "./buttons/FeatureContainer";
import Drawer from "./Drawer";

const NavBar = ({ editorRef }) => {
    return (
        <div className="flex w-full flex-col border-stone-200 border-[1px] bg-white rounded-2xl ">
            <div className="flex w-full md:justify-between lg:justify-center">
                <Drawer />
                <Logo />
            </div>
            <div className="flex justify-center px-5 py-2">
                <div className="bg-stone-200 h-[1px] w-full flex justify-center px-5" />
            </div>

            <FeatureContainer editorRef={editorRef} />
        </div>
    );
};

export default NavBar;
