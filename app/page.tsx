import Hero from "@/components/Hero";
import Projects from "@/components/Project/Projects";
import AboutMe from "@/components/Aboutme/AboutMe";
import Experience from "@/components/Experience/Experience";
import Footer from "@/components/Footer";
import ContactMe from "@/components/ContactMe/Contactme";
export default function Home() {
  return (
    <div>
      <Hero />
      <AboutMe />
      <Projects />
      <Experience />
      <ContactMe />
      <Footer />
    </div>
  );
}
