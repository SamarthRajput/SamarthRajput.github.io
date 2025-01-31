import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Project/Projects";
import AboutMe from "@/components/Aboutme/AboutMe";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutMe />
      <Projects />
    </div>
  );
}
