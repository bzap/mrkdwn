import Logo from "./Logo";
import TextFeatureContainer from "./buttons/FeatureContainer";

const NavBar = ({ editorRef }) => {
    return (
        <div className="flex w-full flex-col border-stone-200 border-[1px] bg-white justify-between rounded-2xl items-center">
            <Logo />
            <TextFeatureContainer editorRef={editorRef} />
        </div>
    );
};

export default NavBar;
