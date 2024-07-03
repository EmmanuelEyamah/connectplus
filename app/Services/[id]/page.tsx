"use client";

import Skills from "./Skills";
import Process from "./Process";
import Benefit from "./Benefits";
import Project from "./Project";
import Hero from "./Hero";
import { useParams } from "next/navigation";
import { services } from "@/dummyData/db";
import Packages from "@/app/components/ui/Packages";
import Testimonies from "@/app/Home/Testimonies";

export default function Home() {
  const params = useParams();
  const { id } = params;

  const service = services.find((service) => service._id === id);

  return (
    <main className="">
      <Hero service={service} />
      <Skills service={service} id={id} />
      <Process service={service} />
      <Benefit service={service} />
      <Project />
      <Packages />
      <Testimonies />
    </main>
  );
}
