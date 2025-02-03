"use client"
import { FaCircle, FaDownload, FaEnvelope } from "react-icons/fa6";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { Spotlight } from "./ui/spotlight-new";
import { motion } from "framer-motion";
import { FlipWords } from "./ui/flip-words";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Hero(){
    return <section className="flex relative items-center justify-center rounded-md bg-background/[0.96] py-16 md:py-48 overflow-hidden">
        <Spotlight 
            className="z-10 -top-20 left-0 md:left-60 md:-top-20"
        />
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", duration:1.5 }}
            className="flex flex-col items-center gap-4 sm:mt-[-70px]"
        >
            <HoverBorderGradient  className="flex items-center gap-2 text-sm">
                <FaCircle className="size-2 animate-pulse fill-green-500 text-green-500"/>
                Available for work
            </HoverBorderGradient>

            <div className="text-3xl sm:text-5xl md:text-6xl font-bold">
                Hi, I'm Samarth 👋
            </div>
            <FlipWords 
                    words={["Full Stack Developer", "Software Developer"]}
                    className="text-[#C0C0C0] text-3xl sm:text-5xl md:text-6xl font-bold"
            />
            <p className="text-gray-400 text-center text-xl sm:text-sm">
                Focusing on creating robust and dynamic full stack web applications,
                <br />
                that improve lead generation and enhance user experience.
            </p>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ease: "easeOut", duration:1 }}
                className="flex flex-col sm:flex-row sm:gap-5 gap-2 items-center"
            >
                <Button asChild>
                    <Link 
                        href={"https://drive.google.com/file/d/13gxdtzg75Vr5GUKbeee10uCmlxe2EZGl/view?usp=sharing"}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaDownload className="mr-2"/>
                        My Resume
                    </Link>
                </Button>
                <Button asChild>
                    <Link 
                        href={"https://www.linkedin.com/in/samarthrajput/"}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaEnvelope className="mr-2 text-xl"/>
                        Contact Me
                    </Link>
                </Button>
            </motion.div>
        </motion.div>
    </section>
}