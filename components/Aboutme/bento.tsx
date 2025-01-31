import React from "react";
import {
  FaInstagram,
  FaLink,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";
import { GrGithub, GrMailOption } from "react-icons/gr";
import MarqueeDemo from "./Skills";
import Link from "next/link";

interface BentoItem {
  id: number;
  size: string;
  component: React.ReactNode;
}

const bentoItems: BentoItem[] = [
    {
        id: 1,
        size: "md:w-2/3 w-full h-64",
        component: (
          <div className="relative overflow-hidden w-[300px] sm:w-[450px] md:w-[500px] lg:w-full">
            <MarqueeDemo />
          </div>
        ),
    },
    {
        id: 2,
        size: "md:w-1/2 w-full",
        component: (
        <div className="flex flex-col gap-5 p-6 mr-auto sm:mr-5">
            <div className="flex items-center gap-2 flex-row ">
            <FaLink className="text-xl" />
            <h1 className="text-xl text-gray-400">Connect with me</h1>
            </div>

            <div className="flex flex-col gap-5 mt-5">
            <Link
                href="https://www.linkedin.com/in/samarthrajput/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
            >
                <FaLinkedin className="md:text-3xl text-2xl" />
                <h1 className="text-sm">LinkedIn</h1>
            </Link>
            <Link
                href="https://github.com/SamarthRajput"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
            >
                <GrGithub className="md:text-3xl text-2xl" />
                <h1 className="text-sm">Github</h1>
            </Link>
            <Link
                href="https://x.com/Samarth__24"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
            >
                <FaTwitter className="md:text-3xl text-2xl" />
                <h1 className="text-sm">Twitter</h1>
            </Link>
            <Link
                href="https://www.instagram.com/samarth._.24/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
            >
                <FaInstagram className="md:text-3xl text-2xl" />
                <h1 className="text-sm">Instagram</h1>
            </Link>
            <Link
                href="ssamarth224@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
            >
                <GrMailOption className="md:text-3xl text-2xl" />
                <h1 className="text-sm">Mail</h1>
            </Link>
            </div>
        </div>
        ),
    },
];

const BentoGrid: React.FC = () => {
  return (
    <div className="flex items-center justify-center flex-wrap sm:w-[1000px] gap-2 mt-10">
      <h1 className="sm:text-4xl text-xl font-semibold sm:mb-5">Skills</h1>
      <div className="flex flex-col md:flex-row w-full gap-2">
        {bentoItems.slice(0, 2).map((item) => (
          <div key={item.id} className={`p-2 ${item.size}`}>
            <div
              className={`h-full rounded-lg flex items-center justify-center border`}
            >
              {item.component}
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col md:flex-row w-full gap-2">
        {bentoItems.slice(2, 4).map((item) => (
          <div key={item.id} className={`p-2 ${item.size}`}>
            <div
              className={`h-full rounded-lg flex items-center justify-center border`}
            >
              {item.component}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BentoGrid;