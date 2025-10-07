"use client";
import { IoLaptopOutline } from "react-icons/io5";
import { TracingBeam } from "../ui/tracing-beam";
import { FaGraduationCap } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const experiencesData = [
  {
    title: "Computer-Science Degree",
    location: "New Delhi, India",
    organization: "Vivekananda Institute of Professional Studies",
    description:
      "I am nearing the completion of my computer engineering degree, currently in the 4th year. ",
    icon: <FaGraduationCap className="w-[40px] h-[40px]" />,
    date: "2022 - present",
  },
  {
    title: "Full Stack Developer Intern",
    location: "Remote",
    organization: "Promptly AI Pvt Ltd",
    description:
      "As a freelance Full Stack Developer, I build end-to-end web solutions, from crafting visually compelling and responsive landing pages to developing robust backend systems, ensuring seamless functionality, scalability, and a powerful online presence for businesses.",
    icon: <IoLaptopOutline className="w-[40px] h-[40px]" />,
    date: "June 2025 - Present",
  },
  {
    title: "Freelance Full Stack Developer",
    location: "Remote",
    organization: "Self-Employed",
    description:
      "As a freelance Full Stack Developer, I build responsive landing pages and powerful backend systems that enhance business presence online.",
    icon: <IoLaptopOutline className="w-[40px] h-[40px]" />,
    date: "Ongoing",
  },
] as const;

export default function Experience() {
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
      className="mt-[200px] flex items-center flex-col justify-center scroll-mt-28"
      id="experience"
    >
      <h1 className="font-bold text-3xl">My experience</h1>
      <div>
        <TracingBeam className="sm:flex hidden">
          <section className="w-full flex flex-col gap-10 items-center justify-center scroll-mt-28 py-[120px]">
            <div className="flex flex-col gap-10 max-w-[900px]">
              {experiencesData.map((items, index) => (
                <div key={index}>
                  <div className=" p-5 w-full border rounded-lg">
                    <h1 className="font-semibold text-2xl capitalize">
                      {items.title}
                    </h1>
                    <p className="font-normal mt-2">{items.location}</p>
                    <p className="font-normal mt-1">{items.organization}</p>
                    <p className="mt-4 font-normal text-gray-700 dark:text-white/75">
                      {items.description}
                    </p>
                    <p className="font-normal mt-5">{items.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </TracingBeam>

        <section className="w-full flex sm:hidden flex-col gap-10 items-center justify-center scroll-mt-28 py-[30px] ">
          <div className="flex flex-col gap-10 max-w-[900px]">
            {experiencesData.map((items, index) => (
              <div key={index}>
                <div className=" p-5 w-full border rounded-lg">
                  <h1 className="font-semibold text-2xl capitalize">
                    {items.title}
                  </h1>
                  <p className="font-normal mt-2">{items.location}</p>
                  <p className="font-normal mt-1">{items.organization}</p>
                  <p className="mt-4 font-normal text-gray-700 dark:text-white/75">
                    {items.description}
                  </p>
                  <p className="font-normal mt-5">{items.date}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </motion.div>
  );
}