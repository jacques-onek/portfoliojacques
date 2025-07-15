import About from "@/components/About";
import Auteur from "@/components/Auteur";
import Contact from "@/components/Contact";
import Experience from "@/components/Experiences";
import Formation from "@/components/Formation";
import Projects from "@/components/Projects";

export default function Home() {
  return (
     <main className=" relative flex flex-col w-[80vw] gap-y-6 lg:gap-y-20 items-center  py-5 px-2 lg:w-[92vw] xl:px-20">
           <Auteur/>
           <About/>
           <Projects/>
           <Formation/>
           <Experience/>
           <Contact/>
     </main>
  );
}
