import { UnifrakturCook } from "next/font/google";
import Hero from "./ui_home/hero";
import Skills from "./ui_home/Skills";
import UiProcess from "./ui_home/ui_process";
import Ui_benefit from "./ui_home/Ui_benefit";
import Ui_some from "./ui_home/Ui_some";
import Ui_package from "./ui_home/Ui_package";
import UiTestimonies from "./ui_home/UiTestimonies";


export default function Home() {
  return (
    <main className="">
      <Hero />
      <Skills/>
      <UiProcess/>
      <Ui_benefit/>
      <Ui_some/>
      <Ui_package/>
      <UiTestimonies/>
    </main>
  );
}
