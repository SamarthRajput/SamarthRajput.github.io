"use client"
import { motion} from "framer-motion"
import { useInView } from "react-intersection-observer"
import ProjectCard from "@/components/Project/Projectcard";
import Navbar from "@/components/Navbar";

export const ProjectsData = [
    {
      title: "Digital Wallet",
      description: "Created a Digital Wallet App, where user can send money to friends directly through phone number-based transfers (p2p) and keep track of all your recent transactions",
      tags: ["Turbo Repo", "CI/CD", "Next.js", "Tailwind", "Prisma", "PostgreSQL", "Typescript"],
      githubLink: "https://github.com/SamarthRajput/DigitalWallet",
      livelink: "",
      imageUrl: "/digitalwallet.jpeg"
    },
    {
      title: "Blog App",
      description: "Created a Blog App with user authentication, blog posting, and browsing capabilities. Users can sign up, post blogs, view all blogs, and read individual posts.",
      tags: ["React", "Next.js", "PostgreSQL", "Tailwind", "Prisma","Typescript"],
      githubLink: "https://github.com/SamarthRajput/Blog-app",
      livelink: "https://blog-app-red-kappa.vercel.app/",
      imageUrl: "/blogapp.png"
    }, 
    {
      title: "Wallet App",
      description: "Created a Wallet App where users manage balances and transfer funds seamlessly.",
      tags: ["React", "Tailwind CSS", "Express", "JWT", "MongoDB", "Zod"],
      githubLink: "https://github.com/SamarthRajput/Wallet-App",
      livelink: "",
      imageUrl: "/walletapp.png"
    },
    {
        title: "AI Interview App",
        description: "Created an AI-interview App where user have to turn on their camera's, audio and screen share to start the test. he question will be first spoken by the AI and then you have to answer the question",
        tags: ["React", "Tailwind CSS", "Express", "JWT", "MongoDB", "Zod"],
        githubLink: "https://github.com/SamarthRajput/Wallet-App",
        livelink: "",
        imageUrl: "/aiinterview.png"
    },
    {
        title: "Card UI Component",
        description: "Created a card UI component taken the design from a figma file. ",
        tags: ["React", "Tailwind CSS", "Javascript"],
        githubLink: "https://github.com/SamarthRajput/Bitscale-assignment",
        livelink: "https://bitscale-assignment-alpha.vercel.app/",
        imageUrl: "/cardui.png"
    }
  ] as const;
  


export default function MoreProjects(){

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    return (
        <div>
            <Navbar />
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                transition={{ ease: "easeOut", duration: 0.5 }}
                className="w-full flex flex-col items-center justify-center mt-[25px]"
                >
                <h1 className="text-4xl font-bold mb-7">Projects</h1>

                <div className="flex flex-wrap gap-5 items-center justify-center">
                    {ProjectsData.map((data) => (
                        <ProjectCard key={data.title} data={data} />
                    ))}
                </div> 
            </motion.div>
        </div>
    )
} 