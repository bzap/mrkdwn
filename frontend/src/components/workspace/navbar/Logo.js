import Image from "next/image";
import * as Separator from "@radix-ui/react-separator";

// yeah
const Logo = () => {
    return (
        <div className="flex flex-col w-full mt-5 justify-center items-center">
            {/* <Image src="/logo.png" alt="me" width="48" height="48" /> */}
            <p className="font-black text-xl">Md</p>
            <p className="font-black text-xl -mt-6 ml-5">_</p>
        </div>
    );
};

export default Logo;
