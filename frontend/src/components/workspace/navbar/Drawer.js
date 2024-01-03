import { HamburgerAnimation } from "../../interface/CustomComponents";

const Drawer = () => {
    return (
        <div className="flex flex-col lg:px-0 base:mt-0 lg:mt-5 lg:justify-center lg:items-center lg:hidden">
            <HamburgerAnimation />
        </div>
    );
};

export default Drawer;
