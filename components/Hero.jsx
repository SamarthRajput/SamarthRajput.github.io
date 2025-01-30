import { FaCircle } from "react-icons/fa6";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

export default function Hero(){
    return <div className="flex relative items-center justify-center rounded-md bg-background/[0.96] py-16 md:py-18">
        <HoverBorderGradient  className="flex items-center gap-2 text-sm">
            <FaCircle className="size-2 animate-pulse fill-green-500 text-green-500"/>
            Available for work
        </HoverBorderGradient>
    </div>
}