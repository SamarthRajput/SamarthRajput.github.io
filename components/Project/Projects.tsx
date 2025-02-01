"use client"
import { motion} from "framer-motion"
import { useInView } from "react-intersection-observer"
import ProjectCard from "./Projectcard";
import Link from "next/link";

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
  } 
] as const;

export default function Projects() {

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    return <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
        className="w-full flex flex-col items-center justify-center mt-[200px]"
        >
        <h1 className="text-4xl font-bold mb-7">Projects</h1>

        <div className="flex flex-wrap gap-5 items-center justify-center">
            {ProjectsData.map((data) => (
                <ProjectCard key={data.title} data={data} />
            ))}
        </div>

      <Link href="/projects" 
        className="inline-flex items-center gap-2 mt-5 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        prefetch={false}
        target="_blank"
        rel="noopener noreferrer"
        >
        🚀 More Projects
      </Link>
          
    </motion.div>
}