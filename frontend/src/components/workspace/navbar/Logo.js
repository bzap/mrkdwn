import Image from "next/image";
import * as Separator from "@radix-ui/react-separator";

// yeah
const Logo = () => {
    return (
        <div className="flex flex-col lg:px-0 md:mt-0 lg:mt-5 lg:justify-center lg:items-center">
            {/* <Image src="/logo.png" alt="me" width="48" height="48" /> */}
            <p className="font-black md:text-md lg:text-xl">Md</p>
            <p className="md:font-semibold lg:font-black md:text-md lg:text-xl lg:-mt-6 md:-mt-[22px] md:ml-[17px] lg:ml-5">
                _
            </p>
        </div>
    );
};

export default Logo;
