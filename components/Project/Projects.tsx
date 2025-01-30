"use client"
import { motion} from "framer-motion"
import { useInView } from "react-intersection-observer"
import ProjectCard from "./Projectcard";
import { ModalProvider } from "../ui/animated-modal";
import Link from "next/link";
import { title } from "process";

export const ProjectsData = [{
    title: "s",
    description:
      "s",
    tags: ["React", "Next.js", "PostgreSQL", "Tailwind", "Prisma","Typescript"],
    githubLink: "https://www.google.com",
    livelink: "https://www.google.com",
    imageUrl: "sds",
}, ] as const;

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


        <Link href="/projects">
        <motion.button
          className="relative px-6 py-3 text-lg font-semibold bg-black text-white rounded-lg flex items-center gap-2 overflow-hidden"
          whileHover="hover"
        >
          More Projects
          <motion.span
            className="absolute left-0"
            variants={{
              hover: { x: 10 }, // Moves the emoji slightly when hovered
              initial: { x: 0 }, // Default position
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            🚀
          </motion.span>
        </motion.button>
      </Link>
        

    </motion.div>
}