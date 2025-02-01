"use client"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer";
import { LinkPreview } from "../ui/link-preview";
import ColourfulText from "../ui/colourful-text";

export default function ContactMe(){  
    
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
    <motion.div
    ref={ref}
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
    transition={{ ease: "easeOut", duration: 0.5 }}
    className="w-full flex flex-col items-center justify-center mt-[200px]"
    >
        <h1 className="text-4xl font-bold mb-7">Get in Touch</h1>
        <div className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-center">
            Want to chat? Just shoot a me a dm on
            <br />
            <LinkPreview  
                url="https://www.linkedin.com/in/samarthrajput/"
                className="text-xl font-bold ml-3 mr-3"
                imageSrc="/Linkedin.png"
                isStatic ={ true}
                layout=""
            > <ColourfulText  text="Linkedin"></ColourfulText>
            </LinkPreview>
                Or
            <LinkPreview  
                url="https://x.com/Samarth__24"
                className="text-xl font-bold ml-3"
                isStatic = { true }
                imageSrc="/twitter.png"
                layout=""
            >  <ColourfulText text="Twitter"></ColourfulText>
            </LinkPreview>
            <br />

            and I'll respond whenever I can.
        </div>


    </motion.div>
    )
}