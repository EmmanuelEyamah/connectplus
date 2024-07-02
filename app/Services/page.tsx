import Packages from "./Packages";
import Cards from "./cards";
import ServicesHero from "./Hero";
import Hero from "./Hero";
import Testimonies from "./testimonies";

export default function Services(){
  return(
    <main className="">
      <ServicesHero/>
      <Cards/>
      <Packages/>
      <Testimonies/>
    </main>
  )
}