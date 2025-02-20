import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#181818]  w-fit lg:w-full md:w-full xl:w-full">
     <div className="container px-12 py-4 mx-auto mt-24">
      <Navbar/>
      <HeroSection />
      <AboutSection/>
      <ProjectSection/>
      <EmailSection/>
      <Footer/>
     </div>
    </main>
  );
}
