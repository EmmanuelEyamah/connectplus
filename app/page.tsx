import About from "./Home/About";
import CaseStudies from "./Home/CaseStudies";
import Hero from "./Home/Hero";
import Process from "./Home/Process";
import Services from "./Home/Services";
import Testimonies from "./Home/Testimonies";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <About />
      <Services />
      <CaseStudies />
      <Process />
      <Testimonies />
    </main>
  );
}
