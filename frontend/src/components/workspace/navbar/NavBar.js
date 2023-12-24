import Logo from "./Logo";
import TextFeatureContainer from "./text/TextFeatureContainer";

const NavBar = ({ editorRef }) => {
    return (
        <div className="flex w-full flex-col justify-between bg-white rounded-2xl bg-white px-1 items-center">
            <Logo />
            <TextFeatureContainer editorRef={editorRef} />
        </div>
    );
};

export default NavBar;
