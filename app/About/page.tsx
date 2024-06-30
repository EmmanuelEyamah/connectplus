import NewsLetter from "../components/ui/NewsLetter";
import Faq from "./Faq";
import Hero from "./Hero";
import MissionVision from "./MissionVision";
import OurStory from "./OurStory";
import Teams from "./Teams";

const About = () => {
  return (
    <main>
      <Hero />
      <MissionVision />
      <OurStory />
      <Teams />
      <Faq />
      <NewsLetter />
    </main>
  );
};

export default About;
