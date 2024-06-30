import { UnifrakturCook } from "next/font/google";
import Hero from "./ui_home/hero";
import Skills from "./ui_home/Skills";
import UiProcess from "./ui_home/ui_process";
import Ui_benefit from "./ui_home/ui_benefit";


export default function Home() {
  return (
    <main className="">
      <Hero />
      <Skills/>
      <UiProcess/>
      <Ui_benefit/>
    </main>
  );
}
