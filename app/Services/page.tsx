"use client";

import Packages from "../components/ui/Packages";
import Testimonies from "../Home/Testimonies";
import AllServices from "./AllServices";
import ServicesHero from "./Hero";

export default function Services() {
  return (
    <main className="">
      <ServicesHero />
      <AllServices />
      <Packages />
      <Testimonies />
    </main>
  );
}
