import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Project/Projects";
import AboutMe from "@/components/Aboutme/AboutMe";
import Experience from "@/components/Experience/Experience";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutMe />
      <Projects />
      <Experience />
      <Footer />
    </div>
  );
}
