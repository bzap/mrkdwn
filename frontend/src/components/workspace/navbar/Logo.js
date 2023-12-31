import Image from "next/image";
import * as Separator from "@radix-ui/react-separator";

// yeah
const Logo = () => {
    return (
        <div className="flex flex-col md:px-5 lg:px-0 md:mt-4 lg:mt-5 lg:justify-center lg:items-center">
            {/* <Image src="/logo.png" alt="me" width="48" height="48" /> */}
            <p className="font-black md:text-lg lg:text-xl">Md</p>
            <p className="md:font-semibold lg:font-black md:text-lg lg:text-xl -mt-6 ml-5">
                _
            </p>
        </div>
    );
};

export default Logo;
