import About from "./Home/About";
import CaseStudies from "./Home/CaseStudies";
import Hero from "./Home/Hero";
import Process from "./Home/Process";
import Services from "./Home/Services";
import Testimonies from "./Home/Testimonies";
import NewsLetter from "./components/ui/NewsLetter";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <About />
      <Services />
      <CaseStudies />
      <Process />
      <Testimonies />
      <NewsLetter />
    </main>
  );
}
