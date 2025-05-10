"use client"
import { motion} from "framer-motion"
import { useInView } from "react-intersection-observer"
import ProjectCard from "./Projectcard";
import Link from "next/link";

export const ProjectsData = [
  {
    title: "Swapify - Exchange App",
    description: "Swapify is a robust exchange application that allows users to track the current share prices of various markets, such as Solana (SOL) and Bitcoin (BTC).",
    tags: ["Next.js", "Tailwind", "Express.js", "Proxy Server", "Typescript", "WebSocket"],
    githubLink: "https://github.com/SamarthRajput/Exchange-app",
    livelink: "https://swapify-seven.vercel.app/",
    imageUrl: "/exchange.png"
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
    title: "AI Interview App",
    description: "Created an AI-interview App where user have to turn on their camera's, audio and screen share to start the test. he question will be first spoken by the AI and then you have to answer the question",
    tags: ["React", "Tailwind CSS", "Express", "JWT", "MongoDB", "Zod"],
    githubLink: "https://github.com/SamarthRajput/ai-interview-app",
    livelink: "https://ai-interview-app-seven.vercel.app/",
    imageUrl: "/aiinterview.png"
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